"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import SvgGithub from "@/components/icons/Github";
import SvgLinkedin from "@/components/icons/Linkedin";
import type { Dictionary } from "@/lib/i18n";

export default function Hero({ dict }: { dict: Dictionary }) {
  const params = useParams();
  const lang = (params?.lang as string) ?? "pl";

  const cvHref =
    lang === "en"
      ? "/hero/Okon-Mateusz-resume.pdf"
      : "/hero/Okon-Mateusz-CV.pdf";

  const cvDownload =
    lang === "en" ? "Mateusz_Okon_Resume.pdf" : "Mateusz_Okon_CV.pdf";

  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center px-6 py-16 lg:px-14 2xl:px-24 min-[1920px]:px-36 min-[2060px]:px-44">
      <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-16 2xl:gap-24 min-[1920px]:gap-32 min-[2060px]:gap-36">
        <div className="w-full lg:flex-1">
          <h1 className="max-w-[12ch] text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl 2xl:text-8xl min-[1920px]:text-[8rem] min-[2060px]:text-[9rem]">
            {dict.hero.title}
          </h1>

          <p className="mt-8 max-w-[41ch] text-[16.5px] leading-relaxed text-bright-muted 2xl:mt-10 2xl:max-w-[48ch] 2xl:text-[19px] min-[1920px]:mt-12 min-[1920px]:max-w-[52ch] min-[1920px]:text-[22px] min-[2060px]:mt-14 min-[2060px]:max-w-[56ch] min-[2060px]:text-[24px]">
            {dict.hero.lead}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 2xl:mt-14 2xl:gap-5 min-[1920px]:mt-16 min-[1920px]:gap-6 min-[2060px]:mt-20 min-[2060px]:gap-7">
            <span className="text-[15.5px] font-medium 2xl:text-[17px] min-[1920px]:text-[18px] min-[2060px]:text-[19px]">
              {dict.hero.followMe}
            </span>
            <div className="flex items-center gap-3 2xl:gap-4 min-[1920px]:gap-5">
              <a
                href="https://github.com/matokon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-14 items-center justify-center rounded-2xl bg-bright-background text-dark-background transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-black/20 2xl:size-16 min-[1920px]:size-[4.5rem] min-[2060px]:size-20"
              >
                <SvgGithub className="size-7 2xl:size-8 min-[1920px]:size-9 min-[2060px]:size-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/mateusz-oko%C5%84-2458a6332/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-14 items-center justify-center rounded-2xl bg-bright-background text-dark-background transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-black/20 2xl:size-16 min-[1920px]:size-[4.5rem] min-[2060px]:size-20"
              >
                <SvgLinkedin className="size-7 2xl:size-8 min-[1920px]:size-9 min-[2060px]:size-10" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 2xl:mt-8 2xl:gap-5 min-[1920px]:mt-10 min-[1920px]:gap-6 min-[2060px]:mt-12 min-[2060px]:gap-7">
            <span className="text-[15.5px] font-medium 2xl:text-[17px] min-[1920px]:text-[18px] min-[2060px]:text-[19px]">
              {dict.hero.cvLabel}
            </span>
            <a
              href={cvHref}
              download={cvDownload}
              className="rounded-2xl bg-bright-background px-8 py-4 text-[15.5px] font-medium text-dark-background transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-black/20 2xl:px-10 2xl:py-5 2xl:text-[17px] min-[1920px]:px-12 min-[1920px]:py-6 min-[1920px]:text-[18px] min-[2060px]:px-14 min-[2060px]:py-7 min-[2060px]:text-[19px]"
            >
              {dict.hero.cvButton}
            </a>
          </div>
        </div>

        <div className="w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[520px] 2xl:max-w-[600px] min-[1920px]:max-w-[680px] min-[2060px]:max-w-[760px] lg:flex-1">
          <Image
            src="/hero/profilePhoto.jpg"
            alt={dict.hero.photoAlt}
            width={640}
            height={640}
            priority
            className="aspect-square w-full rounded-full border border-line/60 object-cover"
          />
        </div>
      </div>
    </section>
  );
}