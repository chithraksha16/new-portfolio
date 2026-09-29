"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
    hover: "hover:bg-[#0A66C2]/10",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
    color: "text-[#181717]",
    hover: "hover:bg-black/5",
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: FaSquareXTwitter,
    color: "text-[#181717]",
    hover: "hover:bg-black/5",
  },
  {
    name: "Discord",
    href: "https://discord.com/",
    icon: FaDiscord,
    color: "text-[#5865F2]",
    hover: "hover:bg-[#5865F2]/10",
  },
];

const SocialLinks = () => {
  return (
    <div className="w-full py-5">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name}`}
              className={`group flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md ${social.hover}`}
            >
              <Icon
                className={`size-5 transition-transform duration-300 group-hover:scale-110 ${social.color}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;