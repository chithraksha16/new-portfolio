"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubContributions() {
  return (
    <section className="w-full py-1">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-x-auto rounded-2xl border bg-background p-6">
          <div className="min-w-[760px]">
            <GitHubCalendar username="chithraksha16" />
          </div>
        </div>

      </div>
    </section>
  );
}