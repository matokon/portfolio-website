import type { Dictionary } from "@/lib/i18n";

export default function Education({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="education"
      className="flex min-h-screen items-start bg-bright-background px-6 py-24 text-dark-background lg:px-14 2xl:px-24 min-[1920px]:px-36 min-[2060px]:px-44"
    >
      <div className="w-full">
        <h2 className="whitespace-pre-line font-serif mb-5 text-5xl font-medium leading-[1.15] tracking-[0.04em] text-dark-title lg:text-6xl 2xl:mb-8 2xl:text-7xl min-[1920px]:mb-10 min-[1920px]:text-[5.5rem] min-[2060px]:mb-12 min-[2060px]:text-[6rem]">
          {dict.education.title}
        </h2>

        <ul className="relative w-full">
          <span
            aria-hidden
            className="absolute bottom-0 left-[10px] top-0 w-px bg-dark-title/25 2xl:left-[13px] min-[1920px]:left-[15px] min-[2060px]:left-[17px]"
          />

          {dict.education.items.map((item) => (
            <li
              key={item.place}
              className="relative mb-9 pl-10 last:mb-0 sm:pl-14 2xl:mb-12 2xl:pl-16 min-[1920px]:mb-14 min-[1920px]:pl-20 min-[2060px]:mb-16 min-[2060px]:pl-24"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[11px] flex size-[22px] items-center justify-center rounded-full border border-dark-title/20 bg-brighter-accent 2xl:size-[26px] 2xl:top-[14px] min-[1920px]:size-[30px] min-[1920px]:top-[16px] min-[2060px]:size-[34px] min-[2060px]:top-[18px]"
              >
                <span className="size-[12px] rounded-full bg-accent 2xl:size-[14px] min-[1920px]:size-[16px] min-[2060px]:size-[18px]" />
              </span>

              <div className="w-full bg-brighter-accent px-6 py-8 sm:px-14 sm:py-9 border border-[#38332A1A] rounded-3xl transition duration-200 hover:-translate-y-1 hover:border-[#38332A33] hover:shadow-lg hover:shadow-black/10 2xl:px-16 2xl:py-12 2xl:rounded-[2rem] min-[1920px]:px-20 min-[1920px]:py-14 min-[1920px]:rounded-[2.5rem] min-[2060px]:px-24 min-[2060px]:py-16 min-[2060px]:rounded-[3rem]">
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <p className="rounded-full bg-[#DED5BE] text-[#2E2A22] text-xs font-medium px-3 py-1 uppercase font-mono tracking-[0.18em] 2xl:text-sm 2xl:px-4 2xl:py-1.5 min-[1920px]:text-[15px] min-[1920px]:px-5 min-[1920px]:py-2 min-[2060px]:text-base min-[2060px]:px-6 min-[2060px]:py-2.5">
                    {
                      dict.education.types[
                        item.type as keyof typeof dict.education.types
                      ]
                    }
                  </p>
                  <p className="whitespace-nowrap font-mono text-xs text-[#2E2A22C2] sm:text-sm 2xl:text-base min-[1920px]:text-[17px] min-[2060px]:text-lg">
                    {item.period}
                  </p>
                </div>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-dark-title sm:text-4xl 2xl:mt-6 2xl:text-5xl min-[1920px]:mt-7 min-[1920px]:text-[3.5rem] min-[2060px]:mt-8 min-[2060px]:text-[4rem]">
                  {item.place}
                </h3>

                <p className="mt-1 text-[15px] text-accent 2xl:mt-2 2xl:text-[17px] min-[1920px]:text-[19px] min-[2060px]:text-[21px]">
                  {item.role}
                </p>

                <p className="mt-4 max-w-[70ch] leading-[1.8] text-dark-title/80 text-[16px] 2xl:mt-5 2xl:text-[18px] 2xl:max-w-[72ch] min-[1920px]:mt-6 min-[1920px]:text-[20px] min-[1920px]:max-w-[74ch] min-[2060px]:mt-7 min-[2060px]:text-[22px] min-[2060px]:max-w-[76ch]">
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