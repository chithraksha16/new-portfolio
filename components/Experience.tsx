"use client";

import {
  Code2,
  BriefcaseBusiness,
  CircleDot,
} from "lucide-react";

const experiences = [
  {
    company: "Self-Employed",
    role: "Full Stack Developer & Freelancer",
    type: "Freelance",
    period: "06.2025–∞",
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
    period: "10.2025–11.2025",
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
    <section className="w-full">
      {/* Heading */}
      <div className="border-b border-border">
        <h2 className="px-2 pb-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Experience
        </h2>
      </div>

      <div>
        {experiences.map((experience, index) => {
          const Icon = experience.icon;

          return (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative border-b border-border"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 px-2 py-6">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg">
                  <Icon className="size-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {experience.company}
                </h3>

                {experience.current && (
                  <span className="relative flex size-5 items-center justify-center">
                    <span className="absolute size-5 animate-ping rounded-full bg-sky-500/20" />
                    <span className="size-2.5 rounded-full bg-sky-500" />
                  </span>
                )}
              </div>

              {/* Experience content */}
              <div className="relative flex gap-4 px-2 pb-7">
                {/* Timeline */}
                <div className="relative flex w-9 shrink-0 justify-center">
                  {/* Icon */}
                  <div className="relative z-10 flex size-9 items-center justify-center rounded-xl border border-border bg-background shadow-sm">
                    <Code2 className="size-4 text-muted-foreground" />
                  </div>

                  {/* Vertical line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-1/2 top-9 h-[calc(100%+1.75rem)] w-px -translate-x-1/2 bg-border" />
                  )}
                </div>

                {/* Main content */}
                <div className="min-w-0 flex-1 pb-2">
                  {/* Role */}
                  <h4 className="text-lg font-semibold tracking-tight">
                    {experience.role}
                  </h4>

                  {/* Meta */}
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{experience.type}</span>

                    <span className="text-border">|</span>

                    <span>{experience.period}</span>
                  </div>

                  {/* Description / bullets */}
                  <ul className="mt-6 space-y-2.5">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 font-mono text-sm leading-6 text-foreground/85"
                      >
                        <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-muted-foreground" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-border bg-muted/40 px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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