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
          <div className="flex flex-col py-5" >
            <div className="flex">
          <div>
            <Link href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg>
            </Link>
          </div>
          <div>
            <Link href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><g fill="#181616"><path fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd" /><path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0" /></g></svg>
            </Link>
          </div>
          </div>
          <div className="flex">
          <div>
            <Link href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.99em" height="1em" viewBox="0 0 251 256"><path d="M149.079 108.399L242.33 0h-22.098l-80.97 94.12L74.59 0H0l97.796 142.328L0 256h22.1l85.507-99.395L175.905 256h74.59L149.073 108.399zM118.81 143.58l-9.909-14.172l-78.84-112.773h33.943l63.625 91.011l9.909 14.173l82.705 118.3H186.3l-67.49-96.533z" /></svg>
            </Link>
          </div>
          <div>
            <Link href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.29em" height="1em" viewBox="0 0 256 199"><path fill="#5865f2" d="M216.856 16.597A208.5 208.5 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0 0 79.735 175.3a136.4 136.4 0 0 1-21.846-10.632a109 109 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 0 0 5.355 4.237a136 136 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2s23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18" /></svg>
            </Link>
          </div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  );
}