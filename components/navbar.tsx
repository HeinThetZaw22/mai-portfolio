"use client";

import React from "react";
import Container from "./container";
import { ArrowLeft, Heading1 } from "lucide-react";
import { usePathname } from "next/navigation";
import { usePageTransition } from "./transition-provider";
import { cn } from "@/lib/utils";

const formRoutes = ["/contact", "/project-planner", "/startup-inquiry"];

const Navbar = () => {
  const pathname = usePathname();
  const { navigate } = usePageTransition();
  const onFormRoute = formRoutes.includes(pathname);

  return (
    <header
      className={cn(
        "relative z-50 w-full",
        onFormRoute ? "bg-transparent" : "bg-white"
      )}
    >
      <Container>
        <div className="py-5 sm:py-6 flex w-full justify-between items-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Go home"
          >
            <Heading1 size={40} color="#6E07F3" />
          </button>
          <div className="flex font-poppins items-center text-sm sm:text-md sm:gap-3 gap-1">
            <a
              download
              href="/hein_thet.pdf"
              className="px-4 py-2 cursor-pointer text-[#141c3a] active:scale-95 transition duration-200 hover:text-primary"
            >
              Resume
            </a>
            {onFormRoute ? (
              <button
                type="button"
                onClick={() => navigate("/")}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 text-[#141c3a] border-2 border-[#141c3a]/20 hover:border-primary hover:text-primary transition-all duration-200 active:scale-95 rounded-full"
              >
                <ArrowLeft size={16} />
                Home
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="cursor-pointer px-4 py-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 rounded-full"
              >
                Say Hello
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
