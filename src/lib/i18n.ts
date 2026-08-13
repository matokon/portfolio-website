export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

export const sectionIds = [
  "about",
  "projects",
  "education",
  "stack",
  "recommendations",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

const dictionaries = {
  pl: () => import("@/dictionaries/pl.json").then((mod) => mod.default),
  en: () => import("@/dictionaries/en.json").then((mod) => mod.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["pl"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
