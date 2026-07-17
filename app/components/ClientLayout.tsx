"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { site } from "@/content";
import type { NavItem } from "@/content";
import { Footer } from "./Footer";
import { Container } from "./ui";

/** Keep in sync with the blocking theme script in `app/layout.tsx`. */
const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "theme-change";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

const navInteractive =
  "rounded text-inherit no-underline transition-colors hover:bg-muted hover:text-header-fg focus-visible:bg-muted focus-visible:text-header-fg";

/** Shared hit target for GitHub, LinkedIn, and theme toggle. */
const iconControlClass = `${navInteractive} inline-flex size-10 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0 shadow-none`;

const textNavItems = site.navItems.filter((item) => !item.icon);
const iconNavItems = site.navItems.filter(
  (item): item is NavItem & { icon: NonNullable<NavItem["icon"]> } =>
    Boolean(item.icon),
);

function NavIcon({ icon }: { icon: NonNullable<NavItem["icon"]> }) {
  if (icon === "github") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.05A9.38 9.38 0 0112 6.84c.84.004 1.68.11 2.47.32 1.92-1.32 2.75-1.05 2.75-1.05.54 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    );
  }

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
    </svg>
  );
}

function isHashHref(href: string) {
  return href.startsWith("#") || href.includes("/#");
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter(
    (el) =>
      !el.hasAttribute("disabled") &&
      el.getAttribute("aria-hidden") !== "true" &&
      el.tabIndex !== -1,
  );
}

function NavLinks({
  onNavigate,
  variant = "desktop",
}: {
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const pad =
    variant === "mobile"
      ? "px-8 py-2"
      : "inline-flex h-10 items-center px-3 leading-none";

  return (
    <>
      {textNavItems.map((item) => {
        const className = `${navInteractive} ${pad}`;

        if (item.href.startsWith("http")) {
          return (
            <a
              key={item.href}
              href={item.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
            >
              {item.label}
            </a>
          );
        }

        if (isHashHref(item.href)) {
          return (
            <a
              key={item.href}
              href={item.href}
              className={className}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={className}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

function IconNavLinks() {
  return (
    <>
      {iconNavItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={iconControlClass}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <NavIcon icon={item.icon} />
        </a>
      ))}
    </>
  );
}

function readStoredTheme(): "light" | "dark" | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore (private mode / blocked storage)
  }
  return null;
}

function writeStoredTheme(theme: "light" | "dark") {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

function getThemeSnapshot(): "light" | "dark" {
  const fromDom = document.documentElement.getAttribute("data-theme");
  if (fromDom === "light" || fromDom === "dark") return fromDom;
  const stored = readStoredTheme();
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribeTheme(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
      onStoreChange();
    }
  };
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onStoreChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => {
    mq.removeEventListener("change", onStoreChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function subscribeMounted() {
  return () => {};
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    () => "light",
  );
  const mounted = useSyncExternalStore(
    subscribeMounted,
    () => true,
    () => false,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const menu = mobileNavRef.current;
    const menuButton = menuButtonRef.current;

    const getTrapFocusables = () => {
      const items: HTMLElement[] = [];
      if (menuButtonRef.current) items.push(menuButtonRef.current);
      if (menu) items.push(...getFocusableElements(menu));
      if (themeButtonRef.current) items.push(themeButtonRef.current);
      return items;
    };

    const focusFirstInMenu = () => {
      const inMenu = menu ? getFocusableElements(menu) : [];
      (inMenu[0] ?? menuButtonRef.current)?.focus();
    };

    // Defer so the menu is in the DOM before focusing
    const focusFrame = window.requestAnimationFrame(focusFirstInMenu);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getTrapFocusables();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      const active = document.activeElement as HTMLElement | null;
      const currentIndex = active ? focusable.indexOf(active) : -1;
      let nextIndex: number;

      if (event.shiftKey) {
        nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
      } else {
        nextIndex =
          currentIndex === -1 || currentIndex >= focusable.length - 1
            ? 0
            : currentIndex + 1;
      }

      focusable[nextIndex]?.focus();
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    writeStoredTheme(next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-[100] border-b border-border bg-header-bg text-header-fg">
        <Container className="flex min-w-0 items-center justify-between gap-3 py-4">
          <div className="flex min-w-0 items-center gap-8">
            <Link
              href="/"
              className="inline-flex h-10 min-w-0 items-center truncate rounded text-lg font-bold leading-none text-inherit no-underline sm:text-xl"
            >
              {site.person.name}
            </Link>
            <nav
              className="hidden h-10 items-center gap-1 md:flex"
              aria-label="Primary"
            >
              <NavLinks />
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              ref={menuButtonRef}
              type="button"
              className={`${iconControlClass} md:hidden`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
            <IconNavLinks />
            {mounted && (
              <button
                ref={themeButtonRef}
                type="button"
                onClick={toggleTheme}
                className={iconControlClass}
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                {theme === "light" ? (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 14A9 9 0 0021 12.79z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                )}
              </button>
            )}
          </div>
        </Container>
        {menuOpen && (
          <nav
            ref={mobileNavRef}
            id="mobile-menu"
            tabIndex={-1}
            className="absolute top-full right-0 left-0 z-[101] flex flex-col gap-4 border-b border-border bg-header-bg py-4 text-header-fg shadow-md outline-none"
            aria-label="Primary"
          >
            <NavLinks variant="mobile" onNavigate={() => setMenuOpen(false)} />
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
