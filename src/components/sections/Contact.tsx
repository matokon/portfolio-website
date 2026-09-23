import Section from "./Section";
import type { Dictionary } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

const email = "mateusz.okon04@gmail.com";
const phone = "+48 535 373 990";

const labelClass =
  "font-mono text-xs uppercase tracking-[0.2em] text-bright-muted/70 2xl:text-sm min-[1920px]:text-[15px] min-[2060px]:text-base";

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
      className="bg-[radial-gradient(125%_110%_at_12%_0%,#5A4632_0%,#4C3B2A_45%,#3E301F_100%)] py-24 2xl:py-32 min-[1920px]:py-36 min-[2060px]:py-40"
    >
      <div className="grid w-full items-start gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 2xl:gap-24 min-[1920px]:gap-28 min-[2060px]:gap-32">
        <div>
          <h2 className="whitespace-pre-line font-serif text-5xl font-medium leading-[1.15] tracking-[0.04em] lg:text-6xl 2xl:text-7xl min-[1920px]:text-[5.5rem] min-[2060px]:text-[6rem]">
            {dict.contact.title}
          </h2>

          <p className="mt-8 max-w-[46ch] text-[15.5px] leading-[26px] text-bright-muted 2xl:mt-10 2xl:max-w-[50ch] 2xl:text-[17px] 2xl:leading-[30px] min-[1920px]:mt-12 min-[1920px]:max-w-[54ch] min-[1920px]:text-[19px] min-[1920px]:leading-[34px] min-[2060px]:mt-14 min-[2060px]:max-w-[58ch] min-[2060px]:text-[21px] min-[2060px]:leading-[38px]">
            {dict.contact.lead}
          </p>

          <dl className="mt-12 max-w-[46ch] border-t border-line/70 2xl:mt-16 2xl:max-w-[50ch] min-[1920px]:mt-20 min-[1920px]:max-w-[54ch] min-[2060px]:mt-24 min-[2060px]:max-w-[58ch]">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center gap-6 border-b border-line/70 py-5 2xl:gap-8 2xl:py-6 min-[1920px]:gap-10 min-[1920px]:py-7 min-[2060px]:gap-12 min-[2060px]:py-8"
              >
                <dt
                  className={`flex min-w-[9.5rem] shrink-0 items-center gap-3 ${labelClass} 2xl:min-w-[11rem] min-[1920px]:min-w-[12rem] min-[2060px]:min-w-[13rem]`}
                >
                  <span aria-hidden className="text-[10px] text-accent-bright 2xl:text-[11px] min-[1920px]:text-xs min-[2060px]:text-[13px]">
                    ◆
                  </span>
                  {detail.label}
                </dt>
                <dd className="m-0 text-[17px] 2xl:text-[19px] min-[1920px]:text-[21px] min-[2060px]:text-[23px]">
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

        <div className="rounded-[2rem] border border-bright-background/10 bg-bright-background/[0.045] p-7 shadow-2xl shadow-black/15 sm:p-10 2xl:rounded-[2.5rem] 2xl:p-12 min-[1920px]:rounded-[3rem] min-[1920px]:p-14 min-[2060px]:rounded-[3.5rem] min-[2060px]:p-16">
          <ContactForm labels={dict.contact.form} />
        </div>
      </div>
    </Section>
  );
}