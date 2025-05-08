"use client";
import React from "react";
import Container from "./container";
import { Heading1 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <Container>
      <div className=" py-8 flex w-full justify-between items-center">
        <div onClick={() => router.push("/")} className=" cursor-pointer">
          <Heading1 size={40} color="#6E07F3" />
        </div>
        <div className=" flex font-poppins items-center text-sm sm:text-md sm:gap-3 gap-1">
          <a
            download
            href="/resume.pdf"
            className=" px-4 py-2 cursor-pointer text-[#141c3a] active:scale-95 transition duration-200 hover:text-primary"
          >
            Resume
          </a>
          {pathname !== "/contact" && pathname !== "/project-planner" && (
            <button
              onClick={() => router.push(`/contact`)}
              className=" cursor-pointer px-4 py-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 rounded-full"
            >
              Say Hello
            </button>
          )}
          {/* <Menu /> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
