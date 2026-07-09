import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { currentBuilds, type BuildStatus } from "../data/currently-building";

const statusConfig: Record<BuildStatus, { label: string; dotClass: string; badgeClass: string }> = {
  active:   { label: "Active",    dotClass: "pulse-dot pulse-green",  badgeClass: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20" },
  building: { label: "Building",  dotClass: "pulse-dot pulse-amber",  badgeClass: "text-amber-400 bg-amber-400/8 border-amber-400/20" },
  research: { label: "Research",  dotClass: "pulse-dot pulse-violet", badgeClass: "text-violet-400 bg-violet-400/8 border-violet-400/20" },
};

export function CurrentlyBuilding() {
  return (
    <section id="building" className="py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Currently Building"
            title="What I'm working on"
            subtitle="Active projects right now — not finished things, but real work in progress."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentBuilds.map((build, i) => {
            const st = statusConfig[build.status];
            return (
              <Reveal key={build.title} delay={i * 80}>
                <div className="card card-interactive rounded-2xl p-6 h-full flex flex-col gap-5">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-white leading-snug">
                      {build.title}
                    </h3>
                    <span className={`shrink-0 inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border ${st.badgeClass}`}>
                      <span className={st.dotClass} />
                      {st.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-white/48 leading-relaxed flex-1">
                    {build.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {build.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/30 border border-white/[0.065]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-white/22 whitespace-nowrap ml-2">
                      {build.startedAt}
                    </span>
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
