import type { Dictionary } from "@/lib/i18n";
import ReadFullQuote from "@/components/ReadFullQuote";

const people = [
  {
    id: "galas",
    name: "Piotr Gałaś",
    role: "Co-founder & CTO",
    company: "Shelfio",
  },
  {
    id: "klosowski",
    name: "Mario Klosowski",
    role: "Team Leader",
    company: "Kodland",
  },
  {
    id: "placeholder",
    name: "Imię Nazwisko",
    role: "Koordynator",
    company: "Kodland",
  },
] as const;

export default function Recommendations({ dict }: { dict: Dictionary }) {
  return (
    <section id="recommendations"
    className="flex min-h-screen flex-col gap-16 bg-bright-background px-6 py-24 text-dark-background lg:px-14"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <h2 className="whitespace-pre-line font-serif text-5xl font-medium leading-[1.15] tracking-[0.04em] text-dark-title lg:text-6xl">
          {dict.recommendations.title}
        </h2>
        <p className="whitespace-pre-line text-[15.5px] leading-[26px] text-[#2E2A22B8]">
          {dict.recommendations.lead}
        </p>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {people.map((item) => (
          <li
            key={item.id}
            className="flex flex-col rounded-3xl border border-[#2E2A221A] bg-brighter-accent px-[26px] pt-7 pb-6 transition duration-200 hover:-translate-y-1 hover:border-[#38332A33] hover:shadow-lg hover:shadow-black/10"
          >
            <span
              aria-hidden
              className="block font-serif text-7xl leading-none text-[#8F4A2299]"
            >
              &ldquo;
            </span>
            <blockquote className="m-0 line-clamp-8 flex-1 text-pretty font-serif text-[18px] leading-[1.56] text-dark-title/[.88] md:text-[clamp(18px,1.6vw,20.5px)]">
              {dict.recommendations.quotes[item.id]}
            </blockquote>

            <ReadFullQuote
              quote={dict.recommendations.quotes[item.id]}
              name={item.name}
              role={item.role}
              company={item.company}
              label={dict.recommendations.readMore}
              closeLabel={dict.recommendations.close}
            />

            <footer className="mt-6 border-t border-dark-title/10 pt-6">
              <p className="text-lg text-dark-title">{item.name}</p>
              <p className="mt-1 font-mono text-sm text-accent">
                {item.role} · {item.company}
              </p>
            </footer>
          </li>
        ))}
      </ul>

    </section>
  );
}
