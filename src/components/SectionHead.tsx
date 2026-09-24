import Reveal from "./Reveal";

export default function SectionHead({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 flex items-center gap-3 font-mono text-[13px] text-amber">
        <span className="text-faint">{index}</span>
        <span className="h-px w-8 bg-amber/50" />
        {kicker}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <div className="rule mt-6 max-w-4xl" />
    </Reveal>
  );
}
