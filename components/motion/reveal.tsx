"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export type RevealDirection = "up" | "down" | "left" | "right";

const offsetFor = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "down":
      return { x: 0, y: -distance };
    case "up":
    default:
      return { x: 0, y: distance };
  }
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: RevealDirection;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 40,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from = offsetFor(direction, distance);
    gsap.set(el, { opacity: 0, ...from });

    const play = () => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play();
            if (once) observer.disconnect();
          } else if (!once) {
            gsap.set(el, { opacity: 0, ...from });
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(el);
    };
  }, [delay, direction, distance, once]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
  distance?: number;
  /** Single direction, or "alternate" for left/right/up mix */
  direction?: RevealDirection | "alternate";
};

export function StaggerReveal({
  children,
  className,
  childSelector = ":scope > *",
  stagger = 0.12,
  distance = 44,
  direction = "up",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll<HTMLElement>(childSelector));
    if (!targets.length) return;

    const dirs: RevealDirection[] =
      direction === "alternate"
        ? targets.map((_, i) =>
            i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"
          )
        : targets.map(() => direction);

    targets.forEach((target, i) => {
      gsap.set(target, { opacity: 0, ...offsetFor(dirs[i], distance) });
    });

    const play = () => {
      targets.forEach((target, i) => {
        gsap.to(target, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          delay: i * stagger,
          overwrite: "auto",
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(targets);
    };
  }, [childSelector, direction, distance, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
