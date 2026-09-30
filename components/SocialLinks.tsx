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

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);

  const copyHandle = async (handle: string) => {
    try {
      await navigator.clipboard.writeText(handle);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {}
  };

  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 border border-black/10 bg-[#fafafa] sm:grid-cols-2">
        {socials.map(
          ({ name, handle, href, copy, icon: Icon, brand }, index) => {
            const style = {
              "--brand": brand,
            } as CSSProperties;

            const content = (
              <>
                {/* Icon */}
                <div
                  className="
                    flex
                    size-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-black/10
                    bg-white
                    text-[#24272A]
                    shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-300
                    group-hover:border-transparent
                    group-hover:bg-[var(--brand)]
                    group-hover:text-white
                    group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    sm:size-[52px]
                  "
                >
                  <Icon className="size-6 sm:size-7" />
                </div>

                {/* Name + Handle */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-sm
                      font-semibold
                      tracking-[-0.01em]
                      text-[#17191B]
                      sm:text-base
                    "
                  >
                    {name === "X" ? "X (Formerly Twitter)" : name}
                  </h3>

                  <p
                    className="
                      mt-1
                      truncate
                      text-xs
                      text-[#777B80]
                      sm:text-sm
                    "
                  >
                    {copy && copied ? "Copied!" : handle}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    text-[#85898D]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#17191B]
                  "
                >
                  <ArrowUpRight
                    className="
                      size-4
                      sm:size-[18px]
                    "
                    strokeWidth={1.5}
                  />
                </div>
              </>
            );

            const classes = `
              group
              relative
              flex
              min-h-[92px]
              items-center
              gap-4
              border-b
              border-black/10
              bg-[#fafafa]
              px-5
              py-5
              transition-all
              duration-300
              hover:bg-white
              sm:min-h-[112px]
              sm:px-6
              sm:py-6
              ${
                index % 2 === 0
                  ? "sm:border-r"
                  : ""
              }
              ${
                index >= 2
                  ? "sm:border-b-0"
                  : ""
              }
              ${
                index === 1
                  ? "sm:border-b"
                  : ""
              }
            `;

            return copy ? (
              <button
                key={name}
                type="button"
                onClick={() => copyHandle(copy)}
                aria-label={`Copy my ${name} handle`}
                className={`${classes} text-left`}
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
};

export default SocialLinks;