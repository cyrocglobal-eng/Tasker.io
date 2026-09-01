import Image from "next/image";
import { Boxes, Cpu, Zap, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [Boxes, Cpu, Zap, TrendingUp];

export function WhyUs() {
  const { why } = site;
  return (
    <section id="why" className="relative bg-paper py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={why.eyebrow} title={why.title} />

          <Reveal delay={0.15}>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-ink/10 shadow-xl shadow-ink/5">
              <Image
                src="/images/printshop.jpg"
                alt="Cutting-edge large-format printing technology at Zanich General Traders"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {why.reasons.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem
                key={reason.title}
                className="group relative flex flex-col rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
              >
                <span className="text-6xl font-800 leading-none text-ink/5 transition-colors group-hover:text-brand/10">
                  0{i + 1}
                </span>
                <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-brand">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-700 text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{reason.desc}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
