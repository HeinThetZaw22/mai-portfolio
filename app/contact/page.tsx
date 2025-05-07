"use client"
import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactMe = () => {
  return (
    <div className=" h-[60vh] flex items-center justify-center">
      <Container>
        <div className=" space-y-8 px-10">
          <h1 className=" text-3xl px-5 py-10 text-center text-secondary ">
            Thanks for taking the time to reach out. How can I help you today?
          </h1>
          <div className="flex items-center gap-8">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
          </div>
          <div>
            <Textarea placeholder="Message" />
          </div>
          <div className=" flex items-center justify-center">
          <button onClick={() => {}} className=" cursor-pointer px-10 py-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 rounded-full">
            Submit
          </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactMe;
