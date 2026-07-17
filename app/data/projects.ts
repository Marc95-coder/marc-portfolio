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
      "My personal portfolio website — built by me with Next.js, TypeScript and Tailwind CSS. I use modern AI development tools like Cursor, Claude and ChatGPT as support while building. The project documents my learning progress and is continuously being improved.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    githubUrl: "https://github.com/Marc95-coder/marc-portfolio",
    liveUrl: "https://marc-portfolio-opal.vercel.app/",
  },
  {
    title: "Flashcard Learning Platform",
    description:
      "My biggest personal software project so far. A learning platform with spaced repetition, custom card decks and a modern interface. I am actively developing this project and will publish it on GitHub later.",
    tags: ["Next.js", "TypeScript", "React"],
    status: "building",
  },
];
