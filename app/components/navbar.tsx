const navLinks = [
  { label: "Journey",  href: "#journey"  },
  { label: "Timeline", href: "#timeline" },
  { label: "Building", href: "#building" },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap",  href: "#roadmap"  },
  { label: "Contact",  href: "#contact"  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 backdrop-blur-xl border-b border-white/[0.055] bg-[#07070B]/80">
      <a
        href="#hero"
        className="text-[13px] font-mono font-semibold tracking-[0.2em] gradient-text uppercase select-none"
      >
        marc.dev
      </a>

      <nav className="hidden md:flex items-center gap-5">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[13px] text-white/45 hover:text-white/90 transition-colors duration-200 tracking-wide"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium px-4 py-1.5 rounded-full btn-ghost text-white/70 hover:text-white"
      >
        Get in touch
      </a>
    </header>
  );
}
