import React from "react";
import Container from "./container";
import { Heading1, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <Container>
      <div className=" py-8 flex w-full justify-between items-center">
        <div>
          <Heading1 size={40} color="#6E07F3" />
        </div>
        <div className=" flex font-poppins items-center text-sm sm:text-md sm:gap-3 gap-1">
          <button className=" px-4 py-2 text-[#141c3a] hover:text-primary">Resume</button>
          <button className=" cursor-pointer px-4 py-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-full">
            Say Hello
          </button>
          {/* <Menu /> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
