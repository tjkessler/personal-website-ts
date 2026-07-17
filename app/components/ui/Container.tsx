import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Shared horizontal padding and max-width for site chrome and sections. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
