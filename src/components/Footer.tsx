"use client";

import { useLenis } from "lenis/react";
import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer px-6 py-8 lg:px-14">
      <div className="flex flex-col items-center gap-6 font-mono text-sm sm:flex-row sm:justify-between">
        <p className="text-bright-muted/60">© {year} Mateusz Okoń</p>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/matokon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bright-muted transition-colors hover:text-bright-background"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mateusz-oko%C5%84-2458a6332/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bright-muted transition-colors hover:text-bright-background"
          >
            LinkedIn
          </a>

          <button
            type="button"
            onClick={() => lenis?.scrollTo(0)}
            className="group flex items-center gap-2 text-accent-bright transition-colors hover:text-bright-background"
          >
            {dict.footer.backToTop}
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
