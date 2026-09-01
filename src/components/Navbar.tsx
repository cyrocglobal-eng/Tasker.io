"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Primary">
        <a href="#top" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
          >
            <Phone className="h-4 w-4 text-brand" />
            {site.contact.phone}
          </a>
          <a href="#contact" className="btn-primary !px-6 !py-2.5">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-3 px-1">
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-2 px-3 text-sm font-medium text-ink/70"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  {site.contact.phone}
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
