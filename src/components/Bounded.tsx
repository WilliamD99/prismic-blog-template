import clsx from "clsx";
import React from "react";

interface BoundedProps {
  as?: React.ElementType;
  size?: "small" | "base" | "wide" | "widest";
  mbSize?: "small" | "base" | "wide" | "widest";
  className?: string;
  children: React.ReactNode;
}

export function Bounded({
  as: Comp = "div",
  size = "base",
  mbSize = "base",
  className,
  children,
}: BoundedProps) {
  return (
    <Comp className={clsx("px-4 py-8 md:px-6 md:py-10 lg:py-12", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "lg:max-w-xl",
          size === "base" && "lg:max-w-3xl",
          size === "wide" && "lg:max-w-4xl",
          size === "widest" && "lg:max-w-7xl",
          mbSize === "small" && "max-w-sm",
          mbSize === "base" && "max-w-3xl",
          mbSize === "wide" && "max-w-4xl",
          mbSize === "widest" && "max-w-7xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
