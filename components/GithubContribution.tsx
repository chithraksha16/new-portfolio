"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubContributions() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">
            GitHub Activity
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Consistency over time.
          </h2>

          <p className="mt-3 max-w-xl text-muted-foreground">
            A snapshot of my coding activity, open-source contributions,
            and projects throughout the year.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border bg-background p-6">
          <div className="min-w-[760px]">
            <GitHubCalendar username="chithraksha16" />
          </div>
        </div>

      </div>
    </section>
  );
}