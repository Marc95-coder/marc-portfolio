import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { IconMail, IconGithub, IconLinkedin, IconDownload } from "./icons";

const links = [
  {
    icon: <IconMail size={20} />,
    label: "Email",
    value: "luescher-marc@gmx.ch",
    href: "mailto:luescher-marc@gmx.ch",
    accentClass: "text-sky-400",
  },
  {
    icon: <IconGithub size={20} />,
    label: "GitHub",
    value: "github.com/Marc95-coder",
    href: "https://github.com/Marc95-coder",
    accentClass: "text-indigo-400",
  },
  {
    icon: <IconLinkedin size={20} />,
    label: "LinkedIn",
    value: "Marc Lüscher",
    href: "https://www.linkedin.com/in/marc-l%C3%BCscher-906183220/",
    accentClass: "text-blue-400",
  },
  {
    icon: <IconDownload size={20} />,
    label: "Curriculum Vitae",
    value: "Download PDF",
    href: "/cv.pdf",
    accentClass: "text-violet-400",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 sm:px-10 section-alt">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's connect"
            subtitle="I'm open to junior roles, internships, and freelance projects. Reach out any time."
            centered
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 70}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card card-interactive flex items-center gap-4 p-5 rounded-xl text-left group"
              >
                <span className={`${l.accentClass} shrink-0`}>{l.icon}</span>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-0.5">
                    {l.label}
                  </div>
                  <div className="text-[13px] text-white/60 group-hover:text-white/90 transition-colors truncate">
                    {l.value}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
