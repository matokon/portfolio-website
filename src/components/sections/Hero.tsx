import Image from "next/image";
import SvgGithub from "@/components/icons/Github";
import SvgLinkedin from "@/components/icons/Linkedin";
import type { Dictionary } from "@/lib/i18n";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center px-6 lg:px-14">
      <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
        <div className="w-full lg:flex-1">
          <h1 className="max-w-[12ch] text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {dict.hero.title}
          </h1>

          <p className="mt-8 max-w-[41ch] text-[16.5px] leading-relaxed text-bright-muted">
            {dict.hero.lead}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <span className="text-[15.5px] font-medium">{dict.hero.followMe}</span>
            <div className="flex items-center gap-3">
              <a
                href={"https://github.com/matokon"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-14 items-center justify-center rounded-2xl bg-bright-background text-dark-background transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-black/20"
              >
                <SvgGithub className="size-7" />
              </a>
              <a
                href={"https://www.linkedin.com/in/mateusz-oko%C5%84-2458a6332/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-14 items-center justify-center rounded-2xl bg-bright-background text-dark-background transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-black/20"
              >
                <SvgLinkedin className="size-7" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-[15.5px] font-medium">{dict.hero.cvLabel}</span>
            <a
              href={"/hero/okon-mateusz-cv.pdf"}
              download="Mateusz_Okon_CV.pdf"
              className="rounded-2xl bg-bright-background px-8 py-4 text-[15.5px] font-medium text-dark-background transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-black/20"
            >
              {dict.hero.cvButton}
            </a>
          </div>
        </div>

        <div className="w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[520px] lg:flex-1">
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
