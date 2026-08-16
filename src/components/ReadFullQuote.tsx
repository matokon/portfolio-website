"use client";

import { useRef, type MouseEvent } from "react";
import { useLenis } from "lenis/react";

export default function ReadFullQuote({
  quote,
  name,
  role,
  company,
  label,
  closeLabel,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  label: string;
  closeLabel: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lenis = useLenis();

  const open = () => {
    dialogRef.current?.showModal();
    lenis?.stop();
  };

  const close = () => dialogRef.current?.close();

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group mt-5 flex items-center gap-2 self-start font-mono text-sm text-accent transition-colors hover:text-dark-title"
      >
        {label}
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => lenis?.start()}
        onClick={handleBackdropClick}
        className="m-auto max-h-[86vh] w-[min(640px,92vw)] overflow-y-auto rounded-3xl border border-[#2E2A221A] bg-brighter-accent p-7 text-dark-title sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-serif text-2xl">{name}</p>
            <p className="mt-1 font-mono text-sm text-accent">
              {role} · {company}
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
          {quote}
        </p>
      </dialog>
    </>
  );
}
