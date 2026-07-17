import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternalHref } from "@/app/lib/links";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Force external attrs; defaults from href scheme. */
  external?: boolean;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;

/** Inline content link styled with theme accent. */
export function TextLink({
  href,
  children,
  className = "",
  external,
  ...rest
}: TextLinkProps) {
  const treatExternal = external ?? isExternalHref(href);
  const classes = `text-link ${className}`.trim();

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
