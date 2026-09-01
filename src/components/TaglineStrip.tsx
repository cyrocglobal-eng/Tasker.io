import { site } from "@/content/site";

export function TaglineStrip() {
  const words = [
    site.tagline,
    "Printing",
    "Branding",
    "Promotional Products",
    "Get Noticed",
  ];
  const loop = [...words, ...words, ...words];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-brand py-4">
      <div className="flex w-max animate-marquee items-center gap-8 will-change-transform">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-sm font-700 uppercase tracking-[0.2em] text-white">
              {w}
            </span>
            <span className="text-white/50" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
