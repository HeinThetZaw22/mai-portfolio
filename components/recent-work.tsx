"use client";

import React from "react";
import Container from "./container";
import { Card } from "./ui/card";
import { GitBranch, Telescope } from "lucide-react";
import ProjectCard from "./project-card";
import { Icon } from "@iconify/react";
import Shadcn from "./icons/shadcn";
import MuxIcon from "./icons/mux";
import TanstackIcon from "./icons/tanstack";
import ImageKitIcon from "./icons/imagekit";

const Airbnb = [
  {
    icon: "devicon:nextjs",
    name: "Next.js",
  },
  {
    icon: "logos:react",
    name: "React.js",
  },
  {
    icon: "devicon:prisma",
    name: "Prisma",
  },
  {
    icon: "devicon:typescript",
    name: "TypeScript",
  },
  {
    icon: "devicon:mongodb",
    name: "MongoDB",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "Tailwind",
  },
];

const LMS = [
  {
    icon: "devicon:nextjs",
    name: "Next.js",
  },
  {
    icon: "simple-icons:clerk",
    name: "Clerk",
  },
  {
    icon: "logos:stripe",
    name: "Stripe",
  },
  {
    icon: MuxIcon,
    name: "Mux",
  },
  {
    icon: "devicon:prisma",
    name: "Prisma",
  },
  {
    icon: "devicon:typescript",
    name: "TypeScript",
  },
  {
    icon: "devicon:postgresql",
    name: "PostgreSQL",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "Tailwind",
  },
];

const NextAuth = [
  {
    icon: "devicon:nextjs",
    name: "Next.js",
  },
  {
    icon: "logos:react",
    name: "React",
  },
  {
    icon: "simple-icons:resend",
    name: "Resend",
  },
  {
    icon: Shadcn,
    name: "Shadcn/ui",
  },
  {
    icon: "devicon:prisma",
    name: "Prisma",
  },
  {
    icon: "devicon:typescript",
    name: "TypeScript",
  },
  {
    icon: "devicon:postgresql",
    name: "PostgreSQL",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "Tailwind",
  },
];

const BlogApp = [
  {
    icon: "devicon:nodejs",
    name: "Node.js",
  },
  {
    icon: "devicon:express",
    name: "Express.js",
  },
  {
    icon: "logos:react",
    name: "React",
  },
  {
    icon: "logos:vitejs",
    name: "Vite",
  },
  {
    icon: "devicon:typescript",
    name: "TypeScript",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "Tailwind",
  },
  {
    icon: "devicon:prisma",
    name: "Prisma",
  },
  {
    icon: TanstackIcon,
    name: "Tanstack",
  },
  {
    icon: "logos:axios",
    name: "Axios",
  },
  {
    icon: "devicon:postgresql",
    name: "PostgreSQL",
  },

  {
    icon: ImageKitIcon,
    name: "ImageKit",
  },
];

const RecentWork = () => {
  return (
    <Container>
      <div className=" flex flex-col py-16 items-center justify-center">
        <h1 className=" text-[2rem] py-3 text-[#141c3a] font-bold">
          My Recent Work
        </h1>
        <p className=" text-lg  font-poppins text-center text-wrap text-secondary/80">
          Here are a few past projects I've worked on.
        </p>
      </div>
      <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="Maibnb"
          demoLink="https://rent-home-burma.vercel.app/"
          description="Users can make reservations and bnb their property (airbnb clone) using email and google authentication"
          sourceLink="https://github.com/HeinThetZaw22/airbnb-clone-nextapp"
          techstacks={Airbnb}
        />
        <ProjectCard
          title="Mini LMS"
          // demoLink="https://rent-home-burma.vercel.app/"
          description="Learning platform where users can publish own courses or purchase from another"
          sourceLink="https://github.com/HeinThetZaw22/mini-lms-platform"
          techstacks={LMS}
        />
        <ProjectCard
          title="Authenication"
          // demoLink="https://rent-home-burma.vercel.app/"
          description="Full authentication with email, google, github using only next-auth (role-based, two-factor, password reset with code)"
          sourceLink="https://github.com/HeinThetZaw22/next-full-authentication"
          techstacks={NextAuth}
        />
        <ProjectCard
          title="Mini Blog App"
          // demoLink="https://rent-home-burma.vercel.app/"
          description="Users publish blog and give reviews on each other post"
          sourceLink="https://github.com/HeinThetZaw22/mini-blog-app"
          techstacks={BlogApp}
        />
      </div>
      <div className=" flex items-center pt-14 pb-20 justify-center">
        <a
          href="https://github.com/HeinThetZaw22"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 px-4 text-primary font-medium py-2 rounded-full border-2 border-primary"
        >
          <GitBranch size={20} /> See more on Github
        </a>
      </div>
    </Container>
  );
};

export default RecentWork;
