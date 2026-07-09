export type SkillPhase = "foundation" | "tools" | "learning" | "interests";
export type SkillAccent = "indigo" | "blue" | "violet" | "sky";

export type SkillGroup = {
  category: string;
  phase: SkillPhase;
  accent: SkillAccent;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Core Programming",
    phase: "foundation",
    accent: "indigo",
    skills: ["Java", "Python", "JavaScript", "HTML & CSS"],
  },
  {
    category: "AI-Assisted Development",
    phase: "tools",
    accent: "blue",
    skills: ["Cursor", "Claude", "ChatGPT", "Prompt Engineering", "API Integration"],
  },
  {
    category: "Currently Learning",
    phase: "learning",
    accent: "violet",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git & GitHub"],
  },
  {
    category: "Interests",
    phase: "interests",
    accent: "sky",
    skills: ["Artificial Intelligence", "LLM Engineering", "Automation", "Modern Web Development"],
  },
];
