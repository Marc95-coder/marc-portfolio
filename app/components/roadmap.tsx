import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { roadmapItems, type RoadmapPhase } from "../data/roadmap";

const phases: { id: RoadmapPhase; label: string; subtitle: string; headerClass: string; dotClass: string }[] = [
  {
    id: "now",
    label: "Now",
    subtitle: "In active development",
    headerClass: "roadmap-now",
    dotClass: "bg-emerald-400",
  },
  {
    id: "next",
    label: "Next",
    subtitle: "Planned for coming months",
    headerClass: "roadmap-next",
    dotClass: "bg-amber-400",
  },
  {
    id: "later",
    label: "Later",
    subtitle: "On the horizon",
    headerClass: "roadmap-later",
    dotClass: "bg-slate-400",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Roadmap"
            title="What's coming"
            subtitle="Concrete plans, not wishlists. Ordered by priority."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, pi) => {
            const items = roadmapItems.filter((item) => item.phase === phase.id);
            return (
              <Reveal key={phase.id} delay={pi * 90}>
                <div className="flex flex-col gap-4">
                  {/* Column header */}
                  <div className={`card ${phase.headerClass} rounded-xl px-5 py-4`}>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`w-2 h-2 rounded-full ${phase.dotClass}`} />
                      <span className="text-[13px] font-semibold text-white/85">{phase.label}</span>
                      <span className="ml-auto text-[11px] font-mono text-white/28">{items.length}</span>
                    </div>
                    <p className="text-[11px] text-white/32 font-mono ml-4">{phase.subtitle}</p>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <div key={item.title} className="card card-interactive rounded-xl p-4 flex flex-col gap-2.5">
                        <p className="text-[13px] font-semibold text-white/80">{item.title}</p>
                        <p className="text-[12px] text-white/40 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-white/28 border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    {items.length === 0 && (
                      <div className="card rounded-xl p-4 text-center">
                        <p className="text-[12px] text-white/22 font-mono">— more soon —</p>
                      </div>
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
