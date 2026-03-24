import type { HTMLAttributes, ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;

export function GlassPanel({
  children,
  className = "",
  hover = false,
  ...rest
}: GlassPanelProps) {
  return (
    <div
      {...rest}
      className={[
        "rounded-2xl border border-black/[0.07] bg-white/45 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04),0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-2xl sm:rounded-[1.75rem] sm:p-8 lg:p-9 dark:border-white/[0.09] dark:bg-white/[0.045] dark:shadow-[0_12px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]",
        hover
          ? "transition-[box-shadow,border-color,background-color] duration-500 ease-out hover:border-black/12 hover:bg-white/55 hover:shadow-[0_24px_56px_rgba(0,0,0,0.08)] dark:hover:border-white/16 dark:hover:bg-white/[0.08] dark:hover:shadow-[0_28px_64px_rgba(0,0,0,0.5)]"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
