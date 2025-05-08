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
import { useRouter } from "next/navigation";

const ProjectPlanner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      !projectType ||
      !budget
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-project-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, budget, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setProjectType("");
        setBudget("");
        setMessage("");
      } else {
        toast.error("Failed to send. Try again.");
        console.error(data.error);
      }
    } catch (err) {
      console.error("Request failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
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
        <div className="lg:space-y-4 space-y-3 ld:px-10 px-2">
          <h1 className="text-3xl px-2 py-10 text-center text-[#141c3a] opacity-95">
            I&apos;m excited to learn about your project. Ready to get started?
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
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

          <div className="flex flex-col w-full sm:flex-row gap-3 lg:gap-4">
            <Select
              onValueChange={(value) => setProjectType(value)}
              value={projectType}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type of project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="mobile-app">Mobile App</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => setBudget(value)} value={budget}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Estimated budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<100k">Less than 100k Ks</SelectItem>
                <SelectItem value="100k-500k">100k Ks- 500k Ks</SelectItem>
                <SelectItem value="500k-1000k">500k Ks - 1,000k Ks</SelectItem>
                <SelectItem value="1,000k">Over 1,000k Ks</SelectItem>
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

          <div className="flex items-center gap-3 pt-5 md:justify-between justify-center">
          <button
              onClick={() => router.back()}
              className="cursor-pointer w-full py-2 text-primary border-2 border-primary hover:opacity-80 hover:scale-95 transition-all duration-200 active:scale-95 rounded-full"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="cursor-pointer w-full py-2 text-white border-2 border-primary bg-primary hover:opacity-95 transition-all duration-200 active:scale-95 rounded-full"
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

export default ProjectPlanner;
