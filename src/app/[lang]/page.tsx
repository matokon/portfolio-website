import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Stack from "@/components/sections/Stack";
import Recommendations from "@/components/sections/Recommendations";
import Contact from "@/components/sections/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-1 flex-col">
      <Hero dict={dict} />
      <About dict={dict} />
      <Projects dict={dict} />
      <Education dict={dict} />
      <Stack dict={dict} />
      <Recommendations dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
