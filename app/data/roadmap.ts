export type RoadmapPhase = "now" | "next" | "later";

export type RoadmapItem = {
  title: string;
  description: string;
  tags: string[];
  phase: RoadmapPhase;
};

export const roadmapItems: RoadmapItem[] = [
  {
    title: "AI Learning Assistant",
    description: "A personal study companion powered by an LLM that adapts content to my current learning goals.",
    tags: ["Python", "LangChain", "OpenAI API"],
    phase: "now",
  },
  {
    title: "Flashcard App v2",
    description: "Add a proper spaced-repetition algorithm (SM-2), import from Anki, and progress analytics.",
    tags: ["React", "TypeScript", "Algorithms"],
    phase: "now",
  },
  {
    title: "Personal Dashboard",
    description: "Aggregates GitHub activity, study goals, notes, and daily tasks in one clean interface.",
    tags: ["Next.js", "APIs", "Widgets"],
    phase: "next",
  },
  {
    title: "Automation Toolkit",
    description: "Reusable scripts and workflows to automate email summaries, reports, and file organization.",
    tags: ["Python", "Playwright", "n8n"],
    phase: "later",
  },
];
