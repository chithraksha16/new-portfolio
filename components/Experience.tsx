
"use client";

import { Code2, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    company: "Self-Employed",
    role: "Full Stack Developer & Freelancer",
    type: "Freelance",
    period: "06.2025–Present",
    icon: Code2,
    current: true,
    points: [
      "Build modern, responsive websites and full-stack applications for clients.",
      "Design polished user interfaces in Figma and translate them into production-ready applications.",
      "Develop scalable applications using MERN, Next.js, TypeScript, Redux and Prisma.",
      "Build RESTful APIs and integrate databases, authentication and third-party services.",
      "Deploy and maintain applications using Vercel, Render, Docker and cloud platforms.",
      "Work directly with clients from requirements and design to development and deployment.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Docker",
      "Vercel",
      "Render",
    ],
  },
  {
    company: "Zephyr Technologies & Solutions",
    role: "Full Stack Developer Intern",
    type: "Internship",
    period: "02.2025–06.2025",
    icon: Code2,
    current: false,
    points: [
      "Developed dynamic user interfaces using React.js with a focus on performance and reusability.",
      "Built RESTful APIs using Node.js and Express.js for backend logic and server communication.",
      "Developed backend data models and queries using MongoDB.",
      "Created modern and responsive interfaces using Tailwind CSS and Bootstrap.",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    company: "Codelab System",
    role: "AI & ML Intern",
    type: "Internship",
    period: "10.2024–11.2024",
    icon: BriefcaseBusiness,
    current: false,
    points: [
      "Gained practical experience in machine learning using Python and industry-standard libraries.",
      "Used NumPy and Pandas for data cleaning, analysis and data manipulation.",
      "Worked with machine learning workflows and basic predictive models.",
      "Visualized datasets, trends and results using Matplotlib.",
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-3 w-full">

      {/* Header - Same as About and Tech Stack */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 sm:px-5 md:px-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Experience
        </h2>

        <span className="hidden font-sans text-[11px] text-muted-foreground sm:block">
          ~/experience
        </span>
      </div>

      {/* Experience List */}
      <div className="px-4 sm:px-5 md:px-6">
        {experiences.map((experience, index) => {
          const Icon = experience.icon;

          return (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative border-b border-border"
            >
              {/* Company Header */}
              <div className="flex items-center gap-3 py-4">
                <div className="flex size-8 shrink-0 items-center justify-center">
                  <Icon className="size-5 text-primary" />
                </div>

                <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {experience.company}
                </h3>

                {experience.current && (
                  <span className="relative flex size-4 shrink-0 items-center justify-center">
                    <span className="absolute size-4 animate-ping rounded-full bg-sky-500/20" />
                    <span className="size-2 rounded-full bg-sky-500" />
                  </span>
                )}
              </div>

              {/* Experience Content */}
              <div className="relative flex gap-3 pb-5 sm:gap-4">

                {/* Timeline */}
                <div className="relative flex w-8 shrink-0 justify-center">
                  <div className="relative z-10 flex size-8 items-center justify-center rounded-lg border border-border bg-background shadow-sm">
                    <Code2 className="size-3.5 text-muted-foreground" />
                  </div>

                  {index !== experiences.length - 1 && (
                    <div className="absolute left-1/2 top-8 h-[calc(100%+1.25rem)] w-px -translate-x-1/2 bg-border" />
                  )}
                </div>

                {/* Main Content */}
                <div className="min-w-0 flex-1 pb-1">

                  {/* Role */}
                  <h4 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                    {experience.role}
                  </h4>

                  {/* Meta */}
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground sm:text-xs">
                    <span>{experience.type}</span>
                    <span className="text-border">|</span>
                    <span>{experience.period}</span>
                  </div>

                  {/* Description */}
                  <ul className="mt-3 space-y-1.5">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 font-sans text-[13px] leading-6 text-muted-foreground sm:text-sm sm:leading-6"
                      >
                        <span className="mt-[9px] size-1 shrink-0 rounded-full bg-muted-foreground/70" />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[10px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:text-[11px]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
