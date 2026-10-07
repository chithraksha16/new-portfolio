"use client";

import { motion } from "framer-motion";

type Skill =
  | {
      name: string;
      icon: string;
      image?: never;
    }
  | {
      name: string;
      image: string;
      icon?: never;
    };

const skills: Skill[] = [
  // ─────────────────────────────────────
  // Skill Icons
  // ─────────────────────────────────────
  {
    name: "HTML",
    icon: "html",
  },
  {
    name: "CSS",
    icon: "css",
  },
  {
    name: "JavaScript",
    icon: "js",
  },
  {
    name: "TypeScript",
    icon: "ts",
  },
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "nextjs",
  },
  {
    name: "Node.js",
    icon: "nodejs",
  },
  {
    name: "Express.js",
    icon: "express",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "Redux",
    icon: "redux",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    name: "Prisma",
    icon: "prisma",
  },
  {
    name: "C",
    icon: "c",
  },
  {
    name: "SQLite",
    icon: "sqlite",
  },
  {
    name: "Docker",
    icon: "docker",
  },
  {
    name: "Vercel",
    icon: "vercel",
  },
  {
    name: "Netlify",
    icon: "netlify",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "GitHub",
    icon: "github",
  },
  {
    name: "VS Code",
    icon: "vscode",
  },
  {
    name: "Figma",
    icon: "figma",
  },

  // ─────────────────────────────────────
  // Devicon alternatives
  // ─────────────────────────────────────
  {
    name: "Framer Motion",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  {
    name: "NumPy",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "Socket.IO",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  },

  // ─────────────────────────────────────
  // Local custom icons
  // ─────────────────────────────────────
  {
    name: "Zustand",
    image: "/icons/zustand.svg",
  },
  {
    name: "shadcn/ui",
    image: "/icons/shadcn.svg",
  },
];


// ─────────────────────────────────────
// Container animation
// ─────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.1,
    },
  },
};


// ─────────────────────────────────────
// Individual skill animation
// ─────────────────────────────────────

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 16,
    },
  },
};


export default function TechStack() {
  return (
    <section id="stack" className="w-full py-4">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <h2 className="mb-8 text-4xl font-bold tracking-tight">
          Tech Stack
        </h2>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-7 sm:justify-start"
        >
          {skills.map((skill) => {
            const imageUrl =
              "image" in skill
                ? skill.image
                : `https://skillicons.dev/icons?i=${skill.icon}`;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                "
              >
                {/* Icon */}
                <motion.img
                  src={imageUrl}
                  alt={skill.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  whileHover={{
                    scale: 1.12,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 18,
                  }}
                  className="
                    size-10
                    object-contain
                    transition-transform
                    duration-200
                  "
                />

                {/* Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-10
                    left-1/2
                    z-50
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-black
                    px-2.5
                    py-1.5
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
                  {skill.name}

                  {/* Tooltip Arrow */}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}