import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    skills: ["React", "Vue", "Angular", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-purple-500 to-pink-500",
    skills: ["Node.js", "Django", "Spring Boot"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-emerald-500 to-teal-400",
    skills: ["MySQL", "MongoDB", "SQL Server"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-orange-500 to-yellow-400",
    skills: ["Git", "Docker", "CI/CD"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <cat.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.05 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 16px hsl(217 91% 60% / 0.35)" }}
                    className="px-4 py-2 text-sm font-mono rounded-lg bg-muted border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
