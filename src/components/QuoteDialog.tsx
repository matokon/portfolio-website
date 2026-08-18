"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { useLenis } from "lenis/react";
import type { Recommendation } from "@/components/RecommendationsCarousel";

export default function QuoteDialog({
  recommendation,
  closeLabel,
  onClose,
}: {
  recommendation: Recommendation | null;
  closeLabel: string;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!recommendation) return;

    dialogRef.current?.showModal();
    lenis?.stop();
  }, [recommendation, lenis]);

  const close = () => dialogRef.current?.close();

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <dialog
      ref={dialogRef}
      data-lenis-prevent
      onClose={() => {
        lenis?.start();
        onClose();
      }}
      onClick={handleBackdropClick}
      className="m-auto max-h-[86dvh] w-[min(640px,92vw)] overflow-y-auto overscroll-contain rounded-3xl border border-[#2E2A221A] bg-brighter-accent p-7 text-dark-title sm:p-10"
    >
      {recommendation && (
        <>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-serif text-2xl">{recommendation.name}</p>
              <p className="mt-1 font-mono text-sm text-accent">
                {recommendation.role} · {recommendation.company}
              </p>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="-mr-2 -mt-2 flex size-9 shrink-0 items-center justify-center rounded-full text-xl text-dark-title/60 transition-colors hover:bg-dark-title/5 hover:text-dark-title"
            >
              ✕
            </button>
          </div>

          <p className="mt-6 whitespace-pre-line text-pretty font-serif text-[18.5px] leading-[1.66] text-dark-title/90 md:text-[clamp(18.5px,1.65vw,21px)]">
            {recommendation.quote}
          </p>
        </>
      )}
    </dialog>
  );
}
