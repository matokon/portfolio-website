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
import SvgPostgresql from "@/components/icons/Postgresql";

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
  { name: "PostgreSQL", Icon: SvgPostgresql },
];

const terminalRows = [
  { key: "languages", value: "TypeScript JavaScript Ruby C" },
  { key: "frontend", value: "React Next.js Tailwind" },
  { key: "mobile", value: "React Native Expo" },
  { key: "backend", value: "Ruby on Rails" },
] as const;

const currentFocus = "React Native";

export default function Stack({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="stack"
      className="flex flex-col justify-center gap-16 px-6 py-20 lg:flex-row lg:items-center lg:gap-24 lg:px-14 2xl:gap-32 2xl:px-24 2xl:py-28 min-[1920px]:gap-40 min-[1920px]:px-36 min-[1920px]:py-32 min-[2060px]:gap-48 min-[2060px]:px-44 min-[2060px]:py-36"
    >
      <div className="lg:flex-1">
        <h2 className="whitespace-pre-line font-serif mb-8 text-5xl font-medium leading-[1.15] tracking-[0.04em] lg:text-6xl 2xl:mb-10 2xl:text-7xl min-[1920px]:mb-12 min-[1920px]:text-[5.5rem] min-[2060px]:mb-14 min-[2060px]:text-[6rem]">
          {dict.stack.title}
        </h2>

        <p className="max-w-[42ch] whitespace-pre-line text-[15.5px] leading-[26px] text-bright-muted 2xl:max-w-[46ch] 2xl:text-[17px] 2xl:leading-[30px] min-[1920px]:max-w-[50ch] min-[1920px]:text-[19px] min-[1920px]:leading-[34px] min-[2060px]:max-w-[54ch] min-[2060px]:text-[21px] min-[2060px]:leading-[38px]">
          {dict.stack.lead}
        </p>

        <div className="mt-8 max-w-[52ch] overflow-hidden rounded-2xl border border-bright-background/10 bg-nav 2xl:mt-10 2xl:max-w-[58ch] 2xl:rounded-3xl min-[1920px]:mt-12 min-[1920px]:max-w-[64ch] min-[1920px]:rounded-[1.75rem] min-[2060px]:mt-14 min-[2060px]:max-w-[70ch] min-[2060px]:rounded-[2rem]">
          <div className="flex items-center gap-3 border-b border-bright-background/10 px-5 py-3.5 2xl:px-7 2xl:py-5 min-[1920px]:px-8 min-[1920px]:py-6 min-[2060px]:px-10 min-[2060px]:py-7">
            <span aria-hidden className="flex gap-2 2xl:gap-2.5">
              <span className="size-3 rounded-full bg-accent-bright 2xl:size-3.5 min-[1920px]:size-4 min-[2060px]:size-[1.125rem]" />
              <span className="size-3 rounded-full bg-muted/50 2xl:size-3.5 min-[1920px]:size-4 min-[2060px]:size-[1.125rem]" />
              <span className="size-3 rounded-full bg-muted/25 2xl:size-3.5 min-[1920px]:size-4 min-[2060px]:size-[1.125rem]" />
            </span>
            <span className="font-mono text-sm text-bright-muted/60 2xl:text-base min-[1920px]:text-[17px] min-[2060px]:text-[19px]">
              {dict.stack.terminal.file}
            </span>
          </div>

          <div className="px-5 py-5 font-mono text-sm 2xl:px-7 2xl:py-7 2xl:text-base min-[1920px]:px-8 min-[1920px]:py-8 min-[1920px]:text-[17px] min-[2060px]:px-10 min-[2060px]:py-10 min-[2060px]:text-[19px]">
            <p className="flex gap-2 2xl:gap-3">
              <span className="text-accent-bright">$</span>
              <span>{dict.stack.terminal.command}</span>
            </p>

            <dl className="mt-4 space-y-2.5 pl-5 2xl:mt-5 2xl:space-y-3.5 2xl:pl-6 min-[1920px]:mt-6 min-[1920px]:space-y-4 min-[1920px]:pl-7 min-[2060px]:mt-7 min-[2060px]:space-y-5 min-[2060px]:pl-8">
              {terminalRows.map((row) => (
                <div key={row.key} className="flex flex-wrap gap-x-4 2xl:gap-x-5 min-[1920px]:gap-x-6">
                  <dt className="w-24 shrink-0 text-bright-muted/70 2xl:w-28 min-[1920px]:w-32 min-[2060px]:w-36">
                    {dict.stack.terminal.rows[row.key]}
                  </dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 flex flex-wrap items-center gap-x-3 border-t border-bright-background/10 pt-5 pl-5 2xl:mt-6 2xl:gap-x-4 2xl:pt-6 2xl:pl-6 min-[1920px]:mt-7 min-[1920px]:pt-7 min-[1920px]:pl-7 min-[2060px]:mt-8 min-[2060px]:pt-8 min-[2060px]:pl-8">
              <span className="text-accent-bright">
                {dict.stack.terminal.focus}
              </span>
              <span>{currentFocus}</span>
              <span
                aria-hidden
                className="inline-block h-4 w-2 animate-caret bg-accent-bright align-middle 2xl:h-5 2xl:w-2.5 min-[1920px]:h-6 min-[1920px]:w-3 min-[2060px]:h-7 min-[2060px]:w-3.5"
              />
            </p>
          </div>
        </div>

      </div>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-4 lg:flex-1 2xl:gap-x-8 2xl:gap-y-10 min-[1920px]:gap-x-10 min-[1920px]:gap-y-12 min-[2060px]:gap-x-12 min-[2060px]:gap-y-14">
        {technologies.map((item, index) => (
          <li
            key={item.name}
            style={{
              animationDelay: `-${index * 1.43}s`,
              animationDuration: `${3.4 + (index % 4) * 0.55}s`,
            }}
            className="flex animate-bob flex-col items-center gap-3 2xl:gap-4 min-[2060px]:gap-5"
          >
            <span className="flex size-28 items-center justify-center rounded-full border border-black/10 bg-bright-background shadow-[0_18px_34px_-20px_rgba(8,5,1,.8)] transition-transform duration-300 ease-out hover:scale-110 2xl:size-32 min-[1920px]:size-36 min-[2060px]:size-40">
              <item.Icon className="size-13 text-dark-title 2xl:size-16 min-[1920px]:size-18 min-[2060px]:size-20" />
            </span>
            <span className="font-mono text-[13px] text-bright-muted 2xl:text-[15px] min-[1920px]:text-[16px] min-[2060px]:text-[17px]">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}