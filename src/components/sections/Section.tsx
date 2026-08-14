import type { ReactNode } from "react";
import type { SectionId } from "@/lib/i18n";

export default function Section({
  id,
  className = "",
  children,
}: {
  id: SectionId;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col justify-center border-t border-line px-6 lg:px-14 ${className}`}
    >
      {children}
    </section>
  );
}
