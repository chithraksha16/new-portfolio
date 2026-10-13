"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  GitBranch,
  ArrowUpRight,
  FolderCode,
} from "lucide-react";

const projects = [
  {
    title: "IngreWish",
    description:
      "IngreWish generates personalized recipes based on your ingredients and taste cravings, including detailed nutrition like calories and protein.",
    image: "/ingrewish.webp",
    demoUrl: "https://ingre-wish.vercel.app/",
    githubUrl: "https://github.com/chithraksha16/IngreWish",
    tags: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Gemini API",
      "MongoDB",
      "Zustand",
      "Tailwind CSS",
    ],
    features: [
      "Gemini API powers intelligent recipe generation from ingredients and cravings.",
      "Node.js with TypeScript handles backend, APIs, and AI logic.",
      "React with Zustand manages dynamic UI and global recipe state.",
      "Tailwind CSS and Framer Motion create responsive, animated user experiences.",
    ],
  },
  {
    title: "Pingme",
    description:
      "Pingme is a real-time chat app where users can text, share photos, upload profiles, and choose from 10+ themes.",
    image: "/pingme1.webp",
    demoUrl: "https://pingme-theta.vercel.app/",
    githubUrl: "https://github.com/chithraksha16/Pingme",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Zustand",
      "Tailwind CSS",
    ],
    features: [
      "Real-time messaging powered by Socket.io and a Node.js backend.",
      "React.js with Zustand handles UI state and user interactions.",
      "MongoDB stores user data, messages, and media.",
      "Tailwind CSS with DaisyUI enables themed, responsive styling.",
    ],
  },
  {
    title: "Interest-tok",
    description:
      "Ask questions, post ideas, or share facts—Interest-tok brings people together to comment, discuss, and like what matters to them.",
    image: "/intrest-tok.webp",
    demoUrl: "https://intrest-tok.vercel.app/",
    githubUrl: "https://github.com/chithraksha16/Intrest-tok",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "React.js delivers a dynamic and interactive user interface.",
      "Context API manages global state for posts, likes, and comments.",
      "Node.js and Express.js handle server-side logic and REST APIs.",
      "MongoDB stores posts, user data, comments, and engagement details.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      {/* Section heading */}
      <div className="border-b border-border">
        <h2 className="px-2 pb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>

        <p className="max-w-2xl px-2 pb-5 text-sm leading-6 text-muted-foreground sm:text-base">
          A selection of projects I've built, exploring full-stack
          development, AI-powered applications, and real-time experiences.
        </p>
      </div>

      {/* Projects list */}
      <div>
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group border-b border-border py-7 sm:py-9"
          >
            <div className="grid gap-6 px-2 sm:gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              {/* Project screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted/30">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-3 top-3 rounded-full border border-border/60 bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  Project 0{index + 1}
                </span>
              </div>

              {/* Project details */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <FolderCode className="mt-1 size-5 shrink-0 text-muted-foreground" />
                </div>

                {/* Features */}
                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Key features
                  </h4>

                  <ul className="space-y-2.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                  >
                    Live Demo
                    <ExternalLink className="size-4" />
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <GitBranch className="size-4" />
                    Source Code
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}