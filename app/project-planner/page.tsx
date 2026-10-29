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
import React, { FormEvent, useLayoutEffect, useRef, useState } from "react";
import Profile from "../../public/profile.png";
import toast from "react-hot-toast";
import gsap from "gsap";
import SocialIcons from "@/components/social-icons";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Rocket,
  Send,
} from "lucide-react";
import { usePageTransition } from "@/components/transition-provider";

const ProjectPlanner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { navigate } = usePageTransition();
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const left = page.querySelectorAll("[data-form='left'] > *");
    const formBits = page.querySelectorAll("[data-form='form'] > *");

    const ctx = gsap.context(() => {
      gsap.set([left, formBits], { opacity: 0, y: 28 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 });
      tl.to(left, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
      }).to(
        formBits,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
        },
        "-=0.35"
      );
    }, page);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
        toast.success("Project details sent successfully!");
      } else {
        toast.error("Failed to send. Try again.");
        console.error(data.error);
      }
    } catch (err) {
      console.error("Request failed", err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "h-12 rounded-xl border-primary/15 bg-white focus-visible:ring-primary";

  return (
    <div ref={pageRef} className="relative min-h-[calc(100dvh-88px)] pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start pt-6 lg:pt-10">
          <aside
            data-form="left"
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-primary/15 blur-md" />
              <Image
                src={Profile}
                width={120}
                height={120}
                alt="Hein Thet"
                className="relative aspect-square rounded-full object-cover ring-4 ring-white shadow-lg"
                priority
              />
            </div>

            <div className="space-y-3">
              <p className="font-poppins text-sm tracking-[0.2em] uppercase text-primary">
                Project planner
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141c3a] leading-tight">
                Ready to start your project?
              </h1>
              <p className="font-poppins text-base text-secondary/70 max-w-md leading-relaxed">
                I&apos;m excited to learn about what you&apos;re building. Share
                the type, budget, and details — I&apos;ll get back to you soon.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 font-poppins text-[#141c3a]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Rocket size={18} />
              </span>
              Web, mobile, branding, and more
            </div>

            <a
              href="mailto:heinthetzaw2212@gmail.com"
              className="group inline-flex items-center gap-3 font-poppins text-[#141c3a] hover:text-primary transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={18} />
              </span>
              heinthetzaw2212@gmail.com
              <ArrowUpRight
                size={16}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <SocialIcons variant="light" className="pt-2" />
          </aside>

          <form
            data-form="form"
            onSubmit={handleSubmit}
            className="w-full rounded-3xl border border-primary/10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_-30px_rgba(110,7,243,0.35)] space-y-6"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-[#141c3a]">
                Plan your project
              </h2>
              <p className="font-poppins text-sm text-secondary/60">
                Fill in the basics and I&apos;ll follow up with next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block space-y-2">
                <span className="font-poppins text-sm text-[#141c3a]">Name</span>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                  autoComplete="name"
                />
              </label>
              <label className="block space-y-2">
                <span className="font-poppins text-sm text-[#141c3a]">Email</span>
                <Input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
                  autoComplete="email"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block space-y-2">
                <span className="font-poppins text-sm text-[#141c3a]">
                  Type of project
                </span>
                <Select
                  onValueChange={(value) => setProjectType(value)}
                  value={projectType}
                >
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <label className="block space-y-2">
                <span className="font-poppins text-sm text-[#141c3a]">
                  Estimated budget
                </span>
                <Select
                  onValueChange={(value) => setBudget(value)}
                  value={budget}
                >
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<100k">Less than 100k Ks</SelectItem>
                    <SelectItem value="100k-500k">100k Ks – 500k Ks</SelectItem>
                    <SelectItem value="500k-1000k">500k Ks – 1,000k Ks</SelectItem>
                    <SelectItem value="1,000k">Over 1,000k Ks</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>

            <label className="block space-y-2">
              <span className="font-poppins text-sm text-[#141c3a]">
                Additional details
              </span>
              <Textarea
                placeholder="Goals, features, timeline — anything that helps."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[140px] rounded-xl border-primary/15 bg-white focus-visible:ring-primary resize-y"
              />
            </label>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="cursor-pointer sm:w-auto px-6 py-3 font-poppins text-[#141c3a] border-2 border-[#141c3a]/15 hover:border-primary hover:text-primary transition-all duration-200 active:scale-95 rounded-full"
              >
                Back home
              </button>
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 py-3 font-poppins text-white border-2 border-primary bg-primary hover:opacity-95 transition-all duration-200 active:scale-95 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send details <Send size={16} />
                  </>
                )}
              </button>
            </div>

            {sent && (
              <p className="flex items-center justify-center gap-2 font-poppins text-sm text-emerald-600">
                <CheckCircle2 size={18} />
                Project details sent — talk soon!
              </p>
            )}
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ProjectPlanner;
