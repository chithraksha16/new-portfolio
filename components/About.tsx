"use client";

import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full">
      {/* Top divider */}
      <div className="h-px w-full bg-border" />

      <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        {/* Heading */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About
          </h2>

          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            ~/about
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Content */}
        <div className="mt-7 font-mono text-sm leading-7 text-muted-foreground sm:text-[15px] md:text-base">
          <ul className="list-disc space-y-4 pl-5 marker:text-muted-foreground">

            {/* Introduction */}
            <li>
              <span className="text-foreground font-semibold">
                Full Stack Developer
              </span>{" "}
              with 1 year of hands-on experience, building modern,
              responsive and user-focused web applications.
            </li>

            {/* Tech stack */}
            <li>
              Comfortable working across the{" "}
              <span className="text-foreground font-semibold">
                MERN stack, Next.js, TypeScript, Redux, Prisma, Docker,
              </span>{" "}
              and modern frontend technologies.
            </li>

            {/* UI */}
            <li>
              I also work as a{" "}
              <span className="text-foreground font-semibold">
                UI Designer
              </span>
              , using{" "}
              <span className="text-foreground font-semibold">Figma</span>{" "}
              to design interfaces before turning them into responsive,
              production-ready experiences.
            </li>

            {/* Freelancing */}
            <li>
              Alongside development, I work as a{" "}
              <span className="text-foreground font-semibold">
                Freelancer
              </span>
              , collaborating with clients to understand their goals,
              design practical solutions and build websites that help
              their businesses establish a stronger digital presence.
            </li>

            {/* What I care about */}
            <li>
              Passionate about turning ideas into{" "}
              <span className="text-foreground font-semibold">
                useful, polished and scalable products
              </span>
              . I care about clean code, thoughtful UI, performance,
              responsiveness and creating experiences that feel simple
              to use.
            </li>

            {/* Current focus */}
            <li>
              Currently focused on improving my full-stack engineering
              skills and learning more about{" "}
              <span className="text-foreground font-semibold">
                system design, DevOps and modern software architecture
              </span>
              .
            </li>

            {/* Vision */}
            <li>
              <span className="text-foreground font-semibold">
                Vision:
              </span>{" "}
              To become a well-rounded developer who brings together
              engineering, design and problem-solving to build products
              that are reliable, meaningful and enjoyable to use.
            </li>

            {/* Extra nested section */}
            <li>
              <span className="text-foreground font-semibold">
                What I believe in
              </span>

              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-muted-foreground">
                <li>
                  Write code that is{" "}
                  <span className="text-foreground">simple to understand</span>
                  {" "}and easy to maintain.
                </li>

                <li>
                  Design interfaces with{" "}
                  <span className="text-foreground">
                    users and usability
                  </span>{" "}
                  in mind.
                </li>

                <li>
                  Keep learning, experimenting and{" "}
                  <span className="text-foreground">
                    building real projects
                  </span>
                  .
                </li>
              </ul>
            </li>

            {/* Current direction */}
            <li>
              <span className="text-foreground font-semibold">
                Current direction:
              </span>{" "}
              Building full-stack projects, working with clients,
              improving my engineering practices and exploring new
              technologies that can help me build better products.
            </li>
          </ul>
        </div>

        {/* Bottom metadata */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>1 year experience · Full Stack · UI/UX · Freelance</span>

          <a
            href="#projects"
            className="group flex items-center gap-1 text-foreground transition-opacity hover:opacity-70"
          >
            Explore my work
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-border" />
    </section>
  );
}