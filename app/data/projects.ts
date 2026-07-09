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
      "My personal portfolio — built by me using Next.js, TypeScript and Tailwind CSS, with Cursor, Claude and ChatGPT as daily tools. Part of my learning process: treating it like a real product and iterating as I go.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cursor", "Claude"],
    status: "live",
    githubUrl: "https://github.com/Marc95-coder/marc-portfolio",
    liveUrl: "https://marc-portfolio-opal.vercel.app/",
  },
  {
    title: "Flashcard Learning Platform",
    description:
      "My biggest learning project so far — a spaced-repetition study app with custom decks and a review interface. Still actively being worked on. Going from idea to shipped product is the whole point.",
    tags: ["Next.js", "TypeScript", "React"],
    status: "building",
    // TODO: replace with real URL once the repo is published
    githubUrl: undefined,
  },
  {
    title: "AI Playground",
    description:
      "A collection of experiments with LLMs — not a finished product. Covers prompt engineering, API usage, and small prototypes. Learning what actually works by testing it, not reading about it.",
    tags: ["Python", "OpenAI API", "LangChain"],
    status: "building",
    githubUrl: "https://github.com/Marc95-coder/ai-playground",
  },
  {
    title: "CLI Automation Toolkit",
    description:
      "A planned project — not started yet. The idea: a set of personal command-line tools to automate repetitive tasks. Currently just a concept and a few notes.",
    tags: ["Python", "Shell", "Git"],
    status: "concept",
  },
];
