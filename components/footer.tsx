"use client"

import React from "react";
import Container from "./container";
import { Copyright, HandMetal } from "lucide-react";
import SocialIcons from "./social-icons";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className=" bg-primary relative pt-56 text-white">
      <Container>
        <div className=" flex flex-col md:flex-row items-center justify-between -mt-64 z-10 gap-4 px-8 py-12 rounded-lg bg-[#141c3a]">
          <h1 className=" text-3xl text-nowrap font-bold">Start a project</h1>
          <div className=" font-poppins font-medium space-y-2 tracking-wide text-sm text-center px-3">
            <p>Interested in working together?</p>
            <p>We should queue up a time to chat.</p>
            <p>I&apos;ll buy the coffee</p>
          </div>
          <button
            onClick={() => router.push("/project-planner")}
            className="flex active:scale-95 font-poppins items-center gap-2 text-white text-nowrap cursor-pointer hover:bg-emerald-300 hover:border-emerald-300 hover:text-secondary transition-all duration-200 px-6 font-medium py-2 rounded-full border-2 border-emerald-300"
          >
            <HandMetal size={20} /> Let&apos;s do this
          </button>
        </div>
        <div className=" py-20 flex gap-8 flex-col items-center justify-center">
          <h1 className=" text-center text-2xl font-light text-gray-300">
            Living, learning, & leveling up <br /> one day at a time
          </h1>
          <SocialIcons />
          <div className=" font-poppins text-gray-300 text-sm flex gap-2">
            Personally handcrafted <Copyright size={20} /> 2025
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
