
"use client";

import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Item = { text: string; children?: string[] };

const items: Item[] = [
  {
    text: "**Full Stack Developer** with 1 year of hands-on experience, building modern, responsive and user-focused web applications.",
  },
  {
    text: "Comfortable working across the **MERN stack, Next.js, TypeScript, Redux, Prisma, Docker,** and modern frontend technologies.",
  },
  {
    text: "I also work as a **UI Designer**, using **Figma** to design interfaces before turning them into responsive, production-ready experiences.",
  },
  {
    text: "Alongside development, I work as a **Freelancer**, collaborating with clients to understand their goals, design practical solutions and build websites that help their businesses establish a stronger digital presence.",
  },
  {
    text: "Passionate about turning ideas into **useful, polished and scalable products**. I care about clean code, thoughtful UI, performance, responsiveness and creating experiences that feel simple to use.",
  },
  {
    text: "Currently focused on improving my full-stack engineering skills and learning more about **system design, DevOps and modern software architecture**.",
  },
  {
    text: "**Vision:** To become a well-rounded developer who brings together engineering, design and problem-solving to build products that are reliable, meaningful and enjoyable to use.",
  },
  {
    text: "**Current direction:** Building full-stack projects, working with clients, improving my engineering practices and exploring new technologies that can help me build better products.",
  },
];

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="mt-[0.65em] size-1 shrink-0 rounded-full bg-muted-foreground/60"
    />
  );
}

export default function About() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
  };

  const row: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" aria-labelledby="about-title" className="mt-3 w-full">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 sm:px-5 md:px-6">
        <h2
          id="about-title"
          className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
        >
          About
        </h2>

        <span className="hidden font-sans text-[11px] text-muted-foreground sm:block">
          ~/about
        </span>
      </div>

      {/* Content */}
      <div className="px-4 py-3 sm:px-5 md:px-6">
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-2.5 font-sans text-[13px] leading-6 text-muted-foreground sm:space-y-3 sm:text-sm sm:leading-6 md:text-[15px] md:leading-7"
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              variants={row}
              className="flex items-start gap-2.5 sm:gap-3"
            >
              <Dot />

              <div className="min-w-0 flex-1">
                <p className="text-pretty">
                  <Rich text={item.text} />
                </p>

                {item.children && (
                  <ul className="mt-2 space-y-1 border-l border-border pl-4 text-xs sm:text-[13px]">
                    {item.children.map((c, j) => (
                      <li key={j} className="flex gap-2">
                        <Dot />
                        <p className="text-pretty">
                          <Rich text={c} />
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer */}
        <div className="mt-5 flex flex-col gap-2 border-t border-border pt-3 font-sans text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <span>1 year experience · Full Stack · UI/UX · Freelance</span>

          <a
            href="#projects"
            className="group flex items-center gap-1 text-foreground transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Explore my work
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
