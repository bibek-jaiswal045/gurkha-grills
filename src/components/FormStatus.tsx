import { cn } from "@/lib/utils";

export const FormStatus = ({ state, message }: { state: string; message: string }) => (
  <p
    role="status"
    aria-live="polite"
    className={cn(
      "min-h-[1.4em] text-sm text-mist",
      state === "ok" && "text-veg",
      state === "error" && "text-ember",
    )}
  >
    {message}
  </p>
);
