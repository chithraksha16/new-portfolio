import Container from "@/components/Container";
import Image from "next/image";
import RoleFlip from "@/components/RoleFlip";
import { IconTile } from "@/components/IconTile";
import { Download, Globe, Mail, MapPin,Mars, Phone } from "lucide-react";
export default function Home() {
  return (
    <>
    <div className="min-h-screen flex items-start justify-start">
    <Container className="min-h-screen">
      <section className="py-10" id="about">
      <div className="px-10 flex gap-8">
     <div className="relative shrink-0">
            <div className="rounded-full bg-gradient-to-br from-orange-400/50 via-slate-300/40 to-green-500/50 p-[2px] dark:from-orange-400/40 dark:via-white/20 dark:to-green-500/40">
              <Image
                src="/Chithraksha-photo.webp"
                width={128}
                height={128}
                alt="Chithraksha's photo"
                className="size-32 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
              />
            </div>
 
            {/* India flag badge, bottom-right of the photo */}
            <span
              className="absolute bottom-0 right-0 flex size-9 items-center justify-center rounded-full border-2 border-white bg-white shadow-md dark:border-slate-900"
              title="Based in India"
              aria-label="Based in India"
            >
              <svg viewBox="0 0 36 24" className="size-6 overflow-hidden rounded-[2px]">
                <rect width="36" height="8" y="0" fill="#FF9933" />
                <rect width="36" height="8" y="8" fill="#FFFFFF" />
                <rect width="36" height="8" y="16" fill="#138808" />
                <circle cx="18" cy="12" r="2.6" fill="none" stroke="#000080" strokeWidth="0.4" />
                <circle cx="18" cy="12" r="0.4" fill="#000080" />
              </svg>
            </span>
          </div>
      <div className="space-y-2 flex flex-col justify-end">
      <h1 className="dark:text-white text-black font-ibmplexsans font-semibold text-3xl">Chithraksha</h1>
      <h2 className=" text-sm font-sans font-medium text-gray-700 dark:text-gray-300">
        I'm a{" "}
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
     <div className="w-full flex justify-center items-center font-sans text-base mt-5">
  <div className="w-full max-w-2xl px-4">
    
    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
      
      {/* Location */}
      <div className="flex items-center gap-3 min-w-0">
        <IconTile>
          <MapPin className="size-3.5" />
        </IconTile>
        <h3 className="whitespace-nowrap">Bangalore, India</h3>
      </div>

      {/* Gender */}
      <div className="flex items-center gap-3 min-w-0">
        <IconTile>
          <Mars className="size-3.5" />
        </IconTile>
        <h3 className="whitespace-nowrap">He/him</h3>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 min-w-0">
        <IconTile>
          <Mail className="size-3.5" />
        </IconTile>
        <h3 className="whitespace-nowrap">chithrakshakharvi@gmail.com</h3>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 min-w-0">
        <IconTile>
          <Phone className="size-3.5" />
        </IconTile>
        <h3 className="whitespace-nowrap">+91 8105280460</h3>
      </div>

      {/* Resume */}
      <div className="flex items-center gap-3 min-w-0">
        <IconTile>
          <Download className="size-3.5" />
        </IconTile>
        <h3 className="whitespace-nowrap">Resume</h3>
      </div>

      {/* Website */}
      <div className="flex items-center gap-3 min-w-0">
        <IconTile>
          <Globe className="size-3.5" />
        </IconTile>
        <h3 className="whitespace-nowrap">www.chithraksha.in</h3>
      </div>

    </div>

  </div>
</div>
      {/* <div>
        <p className="font-sans text-sm">I’m a Full-Stack Developer, Freelancer, and UI-focused Designer who builds modern, responsive websites and web applications. I combine thoughtful design with scalable development
         to turn ideas into fast, functional, and engaging digital experiences.</p>
      </div> */}
      </section>
    </Container>
    </div>
    </>
  );
}