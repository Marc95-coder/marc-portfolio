import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { IconGithub, IconStar, IconExternalLink } from "./icons";
import { placeholderRepos, placeholderStats, languageColors, GITHUB_USERNAME, type GitHubRepo, type GitHubStats } from "../data/github";

function timeAgo(dateString: string): string {
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1mo ago" : `${months}mo ago`;
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const langColor = repo.language ? (languageColors[repo.language] ?? "#8b8b8b") : null;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-interactive rounded-xl p-5 flex flex-col gap-3 group"
    >
      {/* Repo name */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-mono text-indigo-300/80 group-hover:text-indigo-300 transition-colors truncate">
          {repo.name}
        </span>
        <IconExternalLink size={12} className="text-white/20 group-hover:text-white/50 shrink-0 transition-colors" />
      </div>

      {/* Description */}
      <p className="text-[12px] text-white/42 leading-relaxed flex-1 line-clamp-2">
        {repo.description ?? "No description"}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-[11px] text-white/28 font-mono">
        {langColor && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <IconStar size={11} className="text-amber-400/60" />
            {repo.stargazers_count}
          </span>
        )}
        <span className="ml-auto">{timeAgo(repo.updated_at)}</span>
      </div>
    </a>
  );
}

function StatsBar({ stats }: { stats: GitHubStats }) {
  const items = [
    { label: "Contributions", value: stats.contributions },
    { label: "Public repos",  value: stats.publicRepos  },
    { label: "Followers",     value: stats.followers    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3 mb-10">
      {items.map((item) => (
        <div key={item.label} className="card rounded-xl p-4 text-center">
          <p className="text-xl font-bold gradient-text">{String(item.value)}</p>
          <p className="text-[11px] font-mono text-white/30 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

// Pass `repos` / `stats` props to swap in live GitHub API data (see data/github.ts)
export function GitHub({
  repos  = placeholderRepos,
  stats  = placeholderStats,
}: {
  repos?:  GitHubRepo[];
  stats?:  GitHubStats;
}) {
  return (
    <section id="github" className="py-28 px-6 sm:px-10 section-alt">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <SectionHeader
              eyebrow="GitHub Activity"
              title="GitHub"
              subtitle="Recent repositories and activity."
            />
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] text-white/55 hover:text-white whitespace-nowrap self-start sm:self-auto"
            >
              <IconGithub size={14} /> View profile
            </a>
          </div>
        </Reveal>

        <Reveal>
          <StatsBar stats={stats} />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 60}>
              <RepoCard repo={repo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
