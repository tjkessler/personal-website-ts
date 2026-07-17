import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternalHref } from "@/app/lib/links";

type ButtonLinkVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
  /** Force external attrs; defaults from href scheme. */
  external?: boolean;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;

const variantClass: Record<ButtonLinkVariant, string> = {
  primary: "btn-cta btn-cta--primary",
  secondary: "btn-cta btn-cta--secondary",
};

/** Accent-driven CTA link; primary = filled accent, secondary = soft muted fill. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  ...rest
}: ButtonLinkProps) {
  const treatExternal = external ?? isExternalHref(href);
  const classes = `${variantClass[variant]} ${className}`.trim();

  return (
    <a
      href={href}
      className={classes}
      {...(treatExternal && !href.startsWith("mailto:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
