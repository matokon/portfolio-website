import type { Dictionary } from "@/lib/i18n";

const projects = [
  {
    id: "philo",
    name: "Philo",
    tags: ["C", "Threads", "Mutex", "Linux"],
    href: "https://github.com/matokon/philosophers",
    linkLabel: "GitHub",
  },
  {
    id: "minishell",
    name: "Minishell",
    tags: ["C", "Unix", "Shell", "Systems"],
    href: "https://github.com/matokon/minishell",
    linkLabel: "GitHub",
  },
  {
    id: "gymbox",
    name: "GymBox",
    tags: ["Next.js", "React", "Landing", "SEO"],
    href: "https://gymbox.pl",
    linkLabel: "gymbox.pl",
  },
  {
    id: "warehouse",
    name: "Warehouse App",
    tags: ["React Native", "Expo", "Rails", "Mobile"],
    href: "https://github.com/matokon/warehouse-app",
    linkLabel: "GitHub",
  },
  {
    id: "pushswap",
    name: "Push_swap",
    tags: ["C", "Algorithms", "Sorting", "Optimization"],
    href: "https://github.com/matokon/push_swap",
    linkLabel: "GitHub",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    tags: ["Next.js", "React", "CSS", "Figma"],
    href: "https://github.com/matokon/portfolio-website",
    linkLabel: "GitHub",
  },
] as const;

export default function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="projects"
      className="flex flex-col gap-16 px-6 py-20 lg:px-14"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <h2 className="whitespace-pre-line font-serif text-5xl font-medium leading-[1.15] tracking-[0.04em] lg:text-6xl">
          {dict.projects.title}
        </h2>
        <p className="whitespace-pre-line leading-relaxed text-bright-muted">
          {dict.projects.lead}
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <li
            key={item.id}
            className="flex flex-col rounded-3xl border border-bright-background/10 bg-bright-background/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-bright-background/25 hover:bg-bright-background/[0.06] hover:shadow-xl hover:shadow-black/25"
          >
              <h3 className="font-serif text-3xl tracking-[0.04em]">{item.name}</h3>

            <p className="mt-4 leading-relaxed text-bright-muted">
              {dict.projects.descriptions[item.id]}
            </p>

            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-bright-background px-3 py-1 font-mono text-xs text-dark-title"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center gap-2 border-t border-bright-background/10 pt-5 font-mono text-sm text-accent-bright transition-colors hover:text-bright-background"
            >
              {item.linkLabel}
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

    </section>
  );
}
