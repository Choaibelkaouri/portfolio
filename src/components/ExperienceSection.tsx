import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Freelance Full Stack Developer",
    description: "Building web applications and helping clients develop modern digital solutions.",
    org: "Self-employed",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Software Engineering Student",
    description: "Université Ibn Tofail – Faculté des Sciences, Kenitra.",
    org: "Licence Génie Logiciel",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Award,
    title: "ALX Professional Foundations Program",
    description: "Completed training in professional development skills for the digital industry.",
    org: "ALX Africa",
    color: "from-orange-500 to-red-500",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-6 group hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <exp.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
              <span className="text-xs font-mono text-primary">{exp.org}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
