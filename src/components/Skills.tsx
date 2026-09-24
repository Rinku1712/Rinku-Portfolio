import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import {
  ShoppingBag,
  Clapperboard,
  FileSpreadsheet,
  GitBranch,
  GitFork,
  Wrench,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal, { useInView } from "./Reveal";
import {
  technicalSkills,
  professionalSkills,
  tools,
  radarAxes,
  radarToday,
  radarGoal,
} from "../data";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const options: ChartOptions<"radar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#94a1bd",
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 6,
        padding: 18,
        font: { family: "JetBrains Mono", size: 11 },
      },
    },
    tooltip: {
      backgroundColor: "#111a33",
      borderColor: "#223052",
      borderWidth: 1,
      titleColor: "#e9edf7",
      bodyColor: "#94a1bd",
      padding: 12,
      callbacks: {
        label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.r}/100`,
      },
    },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: { display: false, stepSize: 25 },
      grid: { color: "rgba(148,161,189,0.12)" },
      angleLines: { color: "rgba(148,161,189,0.12)" },
      pointLabels: {
        color: "#94a1bd",
        font: { family: "JetBrains Mono", size: 11 },
      },
    },
  },
};

const data = {
  labels: radarAxes,
  datasets: [
    {
      label: "Today",
      data: radarToday,
      borderColor: "#ffb454",
      backgroundColor: "rgba(255,180,84,0.16)",
      pointBackgroundColor: "#ffb454",
      pointBorderColor: "#0a0f1f",
      pointRadius: 3.5,
      borderWidth: 2,
    },
    {
      label: "2027 goal",
      data: radarGoal,
      borderColor: "#5eead4",
      backgroundColor: "rgba(94,234,212,0.05)",
      borderDash: [5, 5],
      pointBackgroundColor: "#5eead4",
      pointBorderColor: "#0a0f1f",
      pointRadius: 3,
      borderWidth: 1.5,
    },
  ],
};

const toolIcons: Record<string, LucideIcon> = {
  Meesho: ShoppingBag,
  YouTube: Clapperboard,
  MS: FileSpreadsheet,
  Git: GitBranch,
  GitHub: GitFork,
};

function iconFor(name: string): LucideIcon {
  const key = Object.keys(toolIcons).find((k) => name.startsWith(k));
  return key ? toolIcons[key] : Wrench;
}

export default function Skills() {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHead index="02" kicker="capabilities" title="A toolbox that spans code & commerce." />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* technical bars */}
        <Reveal>
          <div ref={ref} className="rounded-lg border border-line bg-panel/50 p-7">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold">
                <span className="h-2 w-2 rounded-full bg-amber" /> Technical skills
              </h3>
              <span className="font-mono text-[11px] text-faint">self-assessed</span>
            </div>
            <div className="space-y-5">
              {technicalSkills.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-mono text-[13px] text-paper">{s.name}</span>
                    <span className="font-mono text-[12px] text-amber">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-line-soft">
                    <div
                      className="bar-fill h-full rounded-full bg-gradient-to-r from-amber/70 to-amber"
                      style={{
                        width: visible ? `${s.level}%` : "0%",
                        transitionDelay: `${i * 110}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* radar */}
        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded-lg border border-line bg-panel/50 p-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold">
                <span className="h-2 w-2 rounded-full bg-mint" /> Competency radar
              </h3>
              <span className="font-mono text-[11px] text-faint">dev × business</span>
            </div>
            <div className="relative min-h-[300px] flex-1">
              <Radar data={data} options={options} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* professional + tools */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h3 className="mb-5 flex items-center gap-2.5 font-display text-lg font-semibold">
            <UserCheck size={18} className="text-amber" /> Professional skills
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {professionalSkills.map((skill, i) => (
              <span
                key={skill}
                className="cursor-default rounded-md border border-line bg-panel/60 px-3.5 py-2 font-mono text-[12.5px] text-muted transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
                style={{ transitionDelay: `${i * 10}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mb-5 flex items-center gap-2.5 font-display text-lg font-semibold">
            <Wrench size={18} className="text-mint" /> Tools & platforms
          </h3>
          <ul className="divide-y divide-line-soft overflow-hidden rounded-lg border border-line bg-panel/50">
            {tools.map((t) => {
              const Icon = iconFor(t.name);
              return (
                <li
                  key={t.name}
                  className="group flex items-center gap-3.5 px-4 py-3 transition-colors hover:bg-panel"
                >
                  <Icon size={16} className="text-faint transition-colors group-hover:text-mint" />
                  <span className="text-[14px] text-paper">{t.name}</span>
                  <span className="ml-auto font-mono text-[11px] text-faint">{t.tag}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
