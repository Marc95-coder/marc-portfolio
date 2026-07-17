import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

type YearEntry  = { kind: "year";  label: string };
type EventEntry = { kind: "event"; title: string; note?: string; highlight?: boolean };
type TimelineEntry = YearEntry | EventEntry;

const entries: TimelineEntry[] = [
  { kind: "year",  label: "2025" },
  { kind: "event", title: "Python & scripting",          note: "First real steps into programming" },
  { kind: "event", title: "HTML, CSS, JavaScript" },
  { kind: "event", title: "React & component thinking" },
  { kind: "year",  label: "2026" },
  { kind: "event", title: "Next.js & TypeScript" },
  { kind: "event", title: "Building first real projects", note: "Tutorials weren't enough anymore" },
  { kind: "event", title: "This Website",                 note: "You're looking at it", highlight: true },
  { kind: "event", title: "Flashcard Learning Platform",  note: "In progress" },
  { kind: "event", title: "… more building",              note: "Always something in progress" },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-28 px-6 sm:px-10">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Timeline"
            title="Learning log"
            subtitle="What I've picked up and when — rough and honest."
          />
        </Reveal>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-indigo-500/20" />

          {entries.map((entry, i) => {
            if (entry.kind === "year") {
              return (
                <Reveal key={i} delay={Math.min(i * 35, 320)}>
                  <div className={`relative ${i > 0 ? "mt-8" : ""} mb-4`}>
                    {/* Year dot: 15px wide, left:0 → center at 7.5px ≈ line at 7px */}
                    <div
                      className="absolute top-0.5 w-[15px] h-[15px] rounded-full border-2 border-indigo-500/55 bg-[#07070B] z-10"
                      style={{ left: "0px" }}
                    />
                    <div className="pl-10">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-indigo-400/65 uppercase">
                        {entry.label}
                      </span>
                      <div className="mt-1.5 h-px w-16 bg-gradient-to-r from-indigo-500/25 to-transparent" />
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={i} delay={Math.min(i * 35, 320)}>
                <div className="relative mb-4">
                  {/* Event dot: 9px wide, left:3px → center at 7.5px ≈ line at 7px */}
                  <div
                    className="absolute top-[7px] w-[9px] h-[9px] rounded-full bg-indigo-400/35 z-10"
                    style={{ left: "3px" }}
                  />
                  <div className="pl-10">
                    <p
                      className={`text-[14px] leading-snug ${
                        entry.highlight
                          ? "text-white font-medium"
                          : "text-white/58"
                      }`}
                    >
                      {entry.title}
                    </p>
                    {entry.note && (
                      <p className="text-[11px] text-white/28 mt-0.5 font-mono">
                        {entry.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
