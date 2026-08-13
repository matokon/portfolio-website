"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import SvgMenu from "./icons/Menu";
import SvgClose from "./icons/Close";
import { locales, sectionIds, type Dictionary, type Locale } from "@/lib/i18n";

const headerVariants: Variants = {
  opened: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
  closed: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
};

const mobileMenuVariants: Variants = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02] as [number, number, number, number],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02] as [number, number, number, number],
    },
  },
};

const navigationVariants: Variants = {
  opened: { opacity: 1, transition: { delay: 1.3 } },
  closed: { opacity: 0 },
};

const fadeInVariant: Variants = {
  opened: { opacity: 1, transition: { delay: 1.2 } },
  closed: { opacity: 0 },
};

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0.1, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function LangToggle({
  lang,
  label,
  className = "",
}: {
  lang: Locale;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-foreground/30 p-1 ${className}`}
      role="group"
      aria-label={label}
    >
      {locales.map((code) => (
        <Link
          key={code}
          href={`/${code}`}
          hrefLang={code}
          aria-current={code === lang ? "true" : undefined}
          className={`rounded-full px-4 py-1.5 text-[13px] uppercase tracking-wide transition ${
            code === lang
              ? "bg-foreground/15 text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          {code}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const active = useActiveSection();

  const home = `/${lang}`;
  const isLanding = pathname === home;

  const resolveHref = (id: string) => (isLanding ? `#${id}` : `${home}#${id}`);

  const handleNavLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    if (!isLanding) return;

    event.preventDefault();
    lenis?.scrollTo(target);
  };

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
    if (lenis?.isStopped) {
      lenis.start();
    } else {
      lenis?.stop();
    }
  };

  const logo = (
    <>
      <span className="text-[15px] font-semibold uppercase tracking-[0.2em]">
        Portfolio
      </span>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-nav">
      <motion.div
        initial="closed"
        animate={isOpen ? "opened" : "closed"}
        className="px-6 lg:px-14 flex items-center justify-between h-[72px]"
      >
        <motion.a
          href={home}
          onClick={(event) => {
            if (!isLanding) return;
            event.preventDefault();
            lenis?.scrollTo(0);
          }}
          variants={headerVariants}
          className="flex items-center gap-3"
        >
          {logo}
        </motion.a>

        <div className="hidden lg:flex items-center gap-9">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={resolveHref(id)}
              onClick={(event) => handleNavLinkClick(event, `#${id}`)}
              className={`relative py-1 text-[15px] transition hover:text-foreground ${
                active === id ? "text-foreground" : "text-muted"
              }`}
            >
              {dict.sections[id]}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 h-px w-full bg-foreground"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangToggle
            lang={lang}
            label={dict.a11y.language}
            className="hidden sm:inline-flex"
          />

          <motion.button
            variants={headerVariants}
            className="lg:hidden p-2"
            onClick={handleMenuClick}
            aria-label={dict.a11y.openMenu}
            aria-expanded={isOpen}
          >
            <SvgMenu className="w-[22px] h-[22px]" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial="closed"
        animate={isOpen ? "opened" : "closed"}
        variants={mobileMenuVariants}
        className="lg:hidden fixed top-0 left-0 h-screen w-screen flex flex-col bg-nav px-6 py-8 z-[100]"
      >
        <motion.div
          variants={fadeInVariant}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">{logo}</div>
          <button
            onClick={handleMenuClick}
            aria-label={dict.a11y.closeMenu}
            className="p-2"
          >
            <SvgClose className="w-[22px] h-[22px]" />
          </button>
        </motion.div>

        <motion.div
          variants={navigationVariants}
          className="flex flex-col flex-1 gap-1 pt-20"
        >
          {sectionIds.map((id) => (
            <a
              key={id}
              href={resolveHref(id)}
              onClick={(event) => {
                handleMenuClick();
                handleNavLinkClick(event, `#${id}`);
              }}
              className="border-b border-line py-4 text-2xl text-muted transition hover:text-foreground"
            >
              {dict.sections[id]}
            </a>
          ))}

          <LangToggle
            lang={lang}
            label={dict.a11y.language}
            className="mt-8 self-start sm:hidden"
          />
        </motion.div>
      </motion.div>
    </nav>
  );
}
