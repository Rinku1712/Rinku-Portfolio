import { tickerItems } from "../data";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {tickerItems.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 pr-6 font-mono text-[13px] tracking-wide text-muted"
        >
          {item}
          <svg width="9" height="9" viewBox="0 0 10 10" className="text-amber/70">
            <path d="M5 0L6.4 3.6L10 5L6.4 6.4L5 10L3.6 6.4L0 5L3.6 3.6Z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="marquee overflow-hidden border-y border-line-soft bg-panel-2/60 py-4">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
