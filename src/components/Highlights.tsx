import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Clapperboard,
  HeartHandshake,
  MessageSquare,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react';
import { achievements, activities, responsibilities } from '../data';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const iconMap: Record<string, LucideIcon> = {
  trending: TrendingUp,
  video: Clapperboard,
  award: Award,
};

const respIcons = [Users, MessageSquare];
const activityIcons = [Trophy, HeartHandshake];

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <SectionHead index="05" kicker="proof & presence" title="Beyond the classroom." />

      {/* achievements */}
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon] ?? Award;
          return (
            <Reveal key={a.title} delay={i * 110}>
              <article className="lift group h-full rounded-lg border border-line bg-panel/50 p-6 hover:bg-panel">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-amber/30 bg-amber/10 text-amber transition-transform group-hover:scale-110">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-paper">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{a.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* responsibility + activities */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-line bg-panel/40 p-7">
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-semibold">
              <span className="h-2 w-2 rounded-full bg-amber" />
              Positions of responsibility
            </h3>
            <div className="space-y-6">
              {responsibilities.map((r, i) => {
                const Icon = respIcons[i] ?? Users;
                return (
                  <div key={r.role} className="group flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-ink/50 text-muted transition-colors group-hover:border-amber/40 group-hover:text-amber">
                      <Icon size={17} />
                    </span>
                    <div>
                      <p className="font-semibold text-paper">{r.role}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-muted">{r.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-lg border border-line bg-panel/40 p-7">
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-xl font-semibold">
              <span className="h-2 w-2 rounded-full bg-mint" />
              Extra-curricular activities
            </h3>
            <div className="space-y-6">
              {activities.map((a, i) => {
                const Icon = activityIcons[i] ?? Trophy;
                return (
                  <div key={a} className="group flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-ink/50 text-muted transition-colors group-hover:border-mint/40 group-hover:text-mint">
                      <Icon size={17} />
                    </span>
                    <p className="pt-2 text-[14px] leading-relaxed text-muted">{a}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
