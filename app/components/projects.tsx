import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { IconGithub, IconExternalLink } from "./icons";
import { projects, type ProjectStatus } from "../data/projects";

const statusConfig: Record<ProjectStatus, { label: string; cls: string }> = {
  live:     { label: "Live",       cls: "text-emerald-400 bg-emerald-400/8 border-emerald-400/22" },
  building: { label: "Building",   cls: "text-amber-400 bg-amber-400/8 border-amber-400/22" },
  concept:  { label: "Concept",    cls: "text-violet-400 bg-violet-400/8 border-violet-400/22" },
};

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Things I've built"
            subtitle="A small but growing collection. More on the way."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const st = statusConfig[project.status];
            return (
              <Reveal key={project.title} delay={i * 75}>
                <div className="card card-interactive rounded-2xl p-6 flex flex-col gap-5 h-full group">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${st.cls}`}>
                      {st.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-white/48 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/30 border border-white/[0.065]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex items-center gap-3 pt-1 border-t border-white/[0.06]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[12px] text-white/35 hover:text-white/80 transition-colors"
                        >
                          <IconGithub size={13} /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[12px] text-white/35 hover:text-white/80 transition-colors"
                        >
                          <IconExternalLink size={12} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
