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
  { key: "frontend", value: "React Next.js Tailwind CSS" },
  { key: "mobile", value: "React Native Expo" },
  { key: "backend", value: "Ruby on Rails" },
] as const;

const currentFocus = "React Native";

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

        <div className="mt-8 max-w-[52ch] overflow-hidden rounded-2xl border border-bright-background/10 bg-nav">
          <div className="flex items-center gap-3 border-b border-bright-background/10 px-5 py-3.5">
            <span aria-hidden className="flex gap-2">
              <span className="size-3 rounded-full bg-accent-bright" />
              <span className="size-3 rounded-full bg-muted/50" />
              <span className="size-3 rounded-full bg-muted/25" />
            </span>
            <span className="font-mono text-sm text-bright-muted/60">
              {dict.stack.terminal.file}
            </span>
          </div>

          <div className="px-5 py-5 font-mono text-sm">
            <p className="flex gap-2">
              <span className="text-accent-bright">$</span>
              <span>{dict.stack.terminal.command}</span>
            </p>

            <dl className="mt-4 space-y-2.5 pl-5">
              {terminalRows.map((row) => (
                <div key={row.key} className="flex flex-wrap gap-x-4">
                  <dt className="w-24 shrink-0 text-bright-muted/70">
                    {dict.stack.terminal.rows[row.key]}
                  </dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 flex flex-wrap items-center gap-x-3 border-t border-bright-background/10 pt-5 pl-5">
              <span className="text-accent-bright">
                {dict.stack.terminal.focus}
              </span>
              <span>{currentFocus}</span>
              <span
                aria-hidden
                className="inline-block h-4 w-2 animate-caret bg-accent-bright align-middle"
              />
            </p>
          </div>
        </div>

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
            <span className="flex size-28 items-center justify-center rounded-full border border-black/10 bg-bright-background shadow-[0_18px_34px_-20px_rgba(8,5,1,.8)] transition-transform duration-300 ease-out hover:scale-110">
              <item.Icon className="size-13 text-dark-title" />
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
