import { GraduationCap, CalendarDays, Sparkles, Target } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { education } from "../data";

const facts = [
  { icon: CalendarDays, label: "Semester", value: "5th of 6 · BCA-AI" },
  { icon: Target, label: "Focus", value: "Full-stack web + AI" },
  { icon: Sparkles, label: "Also running", value: "A Meesho store & a YouTube channel" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHead index="01" kicker="about" title="Student by day, operator by night." />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-[16px] leading-relaxed text-muted">
            I study <span className="text-paper">Artificial Intelligence</span> at Code
            Quotient School of Technology — but my classroom extends well beyond it.
            I run my own storefront on{" "}
            <span className="text-amber">Meesho</span>, produce study content for
            competitive-exam students, and build full-stack apps with{" "}
            <span className="text-mint">JavaScript, Node.js and Express</span>.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            Commerce in school, AI in college, commerce-on-the-internet in practice —
            everything I do sits at the intersection of{" "}
            <span className="text-paper">code and business</span>.
          </p>

          <ul className="mt-8 space-y-4">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-panel text-amber">
                  <f.icon size={17} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    {f.label}
                  </p>
                  <p className="text-[14.5px] text-paper">{f.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="space-y-5">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 120}>
              <article className="lift group rounded-lg border border-line bg-panel/60 p-6 hover:bg-panel">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-amber/30 bg-amber/10 text-amber">
                    <GraduationCap size={20} />
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                    {e.period}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-paper">
                  {e.degree}
                </h3>
                <p className="mt-1 text-[14px] italic text-muted">{e.school}</p>
                <p className="mt-3 border-t border-line-soft pt-3 font-mono text-[12.5px] text-faint">
                  {e.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
