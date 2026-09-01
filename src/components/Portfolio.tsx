import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  const { portfolio } = site;
  return (
    <section id="portfolio" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          intro={portfolio.intro}
        />

        <RevealGroup
          className="mt-14 grid auto-rows-[220px] grid-flow-row-dense grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
          stagger={0.08}
        >
          {portfolio.categories.map((item, i) => (
            <RevealItem
              key={item.title}
              as="article"
              className={`group relative overflow-hidden rounded-3xl border border-ink/8 ${
                i === 0
                  ? "col-span-2 row-span-2 lg:col-span-2"
                  : i === 5
                    ? "col-span-2 lg:col-span-2"
                    : ""
              }`}
            >
              <Image
                src={item.image}
                alt={`${item.title} — ${item.tag} by Zanich General Traders`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <span className="inline-flex rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-700 text-white">{item.title}</h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-center text-sm text-ink/45">
          A selection from our portfolio. Full case studies available on request.
        </p>
      </div>
    </section>
  );
}
