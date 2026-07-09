const statusItems = [
  {
    icon: "🎓",
    label: "Status",
    value: "Computer Science student, Uni Bern — 3rd semester from Sep 2025",
  },
  {
    icon: "🚀",
    label: "Building",
    value: "This portfolio & a Flashcard Learning Platform",
  },
  {
    icon: "🤖",
    label: "Tooling",
    value: "Cursor, Claude & ChatGPT — daily drivers",
  },
  {
    icon: "☕",
    label: "Fun fact",
    value: "This site was built with AI tools. No apologies.",
  },
];

export function Status() {
  return (
    <section className="border-y border-white/[0.055] py-6 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {statusItems.map((item) => (
            <div
              key={item.label}
              className="card rounded-xl px-4 py-4 flex flex-col gap-2"
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <p className="text-[10px] font-mono text-white/28 uppercase tracking-[0.2em]">
                {item.label}
              </p>
              <p className="text-[13px] text-white/65 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
