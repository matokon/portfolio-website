import type { Dictionary } from "@/lib/i18n";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";

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
  const items = people.map((item) => ({
    ...item,
    quote: dict.recommendations.quotes[item.id],
  }));

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

      <RecommendationsCarousel
        items={items}
        readMoreLabel={dict.recommendations.readMore}
        closeLabel={dict.recommendations.close}
      />

    </section>
  );
}
