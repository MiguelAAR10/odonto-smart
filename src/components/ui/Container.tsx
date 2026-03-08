import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`mx-auto max-w-7xl px-6 ${className}`.trim()}>
      {children}
    </Component>
  );
}
