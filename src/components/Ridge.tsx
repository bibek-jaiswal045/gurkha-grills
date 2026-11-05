import { cn } from "@/lib/utils";

/** Himalayan ridge silhouette used as a section divider. Fill follows the text colour. */
export const Ridge = ({ className }: { className?: string }) => (
  <svg
    className={cn("block h-auto w-full", className)}
    viewBox="0 0 1440 110"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M0 110V78l80-22 70 18 95-46 60 26 48-20 52 30 110-58 40 22 30-14 88 54 70-24 60 20 120-62 46 28 40-10 104 52 80-28 64 18 90-40 93 40V110Z"
    />
  </svg>
);
