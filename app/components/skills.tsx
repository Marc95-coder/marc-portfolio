import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { skillGroups, type SkillAccent, type SkillPhase } from "../data/skills";

const accentTop: Record<SkillAccent, string> = {
  indigo: "skill-card-indigo",
  blue:   "skill-card-blue",
  violet: "skill-card-violet",
  sky:    "skill-card-sky",
};

const accentText: Record<SkillAccent, string> = {
  indigo: "text-indigo-400/80",
  blue:   "text-blue-400/80",
  violet: "text-violet-400/80",
  sky:    "text-sky-400/80",
};

const phaseLabel: Record<SkillPhase, string> = {
  foundation: "University & Projects",
  tools:      "Active Workflow",
  learning:   "In Progress",
  interests:  "Exploring",
};

const phaseBadge: Record<SkillPhase, string> = {
  foundation: "text-indigo-300/70 bg-indigo-500/8 border-indigo-500/20",
  tools:      "text-blue-300/70 bg-blue-500/8 border-blue-500/20",
  learning:   "text-violet-300/70 bg-violet-500/8 border-violet-500/20",
  interests:  "text-sky-300/70 bg-sky-500/8 border-sky-500/20",
};

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 sm:px-10 section-alt">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Skills & Tools"
            title="Where I am technically"
            subtitle="Honest breakdown of what I've learned through university and projects — and what I'm still figuring out."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className={`card ${accentTop[group.accent]} rounded-2xl p-6 h-full`}>
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className={`text-[13px] font-mono font-semibold tracking-wide uppercase ${accentText[group.accent]}`}>
                    {group.category}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${phaseBadge[group.phase]}`}>
                    {phaseLabel[group.phase]}
                  </span>
                </div>

                {/* Skills list */}
                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-[13px] text-white/60">
                      <span
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${accentText[group.accent]}`}
                        style={{ background: "currentColor", opacity: 0.7 }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
