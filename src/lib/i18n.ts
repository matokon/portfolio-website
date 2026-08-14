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

import pl from "@/dictionaries/pl.json";
import en from "@/dictionaries/en.json";

export type Dictionary = typeof pl;

const dictionaries: Record<Locale, Dictionary> = { pl, en };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
