import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center bg-bright-background px-6 py-24 text-dark-background lg:px-14"
    >
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="w-full max-w-[420px] lg:max-w-[460px] lg:shrink-0">
          <Image
            src="/about/scuba-diver-portrait.jpg"
            alt={dict.about.photoAlt}
            width={800}
            height={1000}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/15"
          />
        </div>

        <div className="w-full lg:flex-1">
          <h2 className="font-serif tracking-[0.02em] font-medium text-5xl lg:text-6xl">
            {dict.sections.about}
          </h2>

          <div className="mt-8 max-w-[62ch] space-y-6 text-[16.5px] leading-[1.85] text-dark-background/85">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}