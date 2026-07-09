import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

type YearEntry  = { kind: "year";  label: string };
type EventEntry = { kind: "event"; title: string; note?: string; highlight?: boolean };
type TimelineEntry = YearEntry | EventEntry;

const entries: TimelineEntry[] = [
  { kind: "year",  label: "2024" },
  { kind: "event", title: "Python & scripting",           note: "First real steps into programming" },
  { kind: "event", title: "HTML, CSS, JavaScript" },
  { kind: "event", title: "React & component thinking" },
  { kind: "event", title: "Next.js & TypeScript" },
  { kind: "event", title: "Building first real projects",  note: "Tutorials weren't enough anymore" },
  { kind: "year",  label: "2025" },
  { kind: "event", title: "This Website",                  note: "You're looking at it", highlight: true },
  { kind: "event", title: "Flashcard Learning Platform",   note: "In progress" },
  { kind: "event", title: "AI Playground",                 note: "Experimenting with LLMs" },
  { kind: "event", title: "… more building",               note: "Always something in progress" },
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

        <div className="mt-12 border-l border-indigo-500/20 pl-6 ml-[7px]">
          {entries.map((entry, i) => {
            if (entry.kind === "year") {
              return (
                <Reveal key={i} delay={Math.min(i * 35, 320)}>
                  <div className={`relative ${i > 0 ? "mt-8" : ""} mb-4`}>
                    {/* Year dot — centered on the border */}
                    <div
                      className="absolute top-1 w-[15px] h-[15px] rounded-full border-2 border-indigo-500/55 bg-[#07070B] z-10"
                      style={{ left: "-6.5px" }}
                    />
                    <div className="pl-1">
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
                  {/* Event dot — centered on the border */}
                  <div
                    className="absolute top-[7px] w-[9px] h-[9px] rounded-full bg-indigo-400/35 z-10"
                    style={{ left: "-4.5px" }}
                  />
                  <div className="pl-1">
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
