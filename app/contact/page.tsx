"use client";

import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../public/profile.png";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill out all fields.");
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
    <div className="h-[60vh] flex items-center justify-center">
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
        <div className="space-y-8 px-10">
          <h1 className="text-3xl px-5 py-10 text-center text-secondary">
            Thanks for taking the time to reach out. How can I help you today?
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
          <div>
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="cursor-pointer px-10 py-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 rounded-full"
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
