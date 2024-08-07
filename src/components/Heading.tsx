import clsx from "clsx";

interface HeadingProps {
  as?: React.ElementType;
  size?: "xl" | "2xl" | "3xl" | "4xl";
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({
  as: Comp = "h1",
  size = "4xl",
  children,
  className,
}: HeadingProps) => {
  return (
    <Comp
      className={clsx(
        "font-sans font-semibold tracking-tighter text-slate-800",
        size === "4xl" && "text-3xl md:text-4xl",
        size === "3xl" && "lg:text-3xl text-2xl",
        size === "2xl" && "text-2xl",
        size === "xl" && "text-xl",
        className
      )}
    >
      {children}
    </Comp>
  );
};
