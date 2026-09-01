"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Clock } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const { contact, cta } = site;
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      {/* Abstract branded backdrop */}
      <Image
        src="/images/cta-abstract.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: message + contact rails */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-brand" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-800 leading-[1.06] tracking-tightest text-balance sm:text-4xl lg:text-[2.9rem]">
                {cta.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65 text-pretty">
                {cta.sub}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-3">
                <ContactRow
                  icon={Phone}
                  label="Call us"
                  value={contact.phone}
                  href={contact.phoneHref}
                />
                <ContactRow
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="Message us instantly"
                  href={contact.whatsappHref}
                />
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <ContactRow
                  icon={MapPin}
                  label="Head office"
                  value={`${contact.address.line1}, ${contact.address.line2}, ${contact.address.city}`}
                />
                <ContactRow icon={Clock} label="Hours" value={contact.hours} />
              </ul>
            </Reveal>
          </div>

          {/* Right: form card */}
          <Reveal delay={0.15}>
            <div className="rounded-[26px] border border-white/10 bg-white p-7 text-ink shadow-2xl shadow-black/40 lg:p-9">
              <h3 className="font-display text-xl font-700">Request a quote</h3>
              <p className="mt-1 text-sm text-ink/55">
                Tell us what you need branded — we&rsquo;ll reply fast.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-brand/5 px-6 py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                    <Mail className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-lg font-700 text-ink">Thank you!</p>
                  <p className="mt-1 max-w-xs text-sm text-ink/55">
                    Your request has been noted. Connect this form to email or a CRM to receive
                    live submissions.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" placeholder="Your name" required />
                    <Field label="Company" name="company" placeholder="Company (optional)" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                    <Field label="Phone" name="phone" placeholder="+254 …" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink/70">
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    >
                      {site.services.items.map((s) => (
                        <option key={s.name}>{s.name}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/70">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Quantities, deadline, artwork status…"
                      className="w-full resize-none rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full group">
                    Send Request
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-ink/40">
                    Prefer to talk? Call{" "}
                    <a href={contact.phoneHref} className="font-semibold text-brand">
                      {contact.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/25 hover:bg-white/[0.08]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-white/45">{label}</p>
        <p className="mt-0.5 break-words text-sm font-medium text-white/90">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/70">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
