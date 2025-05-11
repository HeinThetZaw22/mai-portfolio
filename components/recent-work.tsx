"use client";

import React from "react";
import Container from "./container";
import { GitBranch } from "lucide-react";
import ProjectCard from "./project-card";
import Shadcn from "./icons/shadcn";
import MuxIcon from "./icons/mux";
import TanstackIcon from "./icons/tanstack";
import ImageKitIcon from "./icons/imagekit";
import AirbnbImage from "../public/airbnb.png";
import LmsImage from "../public/lms.png";
import AuthImage from "../public/auth.png";
import BlogImage from "../public/blog.png";
import ExpenseImage from "../public/expense.png";

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

const ExpenseApp = [
  {
    icon: "logos:react",
    name: "React Native",
  },
  {
    icon: "logos:firebase",
    name: "Firebase",
  },
  {
    icon: "logos:expo-icon",
    name: "Expo",
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
          Here are a few past projects I&apos;ve worked on.
        </p>
      </div>
      <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="Maibnb"
          image={AirbnbImage}
          demoLink="https://rent-home-burma.vercel.app/"
          description="Users can make reservations and bnb their property (airbnb clone) using email and google authentication"
          sourceLink="https://github.com/HeinThetZaw22/airbnb-clone-nextapp"
          techstacks={Airbnb}
        />
        <ProjectCard
          title="Mini LMS"
          image={LmsImage}
          demoLink="https://mai-1sli41qop-heinthetzaw22s-projects.vercel.app/"
          description="Learning platform where users can publish own courses or purchase from another"
          sourceLink="https://github.com/HeinThetZaw22/mini-lms-platform"
          techstacks={LMS}
        />
        <ProjectCard
          title="Authenication"
          image={AuthImage}
          demoLink="https://my-auth-service.vercel.app/"
          description="Full authentication with email, google, github using only next-auth (role-based, two-factor, password reset with code)"
          sourceLink="https://github.com/HeinThetZaw22/next-full-authentication"
          techstacks={NextAuth}
        />
        <ProjectCard
          title="Mini Blog Website"
          image={BlogImage}
          // demoLink="https://rent-home-burma.vercel.app/"
          description="Users publish blog and give reviews on each other post"
          sourceLink="https://github.com/HeinThetZaw22/mini-blog-app"
          techstacks={BlogApp}
        />
        <ProjectCard
          title="Expense Tracker App"
          image={ExpenseImage}
          description="To track expense of my own, developed expense tracker app using firebase console"
          sourceLink="https://github.com/HeinThetZaw22/expense-tracker"
          techstacks={ExpenseApp}
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
