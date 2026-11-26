
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
    <section id="education" className="mt-3 w-full">

      {/* Header - Same as other sections */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 sm:px-5 md:px-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Education
        </h2>

        <span className="hidden font-sans text-[11px] text-muted-foreground sm:block">
          ~/education
        </span>
      </div>

      {/* Education Entries */}
      <div className="px-4 sm:px-5 md:px-6">
        {education.map((item) => (
          <article
            key={item.institution}
            className="group border-b border-border py-4 transition-colors duration-300 sm:py-5"
          >
            <div className="flex items-start gap-3">

              {/* Icon */}
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground transition-colors group-hover:bg-accent">
                <GraduationCap className="size-4.5" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">

                {/* Institution */}
                <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                  {item.institution}
                </h3>

                {/* Degree */}
                <p className="mt-1.5 text-[13px] font-medium text-foreground/85 sm:text-sm">
                  {item.degree}
                </p>

                {/* Dates and Status */}
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] text-muted-foreground sm:text-xs">
                  <CalendarDays className="size-3.5 shrink-0" />
                  <span>{item.period}</span>
                  <span className="text-border">•</span>
                  <span>{item.status}</span>
                </div>

                {/* CGPA */}
                <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-muted/40 px-2.5 py-1.5">
                  <Award className="size-3.5 text-muted-foreground" />

                  <span className="text-xs text-muted-foreground">
                    CGPA
                  </span>

                  <span className="text-xs font-semibold tabular-nums text-foreground">
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
