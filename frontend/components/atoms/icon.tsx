import { cn } from "@/lib/cn";
import type { SVGProps } from "react";

type IconName = "menu" | "close" | "cart" | "search" | "arrow-right";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

function iconPath(name: IconName) {
  switch (name) {
    case "menu":
      return <path d="M4 7h16M4 12h16M4 17h16" />;
    case "close":
      return <path d="M6 6l12 12M18 6l-12 12" />;
    case "cart":
      return (
        <>
          <path d="M3 4h2.2l1.5 9.2A2 2 0 0 0 8.7 15h7.8a2 2 0 0 0 2-1.6L20 7H7" />
          <circle cx="9.5" cy="19" r="1.2" />
          <circle cx="17.5" cy="19" r="1.2" />
        </>
      );
    case "search":
      return (
        <>
          <circle cx="11" cy="11" r="6" />
          <path d="M20 20l-4-4" />
        </>
      );
    case "arrow-right":
      return <path d="M5 12h14M13 6l6 6-6 6" />;
    default:
      return null;
  }
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
      aria-hidden="true"
      {...props}
    >
      {iconPath(name)}
    </svg>
  );
}
