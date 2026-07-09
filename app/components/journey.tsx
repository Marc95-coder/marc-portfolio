import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

const values = [
  {
    label: "Projects over tutorials",
    desc: "Real projects teach things that lectures and tutorials simply can't.",
  },
  {
    label: "AI as a real tool",
    desc: "Cursor, Claude, ChatGPT — tools I use daily and don't apologise for. They speed up learning, not replace it.",
  },
  {
    label: "Honest about my level",
    desc: "I'm a student, early in my journey. I know what I know and I'm clear about what I'm still learning.",
  },
  {
    label: "Always something building",
    desc: "There's always a project in progress, even when it's messy and unfinished.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-28 px-6 sm:px-10 section-alt">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Developer Journey"
            title="How I got here"
            subtitle="The honest version."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Main text ──────────────────────────────── */}
          <div className="lg:col-span-3 space-y-5">
            <Reveal delay={80}>
              <p className="text-[15px] text-white/60 leading-[1.85]">
                I&apos;m 31 and studying Computer Science at the University of Bern —
                starting my 3rd semester in September. Going back into education as an
                adult was a deliberate decision. I wanted a proper foundation, not just
                self-taught gaps. I&apos;m genuinely enjoying it.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[15px] text-white/60 leading-[1.85]">
                Early on I fell into the tutorial trap — watching videos without building
                anything real. The shift happened when I started working on actual projects
                with actual goals. Getting stuck on something you built yourself, figuring
                it out at midnight — that&apos;s where the real learning happens.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-[15px] text-white/60 leading-[1.85]">
                I actively use AI tools like Cursor, Claude and ChatGPT in my development
                process — and I&apos;m not apologetic about it. This portfolio was built with
                their help. I see these tools the way a carpenter sees power tools: they
                don&apos;t replace understanding, they amplify it. The goal is always to
                understand what&apos;s happening, not just to make it work.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-[15px] text-white/55 leading-[1.85]">
                Right now I&apos;m learning React, Next.js and TypeScript through real projects.
                I don&apos;t know everything yet — that&apos;s the honest truth. But I&apos;m
                motivated, I learn fast, and there&apos;s always something in progress.
              </p>
            </Reveal>
          </div>

          {/* ── Values cards ───────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={i * 70}>
                <div className="card rounded-xl p-4 card-interactive">
                  <p className="text-[13px] font-semibold text-white/85 mb-1">{v.label}</p>
                  <p className="text-[12px] text-white/38 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
