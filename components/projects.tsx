
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
    image: "/Chithraksha-photo.webp",
    demoUrl: "",
    githubUrl: "",
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
    image: "/Chithraksha-photo.webp",
    demoUrl: "",
    githubUrl: "",
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
    image: "/Chithraksha-photo.webp",
    demoUrl: "",
    githubUrl: "",
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
    <section id="projects" className="mt-3 w-full">

      {/* Header - Same as other sections */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 sm:px-5 md:px-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Projects
        </h2>

        <span className="hidden font-sans text-[11px] text-muted-foreground sm:block">
          ~/projects
        </span>
      </div>

      {/* Section Description */}
      <div className="border-b border-border px-4 py-3 sm:px-5 md:px-6">
        <p className="max-w-2xl text-[13px] leading-6 text-muted-foreground sm:text-sm">
          A selection of projects I've built, exploring full-stack
          development, AI-powered applications, and real-time experiences.
        </p>
      </div>

      {/* Projects List */}
      <div>
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group border-b border-border py-5 sm:py-6"
          >
            <div className="grid gap-4 px-4 sm:gap-5 sm:px-5 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-6 md:px-6">

              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/30">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-2.5 top-2.5 rounded-full border border-border/60 bg-background/90 px-2.5 py-1 text-[10px] font-medium text-foreground backdrop-blur">
                  Project 0{index + 1}
                </span>
              </div>

              {/* Project Details */}
              <div className="min-w-0">

                {/* Title and Description */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-6 text-muted-foreground sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  <FolderCode className="mt-1 size-4 shrink-0 text-muted-foreground" />
                </div>

                {/* Features */}
                <div className="mt-3">
                  <h4 className="mb-2 text-xs font-semibold text-foreground sm:text-sm">
                    Key features
                  </h4>

                  <ul className="space-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2.5 text-[13px] leading-5 text-muted-foreground sm:text-sm sm:leading-6"
                      >
                        <span className="mt-[8px] size-1 shrink-0 rounded-full bg-muted-foreground/70" />
                        <span className="text-pretty">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-2 text-xs font-medium text-background transition-opacity hover:opacity-80"
                    >
                      Live Demo
                      <ExternalLink className="size-3.5" />
                    </Link>
                  )}

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <GitBranch className="size-3.5" />
                      Source Code
                      <ArrowUpRight className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
