import { site } from "@/content/site";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  return (
    <span className="flex items-center gap-2.5 select-none" aria-label={site.name}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-800 tracking-tightest ${textColor}`}>
          {site.logoWordmark.first}{" "}
          <span className="text-brand">{site.logoWordmark.second}</span>
        </span>
        <span
          className={`mt-0.5 text-[8px] font-semibold uppercase tracking-[0.34em] ${
            variant === "light" ? "text-white/50" : "text-ink/45"
          }`}
        >
          Branding
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill="none" stroke="#E4231F" strokeWidth="8" />
      {/* Stylised Z */}
      <path
        d="M30 34 H70 L38 62 H72"
        fill="none"
        stroke="#0A0A0B"
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M62 30 L74 42" stroke="#E4231F" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}
