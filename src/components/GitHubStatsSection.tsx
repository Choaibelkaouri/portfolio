import { motion } from "framer-motion";
import { Github, GitCommit, FolderGit2, Star, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubData {
  totalRepos: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  loading: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Dart: "#00B4AB",
};

const GitHubStatsSection = () => {
  const [data, setData] = useState<GitHubData>({
    totalRepos: 0,
    totalStars: 0,
    topLanguages: [],
    loading: true,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/Choaibelkaouri");
        const userData = await userRes.json();

        const reposRes = await fetch(
          "https://api.github.com/users/Choaibelkaouri/repos?per_page=100&sort=updated"
        );
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos)
          ? repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
          : 0;

        // Aggregate languages
        const langCount: Record<string, number> = {};
        if (Array.isArray(repos)) {
          repos.forEach((repo: any) => {
            if (repo.language) {
              langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
          });
        }

        const totalLangs = Object.values(langCount).reduce((a, b) => a + b, 0);
        const topLanguages = Object.entries(langCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100),
            color: LANGUAGE_COLORS[name] || "#8b8b8b",
          }));

        setData({
          totalRepos: userData.public_repos || 0,
          totalStars,
          topLanguages,
          loading: false,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        setData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    { icon: FolderGit2, label: "Repositories", value: data.totalRepos },
    { icon: Star, label: "Total Stars", value: data.totalStars },
  ];

  return (
    <section id="github" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">
            Open Source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-6 text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon
                size={28}
                className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform"
              />
              <p className="text-3xl font-bold text-foreground mb-1">
                {data.loading ? "—" : stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glow-card p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitCommit size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Contribution Graph</h3>
          </div>
          <div className="overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/3b82f6/Choaibelkaouri"
              alt="GitHub Contribution Graph"
              className="w-full min-w-[700px] rounded-lg opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glow-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Technical Skills</h3>
          </div>
          <div className="space-y-4">
            {[
              { name: "JavaScript", percentage: 90, color: "#f1e05a" },
              { name: "Python", percentage: 75, color: "#3572A5" },
              { name: "React", percentage: 85, color: "#61dafb" },
              { name: "Node.js", percentage: 80, color: "#68a063" },
              { name: "MySQL", percentage: 70, color: "#00758f" },
              { name: "Django", percentage: 65, color: "#092e20" },
              { name: "Docker", percentage: 60, color: "#2496ed" },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View Profile Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/Choaibelkaouri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/50 text-foreground hover:border-primary hover:text-primary transition-colors font-medium"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
