import { IconArrow, IconDownload, IconGithub, IconChevronDown } from "./icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 sm:px-10 grid-bg overflow-hidden"
    >
      {/* Ambient light blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/[0.07] blur-[120px] pointer-events-none animate-ambient" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/[0.06] blur-[100px] pointer-events-none animate-ambient-slow" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left: text ───────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <p className="h-badge inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-emerald-400/80 uppercase mb-8 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot pulse-green" />
              Available for opportunities
            </p>

            <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-bold tracking-tight leading-[1.06] mb-8">
              <span className="h-line1 block text-white">
                Building software.
              </span>
              <span className="h-line2 block gradient-text">
                Learning every day.
              </span>
              <span className="h-line3 block text-white/75">
                Shipping real things.
              </span>
            </h1>

            <p className="h-sub text-[15px] sm:text-base text-white/45 max-w-[460px] leading-relaxed mb-10">
              I&apos;m Marc — Computer Science student at the University of Bern, learning modern web development and AI tools through real projects.
            </p>

            <div className="h-btns flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white"
              >
                View Projects <IconArrow size={14} />
              </a>
              <a
                href="/cv.pdf"
                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white/75"
              >
                <IconDownload size={14} /> Download CV
              </a>
              <a
                href="https://github.com/Marc95-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white/75"
              >
                <IconGithub size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* ── Right: portrait ──────────────────────────── */}
          <div className="h-portrait shrink-0">
            <div className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[390px] rounded-3xl border animate-border-glow overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait.JPG"
                alt="Marc Lüscher"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay at bottom for depth */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#journey"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/50 transition-colors animate-scroll"
        aria-label="Scroll down"
      >
        <IconChevronDown size={24} />
      </a>
    </section>
  );
}
