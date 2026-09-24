import { Briefcase, Store } from 'lucide-react';
import { experience } from '../data';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <SectionHead index="04" kicker="the journey" title="Where the skills were earned." />

      <div className="relative ml-2 border-l border-line pl-8 sm:ml-4 sm:pl-12">
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 140} className="relative pb-14 last:pb-0">
            {/* node */}
            <span
              className={`absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border sm:-left-[57px] ${
                i === 0 ? 'border-amber bg-amber/20' : 'border-mint bg-mint/15'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-amber' : 'bg-mint'}`} />
              {i === 0 && <span className="absolute inset-0 rounded-full bg-amber/40 dot-ping" />}
            </span>

            <article className="lift rounded-lg border border-line bg-panel/50 p-7 hover:bg-panel/80">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-md border ${
                      i === 0
                        ? 'border-amber/30 bg-amber/10 text-amber'
                        : 'border-mint/30 bg-mint/10 text-mint'
                    }`}
                  >
                    {i === 0 ? <Store size={19} /> : <Briefcase size={19} />}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-paper">{e.role}</h3>
                    <p className="font-mono text-[12.5px] text-faint">
                      {e.org} · {e.place}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                  {e.period}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                    <span
                      className={`mt-[9px] h-1 w-3 shrink-0 rounded-full ${
                        i === 0 ? 'bg-amber/70' : 'bg-mint/60'
                      }`}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
