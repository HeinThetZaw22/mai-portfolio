import { Linkedin, Mail, Facebook, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialIconsProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function SocialIcons({
  variant = "dark",
  className,
}: SocialIconsProps) {
  const linkClass =
    variant === "light"
      ? "border-primary/25 text-primary hover:border-primary hover:bg-primary hover:text-white"
      : "border-gray-100 hover:border-white hover:bg-white hover:text-primary";

  return (
    <div className={cn("space-x-3 flex", className)}>
      <a
        href="https://x.com/HeinThetZaw10?s=09"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "border-2 transition duration-200 cursor-pointer rounded-full p-3",
          linkClass
        )}
        aria-label="Twitter"
      >
        <Twitter size={18} />
      </a>

      <a
        href="https://www.facebook.com/share/1BsuJ4BuUv/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "border-2 transition duration-200 cursor-pointer rounded-full p-3",
          linkClass
        )}
        aria-label="Facebook"
      >
        <Facebook size={18} />
      </a>

      <a
        href="https://www.linkedin.com/in/hein-thet-zaw-6b5a21283/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "border-2 transition duration-200 cursor-pointer rounded-full p-3",
          linkClass
        )}
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>

      <a
        href="mailto:heinthetzaw2212@gmail.com"
        className={cn(
          "border-2 transition duration-200 cursor-pointer rounded-full p-3",
          linkClass
        )}
        aria-label="Email"
      >
        <Mail size={18} />
      </a>
    </div>
  );
}
