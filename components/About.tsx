"use client";
 
import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
 
/* Edit content here. **bold** = highlighted keywords. */
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
    text: "**What I believe in**",
    children: [
      "Write code that is **simple to understand** and easy to maintain.",
      "Design interfaces with **users and usability** in mind.",
      "Keep learning, experimenting and **building real projects**.",
    ],
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
 

 
function Dot({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-[0.7em] shrink-0 rounded-full bg-muted-foreground/60 ring-4 ring-background ${
        small ? "size-1" : "size-1.5"
      }`}
    />
  );
}
 
export default function About() {
  const reduce = useReducedMotion();
 
  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const row: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 10, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
 
  return (
    <section id="about" aria-labelledby="about-title" className="w-full">
     
 
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4  sm:px-6 md:px-8">
        <h2
          id="about-title"
          className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          About
        </h2>
        <span className="hidden font-sans text-xs text-muted-foreground sm:block">
          ~/about
        </span>
      </div>
 
      {/* Content */}
      <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5 font-sans text-sm leading-7 text-muted-foreground sm:text-[15px] md:text-base md:leading-8"
        >
          {items.map((item, i) => (
            <motion.li key={i} variants={row} className="flex gap-4">
              <Dot />
              <div className="min-w-0 flex-1">
                <p className="text-pretty">
                  <Rich text={item.text} />
                </p>
                {item.children && (
                  <ul className="mt-3 space-y-1 border-l border-border pl-5 text-[13px] sm:text-sm">
                    {item.children.map((c, j) => (
                      <li key={j} className="flex gap-3">
                        <Dot small />
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
 
        {/* Footer meta */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 font-sans text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>1 year experience · Full Stack · UI/UX · Freelance</span>
          <a
            href="#projects"
            className="group flex items-center gap-1 rounded-sm text-foreground transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Explore my work
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
 
          </section>
  );
}