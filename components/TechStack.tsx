"use client";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiPrisma,
  SiSocketdotio,
  SiNumpy,
  SiPandas,
  SiC,
  SiSqlite,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiVsco,
  SiFigma,
  SiShadcnui,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#FFFFFF",
  },
  {
    name: "Socket.IO",
    icon: SiSocketdotio,
    color: "#FFFFFF",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#4D77CF",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "C",
    icon: SiC,
    color: "#A8B9CC",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00C7B7",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    color: "#3448C5",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "VS Code",
    icon: SiVsco,
    color: "#007ACC",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "shadcn/ui",
    icon: SiShadcnui,
    color: "#FFFFFF",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="w-full py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <h2 className="mb-8 text-4xl font-bold tracking-tight">
          Stack
        </h2>

        {/* Icons */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group relative flex items-center justify-center"
            >
              {/* Icon */}
              <Icon
                size={36}
                style={{ color }}
                className="
                  transition-all
                  duration-200
                  group-hover:scale-110
                "
              />

              {/* Tooltip */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -top-9
                  left-1/2
                  z-50
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  bg-black
                  px-2
                  py-1
                  text-[11px]
                  font-medium
                  text-white
                  opacity-0
                  shadow-lg
                  transition-all
                  duration-200
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              >
                {name}

                {/* Arrow */}
                <span
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    size-2
                    -translate-x-1/2
                    rotate-45
                    bg-black
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}