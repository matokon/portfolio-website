"use client";

import { useEffect, useRef, useState, type TransitionEvent } from "react";
import ReadFullQuote from "@/components/ReadFullQuote";

export type Recommendation = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

const stepDelay = 2200;

export default function RecommendationsCarousel({
  items,
  readMoreLabel,
  closeLabel,
}: {
  items: readonly Recommendation[];
  readMoreLabel: string;
  closeLabel: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const measure = () => {
      const card = trackRef.current?.firstElementChild;
      if (card) setStep(card.getBoundingClientRect().width);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setHidden(document.hidden);

    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (paused || hidden || reducedMotion) return;

    const id = window.setInterval(
      () => setIndex((current) => current + 1),
      stepDelay,
    );
    return () => window.clearInterval(id);
  }, [paused, hidden, reducedMotion]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLUListElement>) => {
    if (event.target !== event.currentTarget || index < items.length) return;

    setSliding(false);
    setIndex(0);
  };

  useEffect(() => {
    if (sliding) return;

    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setSliding(true));
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [sliding]);

  return (
    <div
      className="-mx-3 -my-2 overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul
        ref={trackRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${sliding ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(${-index * step}px)` }}
      >
        {[...items, ...items].map((item, position) => {
          const isClone = position >= items.length;

          return (
            <li
              key={`${item.id}-${position}`}
              aria-hidden={isClone || undefined}
              inert={isClone || undefined}
              className="w-full shrink-0 px-3 md:w-1/2 lg:w-2/5"
            >
              <article className="flex h-full flex-col rounded-3xl border border-[#2E2A221A] bg-brighter-accent px-8 pt-9 pb-8 transition duration-200 hover:-translate-y-1 hover:border-[#38332A33] hover:shadow-lg hover:shadow-black/10">
                <span
                  aria-hidden
                  className="block font-serif text-7xl leading-none text-[#8F4A2299]"
                >
                  &ldquo;
                </span>
                <blockquote className="m-0 line-clamp-6 flex-1 text-pretty font-serif text-[19.5px] leading-[1.6] text-dark-title/[.88] md:text-[clamp(19.5px,1.7vw,22px)]">
                  {item.quote}
                </blockquote>

                <ReadFullQuote
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                  company={item.company}
                  label={readMoreLabel}
                  closeLabel={closeLabel}
                />

                <footer className="mt-7 border-t border-dark-title/10 pt-6">
                  <p className="text-lg text-dark-title">{item.name}</p>
                  <p className="mt-1 font-mono text-sm text-accent">
                    {item.role} · {item.company}
                  </p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
