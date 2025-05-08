"use client";

import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../public/profile.png";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
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
        <div className=" flex items-center justify-center">
          <Image
            src={Profile}
            width={100}
            height={100}
            alt="profile"
            className=" aspect-square rounded-full bg-cover"
          />
        </div>
        <div className="lg:space-y-8 space-y-3 lg:px-10 px-2">
          <h1 className="text-3xl px-5 py-10 text-center text-secondary">
            Thanks for taking the time to reach out. How can I help you today?
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-8">
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
          <div>
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center pt-5 md:justify-between gap-3 justify-center">
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

export default ContactMe;
