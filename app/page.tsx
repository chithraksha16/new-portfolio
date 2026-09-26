"use client";

import Container from "@/components/Container";
import Image from "next/image";
import RoleFlip from "@/components/RoleFlip";
import { IconTile } from "@/components/IconTile";
import {
  BadgeCheck,
  Download,
  Globe,
  Mail,
  MapPin,
  Mars,
  Phone,
  Volume2,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const playPronunciation = () => {
    const audio = new Audio("/chithraksha-pronunciation.mp3");
    audio.play();
  };

  return (
    <div className="min-h-screen flex items-start justify-center">
      <Container className="w-full min-h-screen max-w-4xl mx-auto">
        <section
          id="about"
          className="w-full py-12 sm:py-16 md:py-24"
        >
          {/* ================= IDENTITY ================= */}
          <div
            className="
              flex items-center
              gap-4 sm:gap-6 md:gap-8
              px-4 sm:px-6 md:px-8
            "
          >
            {/* Profile Image */}
            <div className="relative shrink-0">
              <div
                className="
                  rounded-full
                  bg-gradient-to-br
                  from-orange-400/50
                  via-slate-300/40
                  to-green-500/50
                  p-[2px]
                  dark:from-orange-400/40
                  dark:via-white/20
                  dark:to-green-500/40
                "
              >
                <Image
                  src="/Chithraksha-photo.webp"
                  width={112}
                  height={112}
                  alt="Chithraksha's photo"
                  priority
                  className="
                    size-20
                    xs:size-22
                    sm:size-24
                    md:size-28
                    rounded-full
                    object-cover
                    ring-2
                    ring-white
                    dark:ring-slate-900
                  "
                />
              </div>

              {/* India Badge */}
              <span
                className="
                  absolute
                  -bottom-0.5
                  -right-0.5
                  flex
                  size-6
                  sm:size-7
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-white
                  shadow-sm
                  dark:border-slate-900
                "
                title="Based in India"
                aria-label="Based in India"
              >
                <svg
                  viewBox="0 0 36 24"
                  className="size-3.5 sm:size-4 overflow-hidden rounded-[1.5px]"
                  aria-hidden="true"
                >
                  <rect width="36" height="8" y="0" fill="#FF9933" />
                  <rect width="36" height="8" y="8" fill="#FFFFFF" />
                  <rect width="36" height="8" y="16" fill="#138808" />
                  <circle
                    cx="18"
                    cy="12"
                    r="2.6"
                    fill="none"
                    stroke="#000080"
                    strokeWidth="0.4"
                  />
                  <circle
                    cx="18"
                    cy="12"
                    r="0.4"
                    fill="#000080"
                  />
                </svg>
              </span>
            </div>

            {/* Name + Role */}
            <div className="min-w-0 flex-1 space-y-2">
              {/* Name + Actions */}
              <div
                className="
                  flex
                  items-center
                  flex-wrap
                  gap-x-2
                  gap-y-2
                "
              >
                <h1
                  className="
                    min-w-0
                    font-heading
                    font-semibold
                    text-[clamp(1.75rem,5vw,2.25rem)]
                    leading-none
                    tracking-tight
                    text-black
                    dark:text-white
                  "
                >
                  Chithraksha
                </h1>

                {/* Verified Badge */}
                <BadgeCheck
                  size={26}
                  className="
                    shrink-0
                    text-blue-500
                    fill-blue-500
                    stroke-white
                    sm:size-[28px]
                  "
                  strokeWidth={2.5}
                  aria-label="Verified"
                />

                {/* Pronunciation */}
                <button
                  type="button"
                  onClick={playPronunciation}
                  aria-label="Hear pronunciation of Chithraksha"
                  className="
                    flex
                    size-9
                    sm:size-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-600
                    shadow-sm
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:bg-gray-100
                    hover:text-black
                    active:scale-95
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-gray-400
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <Volume2
                    size={18}
                    className="sm:size-[19px]"
                    strokeWidth={2.2}
                  />
                </button>
              </div>

              {/* Role */}
              <h2
                className="
                  font-sans
                  text-sm
                  sm:text-base
                  leading-snug
                  text-gray-600
                  dark:text-gray-400
                "
              >
                <RoleFlip
                  roles={[
                    "Full Stack Developer",
                    "Freelancer",
                    "Frontend Developer",
                    "Backend Developer",
                    "UI Designer",
                  ]}
                  interval={2200}
                />
              </h2>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div
            className="
              mt-8
              sm:mt-10
              md:mt-12
              h-8
              w-full
              border-y
              border-gray-200
              text-gray-300
              dark:border-white/10
              dark:text-white/10
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
            }}
          />

          {/* ================= CONTACT ================= */}
          <div
            className="
              mt-7
              sm:mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-x-8
              md:gap-x-12
              gap-y-4
              px-4
              sm:px-6
              md:px-8
              font-sans
              text-sm
            "
          >
            {/* Location */}
            <Link
              href="#"
              className="
                group
                flex
                min-w-0
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
                hover:text-black
                dark:hover:text-white
                transition-colors
              "
            >
              <IconTile>
                <MapPin className="size-3.5" />
              </IconTile>

              <span className="truncate">
                Bangalore, India
              </span>
            </Link>

            {/* Pronouns */}
            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
              "
            >
              <IconTile>
                <Mars className="size-3.5" />
              </IconTile>

              <span>He/him</span>
            </div>

            {/* Email */}
            <Link
              href="mailto:chithrakshakharvi@gmail.com"
              className="
                group
                flex
                min-w-0
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
                hover:text-black
                dark:hover:text-white
                transition-colors
              "
            >
              <IconTile>
                <Mail className="size-3.5" />
              </IconTile>

              <span className="min-w-0 truncate">
                chithrakshakharvi@gmail.com
              </span>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+918105280460"
              className="
                group
                flex
                min-w-0
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
                hover:text-black
                dark:hover:text-white
                transition-colors
              "
            >
              <IconTile>
                <Phone className="size-3.5" />
              </IconTile>

              <span>+91 81052 80460</span>
            </Link>

            {/* Resume */}
            <Link
              href="/resume.pdf"
              className="
                group
                flex
                min-w-0
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
                hover:text-black
                dark:hover:text-white
                transition-colors
              "
            >
              <IconTile>
                <Download className="size-3.5" />
              </IconTile>

              <span>Resume</span>
            </Link>

            {/* Website */}
            <Link
              href="https://www.chithraksha.in"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-w-0
                items-center
                gap-3
                text-gray-700
                dark:text-gray-300
                hover:text-black
                dark:hover:text-white
                transition-colors
              "
            >
              <IconTile>
                <Globe className="size-3.5" />
              </IconTile>

              <span className="min-w-0 truncate">
                www.chithraksha.in
              </span>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}