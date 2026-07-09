export type BuildStatus = "active" | "building" | "research";

export type CurrentBuild = {
  title: string;
  description: string;
  status: BuildStatus;
  tags: string[];
  startedAt: string;
};

export const currentBuilds: CurrentBuild[] = [
  {
    title: "This Website",
    status: "active",
    description:
      "Building this site as a hands-on learning project — developed with Cursor, Claude and ChatGPT. Learning how modern developers actually work, not just how it's described in tutorials.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    startedAt: "Jun 2025",
  },
  {
    title: "Flashcard Learning Platform",
    status: "building",
    description:
      "Spaced-repetition study app with custom decks and review interface. Goal: build and ship a full-stack app from idea to production.",
    tags: ["Next.js", "React", "Local Storage"],
    startedAt: "May 2025",
  },
  {
    title: "AI Playground",
    status: "research",
    description:
      "Systematic experiments with LLMs — prompt engineering, RAG patterns, and tool use. Understanding AI engineering from the inside.",
    tags: ["Python", "OpenAI API", "LangChain"],
    startedAt: "Apr 2025",
  },
];
