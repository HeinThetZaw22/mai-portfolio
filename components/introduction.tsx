import Image from "next/image";
import React from "react";
import Profile from "../public/profile.png";
import Container from "./container";

const Introduction = () => {
  return (
    <Container>
      <div className=" h-[90vh] space-y-10 flex flex-col items-center justify-center">
        <h1 className=" text-[2.5rem] text-center text-[#141c3a] font-bold">
          Frontend Developer
        </h1>
        <p className=" text-xl text-center font-poppins px-3 text-wrap text-secondary/80">
          I design and code beautifully simple things, and I love what I do
        </p>
        <Image
          src={Profile}
          width={200}
          height={200}
          alt="profile"
          className=" aspect-square rounded-full bg-cover"
        />
        <div className=" py-10"></div>
      </div>
    </Container>
  );
};

export default Introduction;
