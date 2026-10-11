"use client";

import { GraduationCap, CalendarDays, Award } from "lucide-react";

const education = [
  {
    institution: "Shree Devi Institute Of Technology, Mangalore",
    degree: "B.Tech Computer Science and Engineering",
    period: "Oct 2022 – May 2025",
    score: "8.37 / 10",
    status: "Graduated",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full">
      {/* Section heading */}
      <div className="border-b border-border">
        <h2 className="px-2 pb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education
        </h2>
      </div>

      {/* Education entries */}
      <div>
        {education.map((item) => (
          <article
            key={item.institution}
            className="group border-b border-border px-2 py-6 transition-colors duration-300"
          >
            {/* Institution */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 text-foreground transition-colors group-hover:bg-accent">
                <GraduationCap className="size-5" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
                  {item.institution}
                </h3>

                <p className="mt-2 text-sm font-medium text-foreground/85 sm:text-base">
                  {item.degree}
                </p>

                {/* Dates */}
                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4 shrink-0" />
                  <span>{item.period}</span>
                  <span className="text-border">•</span>
                  <span>{item.status}</span>
                </div>

                {/* CGPA */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
                  <Award className="size-4 text-muted-foreground" />

                  <span className="text-sm text-muted-foreground">
                    CGPA
                  </span>

                  <span className="text-sm font-semibold tabular-nums text-foreground">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}