import type { SVGProps } from "react";

export default function SvgMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 6h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm0 7h12a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm0 7h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2z" />
    </svg>
  );
}
