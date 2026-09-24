import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { projects, profile } from "../data";

function StoreMock() {
  return (
    <div className="flex h-full gap-3 px-4 py-4">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex-1 overflow-hidden rounded-md border border-line-soft bg-ink/60">
          <div
            className="h-12 w-full"
            style={{
              background: `linear-gradient(135deg, rgba(255,180,84,${0.35 - i * 0.08}), rgba(255,180,84,0.08))`,
            }}
          />
          <div className="space-y-1.5 p-2.5">
            <div className="h-1.5 w-4/5 rounded bg-line" />
            <div className="h-1.5 w-3/5 rounded bg-line-soft" />
            <div className="flex items-center justify-between pt-1">
              <div className="h-2 w-8 rounded bg-amber/70" />
              <div className="h-3 w-3 rounded-full border border-amber/50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LibraryMock() {
  const rows = [
    { name: "Data Structures", status: "Issued", color: "text-amber border-amber/40" },
    { name: "Clean Code", status: "On shelf", color: "text-mint border-mint/40" },
    { name: "AI Modern Approach", status: "Due", color: "text-sky border-sky/40" },
  ];
  return (
    <div className="flex h-full gap-3 px-4 py-4">
      <div className="hidden w-16 shrink-0 flex-col gap-2 rounded-md border border-line-soft bg-ink/60 p-2 sm:flex">
        <div className="h-1.5 w-full rounded bg-mint/50" />
        <div className="h-1.5 w-4/5 rounded bg-line" />
        <div className="h-1.5 w-full rounded bg-line" />
        <div className="h-1.5 w-3/5 rounded bg-line" />
      </div>
      <div className="flex-1 overflow-hidden rounded-md border border-line-soft bg-ink/60">
        <div className="flex items-center gap-2 border-b border-line-soft px-3 py-2">
          <div className="h-1.5 w-16 rounded bg-line" />
          <div className="ml-auto h-1.5 w-8 rounded bg-mint/50" />
        </div>
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2 px-3 py-[7px]">
            <div className="h-1.5 w-24 rounded bg-line" />
            <span className={`ml-auto rounded-full border px-2 py-px font-mono text-[9px] ${r.color}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHead index="03" kicker="selected work" title="Things I've actually built." />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 140}>
            <article className="lift group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel/50">
              {/* mock preview */}
              <div className="relative border-b border-line-soft bg-panel-2">
                <div className="flex items-center gap-1.5 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                  <span className="ml-3 flex-1 truncate rounded bg-ink/70 px-3 py-1 font-mono text-[10.5px] text-faint">
                    {p.accent === "amber"
                      ? "localhost:3000/store"
                      : "localhost:3000/library/admin"}
                  </span>
                </div>
                <div className="h-36">
                  {p.accent === "amber" ? <StoreMock /> : <LibraryMock />}
                </div>
                <span
                  className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10.5px] backdrop-blur ${
                    p.accent === "amber"
                      ? "border-amber/40 bg-amber/10 text-amber"
                      : "border-mint/40 bg-mint/10 text-mint"
                  }`}
                >
                  {p.kind}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-semibold text-paper">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-[12.5px] text-faint">{p.subtitle}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-line-soft bg-ink/50 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[14px] leading-relaxed text-muted">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${p.accent === "amber" ? "text-amber" : "text-mint"}`}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={`mailto:${profile.email}?subject=About your project: ${encodeURIComponent(p.title)}`}
                    className={`inline-flex items-center gap-2 font-mono text-[13px] transition-all ${
                      p.accent === "amber"
                        ? "text-amber hover:gap-3"
                        : "text-mint hover:gap-3"
                    }`}
                  >
                    Discuss this project <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
