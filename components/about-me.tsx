"use client";

import React from "react";
import Container from "./container";
import {
  Code,
  DatabaseBackup,
  MessageSquareText,
  TabletSmartphone,
} from "lucide-react";
import RoleCard from "./role-card";
import { Reveal, StaggerReveal } from "./motion/reveal";
import { usePageTransition } from "./transition-provider";

const AboutMe = () => {
  const { navigate } = usePageTransition();

  return (
    <>
      <div className="bg-primary">
        <Container>
          <div className="md:pb-40 pb-24 pt-24 flex space-y-5 flex-col items-center justify-center">
            <Reveal direction="left" distance={48}>
              <h1 className="text-white text-center text-2xl md:text-4xl font-bold">
                Hi, I&apos;m Hein Thet. It&apos;s a pleasure to meet you.
              </h1>
            </Reveal>
            <Reveal direction="right" delay={0.12} distance={48}>
              <p className="px-2 sm:px-8 md:px-24 lg:px-24 text-pretty text-center leading-8 text-md md:text-lg text-white font-poppins">
                I&apos;ve been a developer for the past two years, during which
                time I&apos;ve worked both freelance and onsite. I&apos;ve had
                the opportunity to collaborate with talented individuals to
                build digital products for businesses and consumers alike.
                I&apos;m a naturally curious person, quietly confident, and
                always striving to enhance my skills.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>
      <div className="bg-white relative">
        <Container>
          <StaggerReveal
            className="grid grid-cols-1 pt-10 md:pt-0 md:grid-cols-3 gap-3"
            direction="alternate"
            distance={56}
            stagger={0.14}
          >
            <RoleCard
              icon={Code}
              title="Frontend Developer"
              description="I enjoy crafting beautiful, responsive interfaces
          and bringing ideas to life in the browser."
              techStacksTitle="Languages"
              techStacks={[
                "React.js, Next.js",
                "Typescript",
                "Git",
                "Tanstack, RTK Query, Axios",
                "Redux, Zustand",
                "Tailwindcss",
                "Shadcn, MUI, Ant-Design",
              ]}
            />
            <RoleCard
              icon={DatabaseBackup}
              title="Backend Developer"
              description="I love building powerful APIs
                  and creating the logic that drives applications."
              techStacksTitle="Languages"
              techStacks={[
                "Node.js (Express/Nest)",
                "Typescript",
                "Prisma",
                "AWS S3",
                "MongoDB, MYSQL, PostgreSQL, MSSQL",
                "Basic knowledge of server deployment",
              ]}
            />
            <RoleCard
              icon={TabletSmartphone}
              title="Mobile Developer"
              description="I enjoy developing mobile apps to solve everyday problems and
                  explore new ideas."
              techStacksTitle="Languages"
              techStacks={[
                "React Native",
                "React.js core concepts",
                "Typescript",
              ]}
            />
          </StaggerReveal>
        </Container>
      </div>
      <div>
        <Container>
          <Reveal
            direction="up"
            className="flex flex-col space-y-5 sm:pt-12 items-center justify-center"
          >
            <h1 className="text-lg lg:text-xl font-bold text-center text-[#141c3a]">
              Interested in collaborating with me?
            </h1>
            <p className="text-pretty text-center text-md text-secondary/70 font-poppins">
              I&apos;m always open to discussing full stack development or
              collaboration opportunities
            </p>
            <button
              onClick={() => navigate("/startup-inquiry")}
              className="cursor-pointer font-poppins flex gap-3 px-4 py-2 mt-5 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-full"
            >
              <MessageSquareText /> Start a conversation
            </button>
          </Reveal>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
