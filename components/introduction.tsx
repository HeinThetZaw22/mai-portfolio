"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Profile from "../public/profile.png";
import Container from "./container";

const Introduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const title = section.querySelector("[data-hero='title']");
    const subtitle = section.querySelector("[data-hero='subtitle']");
    const avatar = section.querySelector("[data-hero='avatar']");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        title,
        { opacity: 0, x: -36 },
        { opacity: 1, x: 0, duration: 0.8 }
      )
        .fromTo(
          subtitle,
          { opacity: 0, x: 36 },
          { opacity: 1, x: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          avatar,
          { opacity: 0, scale: 0.86, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85 },
          "-=0.4"
        );

      gsap.to(avatar, {
        y: -10,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white min-h-[calc(100dvh-76px)] sm:min-h-[calc(100dvh-88px)]">
      <Container>
        <div
          ref={sectionRef}
          className="min-h-[calc(100dvh-76px)] sm:min-h-[calc(100dvh-88px)] space-y-6 flex flex-col items-center justify-center"
        >
          <h1
            data-hero="title"
            className="text-[2.5rem] text-center text-[#141c3a] font-bold opacity-0"
          >
            Full Stack Developer
          </h1>
          <p
            data-hero="subtitle"
            className="text-xl text-center font-poppins px-3 text-wrap text-secondary/80 opacity-0"
          >
            I design and code beautifully simple things, and I love what I do
          </p>
          <Image
            data-hero="avatar"
            src={Profile}
            width={200}
            height={200}
            alt="profile"
            className="aspect-square rounded-full bg-cover opacity-0"
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
