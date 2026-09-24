import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-[13px] text-amber">
            <span className="text-faint">06</span>
            <span className="mx-3 inline-block h-px w-8 bg-amber/50 align-middle" />
            contact
          </p>
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            Let's build something
            <span className="italic text-amber"> worth shipping.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted">
            Internships, collaborations, e-commerce projects, or just a conversation
            about code and content — my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 rounded-md bg-amber px-7 py-3.5 font-mono text-sm font-semibold text-ink transition-all hover:bg-amber-soft hover:shadow-[0_12px_34px_-10px_rgba(255,180,84,0.6)]"
            >
              <Mail size={16} />
              {profile.email}
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={copyEmail}
              className={`inline-flex items-center gap-2 rounded-md border px-5 py-3.5 font-mono text-sm transition-all ${
                copied
                  ? "border-mint/60 bg-mint/10 text-mint"
                  : "border-line text-muted hover:border-amber/50 hover:text-amber"
              }`}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied!" : "Copy address"}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px] text-faint">
            <a href={profile.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-paper">
              <Phone size={14} className="text-mint" /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-mint" /> {profile.location}
            </span>
          </div>
        </Reveal>
      </div>

      {/* footer */}
      <footer className="border-t border-line-soft bg-panel-2/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-[12px] text-faint sm:flex-row sm:px-8">
          <p>
            © 2026 <span className="text-muted">Rinku Rohilla</span> · Panipat, Haryana
          </p>
          <p>
            <span className="text-amber">▲</span> BCA-AI · CQST College — built with React & Tailwind
          </p>
        </div>
      </footer>

      {/* toast */}
      {copied && (
        <div className="toast-in fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-md border border-mint/40 bg-panel px-5 py-3 font-mono text-[13px] text-mint shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]">
          ✓ {profile.email} copied to clipboard
        </div>
      )}
    </section>
  );
}
