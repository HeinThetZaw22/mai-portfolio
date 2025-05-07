import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="space-x-5 flex">
      <a
        href="https://twitter.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="border-gray-100 hover:border-white border-2 hover:bg-white hover:text-primary transition duration-200 cursor-pointer rounded-full p-3"
      >
        <Twitter size={20} />
      </a>

      <a
        href="https://instagram.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="border-gray-100 hover:border-white border-2 hover:bg-white hover:text-primary transition duration-200 cursor-pointer rounded-full p-3"
      >
        <Instagram size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/hein-thet-zaw-6b5a21283/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-gray-100 hover:border-white border-2 hover:bg-white hover:text-primary transition duration-200 cursor-pointer rounded-full p-3"
      >
        <Linkedin size={20} />
      </a>

      <a
        href="mailto:heinthetzaw2212@gmail.com"
        className="border-gray-100 hover:border-white border-2 hover:bg-white hover:text-primary transition duration-200 cursor-pointer rounded-full p-3"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
