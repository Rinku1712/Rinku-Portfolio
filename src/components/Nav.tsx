import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const links = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line-soft bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-amber/40 bg-amber/10 font-display text-sm font-semibold text-amber transition-colors group-hover:bg-amber/20">
            RR
          </span>
          <span className="hidden font-mono text-xs tracking-wide text-muted sm:block">
            rinku<span className="text-amber">.</span>rohilla
            <span className="text-faint"> ~/portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-md px-3.5 py-2 font-mono text-[13px] transition-colors ${
                active === l.id ? "text-amber" : "text-muted hover:text-paper"
              }`}
            >
              {active === l.id && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-amber" />
              )}
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-amber/50 bg-amber/10 px-4 py-2 font-mono text-[13px] font-medium text-amber transition-all hover:bg-amber hover:text-ink"
          >
            <Mail size={14} />
            Hire me
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:text-paper md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line-soft bg-ink/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 font-mono text-sm ${
                  active === l.id ? "bg-amber/10 text-amber" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
