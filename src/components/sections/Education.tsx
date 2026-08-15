import type { Dictionary } from "@/lib/i18n";

export default function Education({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="education"
      className="flex min-h-screen items-start bg-bright-background px-6 py-24 text-dark-background lg:px-14"
    >
     <div className="w-full max-w-[1300px] lg:flex-1">
        <h2 className="whitespace-pre-line font-serif mb-5 text-5xl font-medium leading-[1.15] tracking-[0.02em] text-dark-title lg:text-6xl">
          {dict.education.title}
        </h2>
        <ul className="relative">
          <span
            aria-hidden
            className="absolute bottom-0 left-[10px] top-0 w-px bg-dark-title/25"
          />

          {dict.education.items.map((item) => (
            <li
              key={item.place}
              className="relative mb-9 pl-10 last:mb-0 sm:pl-14"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[11px] flex size-[22px] items-center justify-center rounded-full border border-dark-title/20 bg-brighter-accent"
              >
                <span className="size-[12px] rounded-full bg-accent" />
              </span>

              <div className="bg-brighter-accent px-15 py-9 border border-[#38332A1A] rounded-3xl transition duration-200 hover:-translate-y-1 hover:border-[#38332A33] hover:shadow-lg hover:shadow-black/10">
                <div className="flex items-center justify-between gap-4">
                  <p className="rounded-full bg-[#DED5BE] text-[#2E2A22] text-xs font-medium px-3 py-1 uppercase font-mono tracking-[0.18em]">
                    {
                      dict.education.types[
                        item.type as keyof typeof dict.education.types
                      ]
                    }
                  </p>
                  <p className="text-sm text-[#2E2A22C2] font-mono">
                    {item.period}
                  </p>
                </div>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-dark-title sm:text-4xl">
                  {item.place}
                </h3>

                <p className="mt-1 text-[15px] text-accent">{item.role}</p>

                <p className="mt-4 max-w-[70ch] leading-[1.8] text-dark-title/80">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
     </div>
    </section>
  );
}
