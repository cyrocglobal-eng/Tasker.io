import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="relative bg-paper py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Image */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative overflow-hidden rounded-[24px] border border-ink/10 shadow-xl shadow-ink/5">
            <Image
              src="/images/about-studio.jpg"
              alt="Inside the Zanich General Traders branding and print studio in Nairobi"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-brand px-6 py-5 text-white shadow-lg sm:block">
            <p className="font-display text-2xl font-800 leading-none">Nairobi</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/80">Keekorok Road</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4">
            {about.body.map((p) => (
              <Reveal key={p.slice(0, 24)} delay={0.05}>
                <p className="text-base leading-relaxed text-ink/65 text-pretty">{p}</p>
              </Reveal>
            ))}
          </div>

          <RevealGroup className="mt-9 space-y-4">
            {about.pillars.map((pillar) => (
              <RevealItem
                key={pillar.title}
                className="flex gap-4 rounded-2xl border border-ink/8 bg-white p-5 transition-shadow hover:shadow-md hover:shadow-ink/5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Check className="h-4.5 w-4.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-base font-700 text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/55">{pillar.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
