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
    id: "jedrusik",
    name: "Tomasz Jędrusik",
    role: "Product Manager",
    company: "Shelfio",
  },
  {
    id: "pk",
    name: "Piotr Klupa",
    role: "Senior Software Engineer",
    company: "Shelfio",
  },
  {
    id: "klosowski",
    name: "Mario Klosowski",
    role: "Team Leader",
    company: "Kodland",
  }
] as const;

export default function Recommendations({ dict }: { dict: Dictionary }) {
  const items = people.map((item) => ({
    ...item,
    quote: dict.recommendations.quotes[item.id],
  }));

  return (
    <section
      id="recommendations"
      className="flex min-h-screen flex-col gap-16 bg-bright-background px-6 py-24 text-dark-background lg:px-14 2xl:gap-20 2xl:px-24 2xl:py-32 min-[1920px]:gap-24 min-[1920px]:px-36 min-[1920px]:py-36 min-[2060px]:gap-28 min-[2060px]:px-44 min-[2060px]:py-40"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16 2xl:gap-8 2xl:min-[1920px]:gap-10 min-[1920px]:gap-10 min-[2060px]:gap-12">
        <h2 className="whitespace-pre-line font-serif text-5xl font-medium leading-[1.15] tracking-[0.04em] text-dark-title lg:text-6xl 2xl:text-7xl min-[1920px]:text-[5.5rem] min-[2060px]:text-[6rem]">
          {dict.recommendations.title}
        </h2>
        <p className="whitespace-pre-line text-[15.5px] leading-[26px] text-[#2E2A22B8] 2xl:max-w-[46ch] 2xl:text-[17px] 2xl:leading-[30px] min-[1920px]:max-w-[50ch] min-[1920px]:text-[19px] min-[1920px]:leading-[34px] min-[2060px]:max-w-[54ch] min-[2060px]:text-[21px] min-[2060px]:leading-[38px]">
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