import Section from "./Section";
import type { Dictionary } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

const email = "mateusz.okon04@gmail.com";
const phone = "+48 535 373 990";

const labelClass =
  "font-mono text-xs uppercase tracking-[0.2em] text-bright-muted/70";

export default function Contact({ dict }: { dict: Dictionary }) {
  const details = [
    {
      label: dict.contact.details.email,
      value: email,
      href: `mailto:${email}`,
    },
    {
      label: dict.contact.details.phone,
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
    },
    {
      label: dict.contact.details.location,
      value: dict.contact.location,
      href: null,
    },
  ];

  return (
    <Section
      id="contact"
      className="bg-[radial-gradient(125%_110%_at_12%_0%,#5A4632_0%,#4C3B2A_45%,#3E301F_100%)] py-24"
    >
      <div className="grid w-full items-start gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <div>
          <h2 className="whitespace-pre-line font-serif text-5xl font-medium leading-[1.15] tracking-[0.04em] lg:text-6xl">
            {dict.contact.title}
          </h2>

          <p className="mt-8 max-w-[46ch] text-[15.5px] leading-[26px] text-bright-muted">
            {dict.contact.lead}
          </p>

          <dl className="mt-12 max-w-[46ch] border-t border-line/70">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center gap-6 border-b border-line/70 py-5"
              >
                <dt
                  className={`flex min-w-[9.5rem] shrink-0 items-center gap-3 ${labelClass}`}
                >
                  <span aria-hidden className="text-[10px] text-accent-bright">
                    ◆
                  </span>
                  {detail.label}
                </dt>
                <dd className="m-0 text-[17px]">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="transition-colors hover:text-accent-bright"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-[2rem] border border-bright-background/10 bg-bright-background/[0.045] p-7 shadow-2xl shadow-black/15 sm:p-10">
          <ContactForm labels={dict.contact.form} />
        </div>
      </div>
    </Section>
  );
}
