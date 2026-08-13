import { notFound } from "next/navigation";
import { getDictionary, isLocale, sectionIds } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex min-h-[calc(100vh-72px)] flex-col justify-center px-6 lg:px-14">
        <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
          {dict.hero.title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {dict.hero.lead}
        </p>
      </section>

      {sectionIds.map((id) => (
        <section
          key={id}
          id={id}
          className="flex min-h-screen flex-col justify-center border-t border-line px-6 lg:px-14"
        >
          <span className="font-mono text-[13px] tracking-[0.5px] text-muted/60">
            #{id}
          </span>
          <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
            {dict.sections[id]}
          </h2>
        </section>
      ))}
    </main>
  );
}
