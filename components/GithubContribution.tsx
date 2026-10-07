"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubContributions() {
  return (
    <section className="w-full py-4 sm:py-6 md:py-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className="
            w-full
            overflow-x-auto
            rounded-xl
            border
            bg-background
            p-3
            sm:rounded-2xl
            sm:p-4
            md:p-6
          "
        >
          <div className="flex min-w-max justify-center">
            <GitHubCalendar
              username="chithraksha16"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}