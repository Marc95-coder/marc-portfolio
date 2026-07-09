export type ProjectStatus = "live" | "building" | "concept";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "This Website",
    description:
      "My portfolio — designed and built from scratch. No template. Treated it as a real product: iterated on layout, content, and performance.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    githubUrl: "https://github.com/Marc95-coder/marc-portfolio",
    liveUrl: "#",
  },
  {
    title: "Flashcard Learning Platform",
    description:
      "Spaced-repetition study app with custom decks and a clean review interface. My main full-stack project — learning by building, not by watching.",
    tags: ["Next.js", "TypeScript", "React"],
    status: "building",
    githubUrl: "https://github.com/Marc95-coder/flashcard-app",
  },
  {
    title: "AI Playground",
    description:
      "A repository of LLM experiments — prompt engineering, RAG pipelines, tool use. Where I figure out what's actually possible vs. just hyped.",
    tags: ["Python", "OpenAI API", "LangChain"],
    status: "building",
    githubUrl: "https://github.com/Marc95-coder/ai-playground",
  },
  {
    title: "CLI Automation Toolkit",
    description:
      "Personal scripts for automating repetitive terminal tasks. Small, practical, and always growing. My version of a personal toolbox.",
    tags: ["Python", "Shell", "Git"],
    status: "concept",
  },
];
