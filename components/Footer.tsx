"use client";

import Link from "next/link";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Container from "./Container";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/chithraksha16",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chithraksha",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/chithraksha_",
    icon: FaSquareXTwitter ,
  },
];

export default function Footer() {
  return (
    <Container>
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-7 sm:flex-row sm:px-6">
        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground">
          © 2026 <span className="font-medium text-foreground">Chithraksha</span>.
          All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="group flex size-10 items-center justify-center rounded-xl border border-border bg-muted/30 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-foreground/30 hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-[18px] transition-transform group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
    </Container>
  );
}
