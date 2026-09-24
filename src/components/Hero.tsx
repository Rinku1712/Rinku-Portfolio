import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, MapPin, Phone, Mail, CircleDot } from "lucide-react";
import { profile } from "../data";

const COMMAND = "node profile.js";

const K = ({ children }: { children: ReactNode }) => (
  <span className="text-sky">{children}</span>
);
const S = ({ children }: { children: ReactNode }) => (
  <span className="text-mint">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-faint">{children}</span>
);

const OUTPUT: ReactNode[] = [
  <P>{"{"}</P>,
  <>
    {"  "}
    <K>name</K>
    <P>: </P>
    <S>"Rinku Rohilla"</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    <K>degree</K>
    <P>: </P>
    <S>"BCA – Artificial Intelligence"</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    <K>college</K>
    <P>: </P>
    <S>"Code Quotient School of Technology"</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    <K>semester</K>
    <P>: </P>
    <S>"5th · 2024 – 2027"</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    <K>base</K>
    <P>: </P>
    <S>"Panipat, Haryana"</S>
    <P>,</P>
  </>,
  <>
    {"  "}
    <K>stack</K>
    <P>: [</P>
    <S>"JS"</S>
    <P>, </P>
    <S>"Node"</S>
    <P>, </P>
    <S>"Express"</S>
    <P>, </P>
    <S>"React"</S>
    <P>],</P>
  </>,
  <>
    {"  "}
    <K>roles</K>
    <P>: [</P>
    <S>"Developer"</S>
    <P>, </P>
    <S>"Seller"</S>
    <P>, </P>
    <S>"Creator"</S>
    <P>],</P>
  </>,
  <>
    {"  "}
    <K>openTo</K>
    <P>: </P>
    <S>"internships & collaborations"</S>
  </>,
  <P>{"}"}</P>,
];

export default function Hero() {
  const [typed, setTyped] = useState(0);
  const [lines, setLines] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    if (typed < COMMAND.length) {
      const t = setTimeout(() => setTyped((v) => v + 1), 55);
      return () => clearTimeout(t);
    }
    if (lines < OUTPUT.length) {
      const t = setTimeout(() => setLines((v) => v + 1), 130);
      return () => clearTimeout(t);
    }
  }, [typed, lines]);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % profile.roles.length),
      2400
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left — editorial intro */}
        <div>
          <p className="mb-5 flex items-center gap-2 font-mono text-[13px] text-muted">
            <span className="text-amber">//</span> panipat, haryana
            <span className="text-faint">·</span>
            <span className="inline-flex items-center gap-1.5 text-mint">
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-mint dot-ping" />
              open to opportunities
            </span>
          </p>

          <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            Rinku
            <br />
            Rohilla<span className="text-amber">.</span>
          </h1>

          <div className="mt-6 flex h-8 items-center gap-2 font-mono text-base text-muted sm:text-lg">
            <span className="text-faint">$</span> i am a
            <span
              key={roleIdx}
              className="role-in inline-block font-semibold text-amber"
            >
              {profile.roles[roleIdx]}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted">
            {profile.pitch}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-mono text-sm font-semibold text-ink transition-all hover:bg-amber-soft hover:shadow-[0_10px_30px_-10px_rgba(255,180,84,0.6)]"
            >
              See my work
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-amber/50 hover:text-amber"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12.5px] text-faint">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-amber" /> {profile.location}
            </span>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-paper">
              <Phone size={13} className="text-amber" /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-paper">
              <Mail size={13} className="text-amber" /> {profile.email}
            </a>
          </div>
        </div>

        {/* right — terminal */}
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-xl bg-gradient-to-br from-amber/12 via-transparent to-mint/10 blur-xl" />
          <div className="overflow-hidden rounded-xl border border-line bg-panel-2/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 border-b border-line-soft bg-panel px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-faint">
                rinku@cqst: ~/portfolio
              </span>
              <CircleDot size={13} className="ml-auto text-mint" />
            </div>
            <div className="min-h-[330px] px-5 py-5 font-mono text-[13px] leading-7 sm:text-[13.5px]">
              <p className="text-paper">
                <span className="text-mint">➜</span>{" "}
                <span className="text-sky">~</span>{" "}
                {COMMAND.slice(0, typed)}
                {typed < COMMAND.length && (
                  <span className="caret text-amber">▍</span>
                )}
              </p>
              {typed >= COMMAND.length && (
                <div className="mt-1 text-paper">
                  {OUTPUT.slice(0, lines).map((line, i) => (
                    <p key={i} className="role-in">
                      {line}
                    </p>
                  ))}
                  {lines >= OUTPUT.length && (
                    <p className="mt-2 text-faint">
                      <span className="text-mint">✓</span> compiled in 0.42s —{" "}
                      <span className="text-amber">ready when you are</span>
                      <span className="caret text-amber">▍</span>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
