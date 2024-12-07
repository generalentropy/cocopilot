import { twMerge } from "tailwind-merge";

export default function CustomBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "inline-flex items-center justify-center rounded-md bg-gray-400 px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
}
