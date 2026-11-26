
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import type { CSSProperties } from "react";

type Social = {
  name: string;
  handle: string;
  href?: string;
  copy?: string;
  icon: IconType;
  brand: string;
};

const socials: Social[] = [
  {
    name: "LinkedIn",
    handle: "chithraksha",
    href: "https://linkedin.com/in/chithraksha",
    icon: FaLinkedin,
    brand: "#0A66C2",
  },
  {
    name: "GitHub",
    handle: "chithraksha16",
    href: "https://github.com/chithraksha16",
    icon: FaGithub,
    brand: "#181717",
  },
  {
    name: "X",
    handle: "chithraksha_",
    href: "https://x.com/chithraksha_",
    icon: FaSquareXTwitter,
    brand: "#000000",
  },
  {
    name: "Discord",
    handle: "chithraksha_16",
    copy: "chithraksha_16",
    icon: FaDiscord,
    brand: "#5865F2",
  },
];

export default function SocialLinks() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async (handle: string) => {
    try {
      await navigator.clipboard.writeText(handle);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-lg border border-black/10 bg-[#fafafa] sm:grid-cols-2">

        {socials.map(
          ({ name, handle, href, copy, icon: Icon, brand }, index) => {
            const style = {
              "--brand": brand,
            } as CSSProperties;

            const classes = `
              group flex min-h-[72px] items-center gap-3
              bg-[#fafafa] px-3 py-3 text-left
              transition-colors duration-200 hover:bg-white
              sm:min-h-[80px] sm:px-4
              ${index % 2 === 0 ? "sm:border-r sm:border-black/10" : ""}
              ${index < 2 ? "border-b border-black/10" : ""}
            `;

            const content = (
              <>
                {/* Social Icon */}
                <div
                  className="
                    flex size-9 shrink-0 items-center justify-center
                    rounded-lg border border-black/10 bg-white
                    text-[#24272A] shadow-sm
                    transition-all duration-300
                    group-hover:border-transparent
                    group-hover:bg-[var(--brand)]
                    group-hover:text-white
                  "
                >
                  <Icon className="size-[18px]" />
                </div>

                {/* Name and Handle */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[13px] font-semibold tracking-tight text-[#17191B] sm:text-sm">
                    {name === "X" ? "X (Formerly Twitter)" : name}
                  </h3>

                  <p className="mt-0.5 truncate text-[11px] text-[#777B80] sm:text-xs">
                    {copy && copied ? "Copied!" : handle}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex size-6 shrink-0 items-center justify-center text-[#85898D] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#17191B]">
                  <ArrowUpRight
                    className="size-3.5"
                    strokeWidth={1.7}
                  />
                </div>
              </>
            );

            return copy ? (
              <button
                key={name}
                type="button"
                onClick={() => copyHandle(copy)}
                aria-label={`Copy my ${name} handle`}
                className={classes}
                style={style}
              >
                {content}
              </button>
            ) : (
              <Link
                key={name}
                href={href!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${name}`}
                className={classes}
                style={style}
              >
                {content}
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
}
