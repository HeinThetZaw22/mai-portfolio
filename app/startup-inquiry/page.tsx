"use client";

import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../public/profile.png";
import toast from "react-hot-toast";

const StartUpInquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      !projectType ||
      !interest
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/startup-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, interest, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setProjectType("");
        setInterest("");
        setMessage("");
      } else {
        alert("Failed to send. Try again.");
        console.error(data.error);
      }
    } catch (err) {
      console.error("Request failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[70vh] pt-20 flex items-center justify-center">
      <Container>
        <div className="flex items-center justify-center">
          <Image
            src={Profile}
            width={100}
            height={100}
            alt="profile"
            className="aspect-square rounded-full bg-cover"
          />
        </div>
        <div className="space-y-8 px-10">
          <h1 className="text-3xl px-5 py-10 text-center text-[#141c3a] opacity-95">
            Want to discuss a startup collaboration? I'm most definitely game.
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full sm:flex-row gap-8">
            <Select
              onValueChange={(value) => setProjectType(value)}
              value={projectType}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type of project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommere">Ecommerce</SelectItem>
                <SelectItem value="lms-app">LMS Platform</SelectItem>
                <SelectItem value="management-app">Management App</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => setInterest(value)}
              value={interest}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Your Interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="collaborator">Collaborator</SelectItem>
                <SelectItem value="investor">Investor</SelectItem>
                <SelectItem value="co-founder">Co-founder</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Textarea
              placeholder="Additional details"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="cursor-pointer max-sm:w-full px-10 py-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 rounded-full"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {sent && (
            <p className="text-center text-green-600">
              Message sent successfully!
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StartUpInquiry;
