"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/lib/actions";
import type { Dictionary } from "@/lib/i18n";

const labelClass =
  "font-mono text-xs uppercase tracking-[0.2em] text-bright-muted/70";

const fieldClass =
  "w-full rounded-2xl border border-bright-background/12 bg-bright-background/5 px-5 py-4 text-base text-bright-background outline-none transition-colors placeholder:text-bright-muted/40 hover:border-bright-background/20 focus:border-accent-bright/70 disabled:opacity-60";

export default function ContactForm({
  labels,
}: {
  labels: Dictionary["contact"]["form"];
}) {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendMessage,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-7">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px]"
      />

      <div className="flex flex-col gap-3">
        <label htmlFor="contact-name" className={labelClass}>
          {labels.name.label}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          disabled={pending}
          placeholder={labels.name.placeholder}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="contact-email" className={labelClass}>
          {labels.email.label}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={200}
          required
          disabled={pending}
          placeholder={labels.email.placeholder}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="contact-message" className={labelClass}>
          {labels.message.label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={5000}
          required
          disabled={pending}
          placeholder={labels.message.placeholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center gap-3 self-start rounded-full bg-bright-background px-8 py-4 font-medium text-dark-title transition duration-200 hover:-translate-y-0.5 hover:bg-brighter-accent hover:shadow-lg hover:shadow-black/20 disabled:pointer-events-none disabled:opacity-60"
      >
        {pending ? labels.sending : labels.submit}
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </button>

      <p
        aria-live="polite"
        className={`min-h-6 text-sm ${state === "ok" ? "text-accent-bright" : "text-[#E8836B]"}`}
      >
        {state ? labels.status[state] : ""}
      </p>
    </form>
  );
}
