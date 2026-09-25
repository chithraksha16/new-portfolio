import Container from "@/components/Container";
import Image from "next/image";
import RoleFlip from "@/components/RoleFlip";
import { IconTile } from "@/components/IconTile";
import { Download, Globe, Mail, MapPin, Mars, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <Container className="min-h-screen max-w-4xl mx-auto "> {/* px-6 md:px-8 */}
        <section className="py-16 md:py-24" id="about">
          {/* Identity block */}
          <div className="flex items-center gap-6 md:gap-8 px-6 md:px-8">
            <div className="relative shrink-0">
              <div className="rounded-full bg-gradient-to-br from-orange-400/50 via-slate-300/40 to-green-500/50 p-[2px] dark:from-orange-400/40 dark:via-white/20 dark:to-green-500/40">
                <Image
                  src="/Chithraksha-photo.webp"
                  width={112}
                  height={112}
                  alt="Chithraksha's photo"
                  className="size-24 md:size-28 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
                />
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 flex size-7 items-center justify-center rounded-full border-2 border-white bg-white shadow-sm dark:border-slate-900"
                title="Based in India"
                aria-label="Based in India"
              >
                <svg viewBox="0 0 36 24" className="size-4 overflow-hidden rounded-[1.5px]">
                  <rect width="36" height="8" y="0" fill="#FF9933" />
                  <rect width="36" height="8" y="8" fill="#FFFFFF" />
                  <rect width="36" height="8" y="16" fill="#138808" />
                  <circle cx="18" cy="12" r="2.6" fill="none" stroke="#000080" strokeWidth="0.4" />
                  <circle cx="18" cy="12" r="0.4" fill="#000080" />
                </svg>
              </span>
            </div>

            <div className="space-y-1.5">
              <h1 className="font-heading font-semibold text-3xl md:text-4xl text-black dark:text-white tracking-tight">
                Chithraksha
              </h1>
              <h2 className="font-sans text-base text-gray-600 dark:text-gray-400">
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

          {/* Divider */}
        <div
  className="mt-10 md:mt-12 h-10 w-full border-y border-gray-200 text-gray-300 dark:border-white/10 dark:text-white/10"
  style={{
    backgroundImage:
      "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
  }}
/>

          {/* Contact details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 font-sans text-sm px-6 md:px-8">
            <Link
              href="#"
              className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit"
            >
              <IconTile>
                <MapPin className="size-3.5" />
              </IconTile>
              <span>Bangalore, India</span>
            </Link>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 w-fit">
              <IconTile>
                <Mars className="size-3.5" />
              </IconTile>
              <span>He/him</span>
            </div>

            <Link
              href="mailto:chithrakshakharvi@gmail.com"
              className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit"
            >
              <IconTile>
                <Mail className="size-3.5" />
              </IconTile>
              <span className="truncate">chithrakshakharvi@gmail.com</span>
            </Link>

            <Link
              href="tel:+918105280460"
              className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit"
            >
              <IconTile>
                <Phone className="size-3.5" />
              </IconTile>
              <span>+91 81052 80460</span>
            </Link>

            <Link
              href="/resume.pdf"
              className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit"
            >
              <IconTile>
                <Download className="size-3.5" />
              </IconTile>
              <span>Resume</span>
            </Link>

            <Link
              href="https://www.chithraksha.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors w-fit"
            >
              <IconTile>
                <Globe className="size-3.5" />
              </IconTile>
              <span>www.chithraksha.in</span>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}