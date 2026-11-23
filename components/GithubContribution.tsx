
"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHubContributions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="w-full py-1">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-x-auto rounded-2xl border bg-background p-6">
          <div className="flex min-w-[760px] justify-center">
            {isMounted ? (
              <GitHubCalendar
                username="chithraksha16"
                blockSize={12}
                blockMargin={5}
                fontSize={12}
                colorScheme="dark"
                theme={{
                  dark: [
                    "#161b22",
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#39d353",
                  ],
                }}
              />
            ) : (
              <div className="h-[150px] w-full animate-pulse rounded-lg bg-muted/30" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
