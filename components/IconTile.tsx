import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IconTileProps {
  children: ReactNode;
  className?: string;
}

export function IconTile({
  children,
  className,
}: IconTileProps) {
  return (
    <div
      className={cn(
        `
        relative
        flex size-7 items-center justify-center
        rounded-[9px]
        border border-border
        bg-background
        p-0.5
        shadow-[0_1px_3px_rgba(0,0,0,0.04)]
        `,
        className
      )}
    >
      <div
        className="
          flex size-full
          items-center justify-center
          rounded-[8px]
          border border-border/70
          bg-muted/20
          text-muted-foreground
        "
      >
        {children}
      </div>
    </div>
  );
}