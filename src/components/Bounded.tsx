import clsx from "clsx";
import React from "react";

interface BoundedProps {
  as?: React.ElementType,
  size?: "small" | "base" | "wide" | "widest",
  className?: string,
  children: React.ReactNode
}

export function Bounded({
  as: Comp = "div",
  size = "base",
  className,
  children,
} : BoundedProps) {
  return (
    <Comp className={clsx("px-4 py-8 md:px-6 md:py-10 lg:py-12", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
