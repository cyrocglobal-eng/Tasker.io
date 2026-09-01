import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Clients() {
  const { clients } = site;
  // duplicate for seamless marquee (separate arrays to avoid mutation)
  const rowA = [...clients.logos, ...clients.logos];
  const rowB = [...clients.logos].reverse();
  const rowBLoop = [...rowB, ...rowB];

  return (
    <section id="clients" className="relative overflow-hidden bg-paper py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={clients.eyebrow}
          title={clients.title}
          intro={clients.intro}
          align="center"
        />
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div className="relative flex flex-col gap-4 mask-fade-x">
          <div className="flex w-max animate-marquee gap-4 will-change-transform">
            {rowA.map((name, i) => (
              <ClientChip key={`a-${i}`} name={name} />
            ))}
          </div>
          <div
            className="flex w-max animate-marquee gap-4 will-change-transform"
            style={{ animationDirection: "reverse", animationDuration: "46s" }}
          >
            {rowBLoop.map((name, i) => (
              <ClientChip key={`b-${i}`} name={name} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ClientChip({ name }: { name: string }) {
  return (
    <div className="flex h-16 shrink-0 items-center justify-center rounded-2xl border border-ink/8 bg-white px-8 shadow-sm">
      <span className="whitespace-nowrap font-display text-base font-700 tracking-tight text-ink/45 transition-colors hover:text-ink">
        {name}
      </span>
    </div>
  );
}
