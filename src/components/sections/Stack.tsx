import type { Dictionary } from "@/lib/i18n";
import SvgTypescript from "@/components/icons/Typescript";
import SvgJavascript from "@/components/icons/Javascript";
import SvgReact from "@/components/icons/React";
import SvgNextjs from "@/components/icons/Nextjs";
import SvgRails from "@/components/icons/Rails";
import SvgTailwind from "@/components/icons/Tailwind";
import SvgDocker from "@/components/icons/Docker";
import SvgGit from "@/components/icons/Git";
import SvgC from "@/components/icons/C";
import SvgMongodb from "@/components/icons/Mongodb";
import SvgFigma from "@/components/icons/Figma";

const technologies = [
  { name: "TypeScript", Icon: SvgTypescript },
  { name: "JavaScript", Icon: SvgJavascript },
  { name: "React", Icon: SvgReact },
  { name: "React Native", Icon: SvgReact },
  { name: "Next.js", Icon: SvgNextjs },
  { name: "Rails", Icon: SvgRails },
  { name: "Tailwind", Icon: SvgTailwind },
  { name: "Docker", Icon: SvgDocker },
  { name: "Git", Icon: SvgGit },
  { name: "C", Icon: SvgC },
  { name: "MongoDB", Icon: SvgMongodb },
  { name: "Figma", Icon: SvgFigma },
];

export default function Stack({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="stack"
      className="flex flex-col justify-center gap-16 px-6 py-20 lg:flex-row lg:items-center lg:gap-24 lg:px-14"
    >
      <div className="lg:flex-1">
        <h2 className="whitespace-pre-line font-serif mb-8 text-5xl font-medium leading-[1.15] tracking-[0.04em] lg:text-6xl">
          {dict.stack.title}
        </h2>

        <p className="max-w-[42ch] whitespace-pre-line text-[15.5px] leading-[26px] text-bright-muted">
          {dict.stack.lead}
        </p>

        <ul className="mt-12 flex flex-wrap gap-3">
          {technologies.map((item) => (
            <li
              key={item.name}
              className="rounded-full border border-line px-4 py-2 font-mono text-sm text-bright-muted transition duration-200 hover:-translate-y-0.5 hover:border-muted hover:text-bright-background"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-4 lg:flex-1">
        {technologies.map((item, index) => (
          <li
            key={item.name}
            style={{
              animationDelay: `-${index * 1.43}s`,
              animationDuration: `${3.4 + (index % 4) * 0.55}s`,
            }}
            className="flex animate-bob flex-col items-center gap-3"
          >
            <span className="flex size-24 items-center justify-center rounded-full border border-black/10 bg-bright-background shadow-[0_18px_34px_-20px_rgba(8,5,1,.8)] transition-transform duration-300 ease-out hover:scale-110">
              <item.Icon className="size-11 text-dark-title" />
            </span>
            <span className="font-mono text-[13px] text-bright-muted">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
