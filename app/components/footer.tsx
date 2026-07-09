export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6 text-center">
      <p className="text-[12px] text-white/40 mb-2">
        Built by me with Next.js, Cursor, Claude and ChatGPT — learning by building.
      </p>
      <p className="text-[11px] font-mono text-white/18 tracking-wide">
        &copy; {new Date().getFullYear()} Marc Lüscher
      </p>
    </footer>
  );
}
