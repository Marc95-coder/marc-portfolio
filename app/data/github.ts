// ── GitHub API Integration ────────────────────────────────────────────────────
//
// To replace placeholder data with live repos:
//
//   Option A — Server Component (recommended for Next.js App Router):
//     In app/components/github.tsx, change to an async server component and fetch:
//
//       const res = await fetch(
//         `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
//         {
//           headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
//           next: { revalidate: 3600 }, // ISR: refresh every hour
//         }
//       );
//       const repos: GitHubRepo[] = await res.json();
//
//   Option B — API Route:
//     Create app/api/github/route.ts that fetches and returns repos as JSON.
//     Call it from the client component with SWR or React Query.
//
//   Set GITHUB_TOKEN in .env.local for higher rate limits (optional).
// ─────────────────────────────────────────────────────────────────────────────

export const GITHUB_USERNAME = "Marc95-coder";

// ── Activity stats ────────────────────────────────────────────────────────────
// Fetch from: https://api.github.com/users/GITHUB_USERNAME (contributions need
// the GraphQL API or a third-party service like github-readme-stats).
// Replace placeholderStats.contributions with live data when available.
// ─────────────────────────────────────────────────────────────────────────────

export type GitHubStats = {
  contributions: number | string;
  publicRepos: number | string;
  followers: number | string;
};

export const placeholderStats: GitHubStats = {
  contributions: "—",
  publicRepos: "—",
  followers: "—",
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
};

export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
};

export const placeholderRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "marc-portfolio",
    description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    html_url: `https://github.com/${GITHUB_USERNAME}/marc-portfolio`,
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-06-01T00:00:00Z",
    topics: ["nextjs", "tailwindcss", "portfolio"],
  },
  {
    id: 2,
    name: "flashcard-app",
    description: "Spaced-repetition flashcard app for effective studying.",
    html_url: `https://github.com/${GITHUB_USERNAME}/flashcard-app`,
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-05-15T00:00:00Z",
    topics: ["react", "nextjs", "learning"],
  },
  {
    id: 3,
    name: "llm-engineering-lab",
    description: "Experiments with LLMs — prompt engineering, RAG, and tool use.",
    html_url: `https://github.com/${GITHUB_USERNAME}/llm-engineering-lab`,
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-04-20T00:00:00Z",
    topics: ["python", "llm", "openai", "langchain"],
  },
  {
    id: 4,
    name: "cli-toolkit",
    description: "Personal collection of CLI scripts for automating everyday tasks.",
    html_url: `https://github.com/${GITHUB_USERNAME}/cli-toolkit`,
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-03-10T00:00:00Z",
    topics: ["python", "automation", "cli"],
  },
];
