import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center bg-bright-background px-6 py-24 text-dark-background lg:px-14 2xl:px-24 min-[1920px]:px-36 min-[2060px]:px-44"
    >
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-20 2xl:gap-24 min-[1920px]:gap-28 min-[2060px]:gap-32">
        <div className="w-full max-w-[420px] lg:max-w-[460px] 2xl:max-w-[540px] min-[1920px]:max-w-[600px] min-[2060px]:max-w-[660px] lg:shrink-0">
          <Image
            src="/about/scuba-diver-portrait.jpg"
            alt={dict.about.photoAlt}
            width={800}
            height={1000}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/15 2xl:rounded-[2.5rem] min-[2060px]:rounded-[3rem]"
          />
        </div>

        <div className="w-full lg:flex-1">
          <h2 className="font-serif tracking-[0.04em] font-medium text-5xl lg:text-6xl 2xl:text-7xl min-[1920px]:text-[5.5rem] min-[2060px]:text-[6rem]">
            {dict.sections.about}
          </h2>

          <div className="mt-8 max-w-[62ch] space-y-6 text-[16.5px] leading-[1.85] text-dark-background/85 2xl:mt-10 2xl:max-w-[66ch] 2xl:space-y-7 2xl:text-[18px] min-[1920px]:mt-12 min-[1920px]:max-w-[70ch] min-[1920px]:space-y-8 min-[1920px]:text-[20px] min-[1920px]:leading-[1.8] min-[2060px]:mt-14 min-[2060px]:max-w-[74ch] min-[2060px]:space-y-9 min-[2060px]:text-[22px] min-[2060px]:leading-[1.75]">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}