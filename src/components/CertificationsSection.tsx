import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "ALX Professional Foundations",
    org: "ALX",
    year: "2024",
    color: "from-orange-500 to-red-500",
    initial: "ALX",
  },
  {
    title: "ALX Ventures Freelancer Academy",
    org: "ALX",
    year: "2024",
    color: "from-orange-500 to-red-500",
    initial: "ALX",
    subtitle: "4-week program",
  },
  {
    title: "Foundations of Project Management",
    org: "Google",
    year: "2024",
    color: "from-blue-500 to-green-500",
    initial: "G",
    platform: "Coursera",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    org: "IBM",
    year: "2024",
    color: "from-blue-600 to-blue-400",
    initial: "IBM",
    platform: "Coursera",
  },
  {
    title: "Python Programming Certificate",
    org: "Coursera",
    year: "2024",
    color: "from-indigo-500 to-purple-500",
    initial: "C",
    platform: "Coursera",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card p-6 group hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center shrink-0 font-bold text-sm text-white shadow-lg`}>
                  {cert.initial}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.subtitle}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{cert.org}</span>
                  {cert.platform && (
                    <span className="text-xs text-muted-foreground/60">· {cert.platform}</span>
                  )}
                </div>
                <span className="text-xs font-mono text-primary">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-card p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <h4 className="font-medium text-foreground mb-1">Licence Génie Logiciel</h4>
          <p className="text-sm text-muted-foreground mb-1">Développement Frontend et Backend</p>
          <p className="text-sm text-primary font-mono">Université Ibn Tofail – Faculté des Sciences, Kenitra</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
