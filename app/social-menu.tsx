"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

const socials: Array<{ label: string; href: string; external: boolean; icon: ReactNode }> = [
  {
    label: "GitHub", href: "https://github.com/joydeep049", external: true,
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>,
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/joydeep-tripathy-b766371ab", external: true,
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM19.8 12.86c0-3.22-1.72-4.72-4.02-4.72a3.47 3.47 0 0 0-3.14 1.73V8.3H9.35V19h3.29v-5.3c0-1.4.27-2.77 2.02-2.77 1.72 0 1.61 1.61 1.61 2.86V19h3.53v-6.14Z" /></svg>,
  },
  {
    label: "Email", href: "mailto:joydeeptripathy3@gmail.com", external: false,
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3v-13Zm2 2v.35l7 5.25 7-5.25V7.5H5Zm14 9v-6.15l-7 5.25-7-5.25v6.15h14Z" /></svg>,
  },
];

export default function SocialMenu() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 74, left: 28 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ top: rect.bottom + 12, left: Math.max(16, Math.min(rect.left, window.innerWidth - 190)) });
  };

  const openMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    updatePosition();
    setIsMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsOpen(true)));
  };

  const closeMenu = () => {
    setIsOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setIsMounted(false);
      triggerRef.current?.focus();
    }, 260);
  };

  useEffect(() => {
    if (!isMounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => popoverRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(), 80);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !popoverRef.current) return;
      const links = Array.from(popoverRef.current.querySelectorAll<HTMLAnchorElement>("a"));
      if (event.shiftKey && document.activeElement === links[0]) {
        event.preventDefault();
        links.at(-1)?.focus();
      } else if (!event.shiftKey && document.activeElement === links.at(-1)) {
        event.preventDefault();
        links[0]?.focus();
      }
    };
    window.addEventListener("resize", updatePosition);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted]);

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  return <>
    <button className="wordmark" type="button" ref={triggerRef} aria-haspopup="dialog" aria-expanded={isOpen} onClick={openMenu}>
      Joydeep Tripathy
    </button>
    {isMounted && createPortal(
      <div className={`social-overlay${isOpen ? " is-open" : ""}`} onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeMenu();
      }}>
        <div className="social-popover" ref={popoverRef} role="dialog" aria-label="Social links" style={{ top: position.top, left: position.left }}>
          {socials.map((social, index) => <a
            href={social.href}
            key={social.label}
            aria-label={social.label}
            title={social.label}
            style={{ transitionDelay: `${80 + index * 55}ms` }}
            {...(social.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >{social.icon}</a>)}
        </div>
      </div>, document.body
    )}
  </>;
}
