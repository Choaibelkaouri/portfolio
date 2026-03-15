import { motion } from "framer-motion";
import { MapPin, Code2, Target, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Development Philosophy",
    desc: "Clean code, performance-first approach, and user-centered design guide every project I build.",
  },
  {
    icon: Target,
    title: "Career Goals",
    desc: "To work with innovative teams and startups building impactful products that solve real problems.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    desc: "Always exploring new technologies, earning certifications, and refining my craft as a developer.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who is <span className="gradient-text">Choaib El Kaouri</span>?
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin size={16} />
            <span>Kenitra, Morocco</span>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a passionate Full Stack Developer focused on building modern and scalable web
            applications. With expertise spanning frontend and backend technologies, I create
            seamless digital experiences that make an impact. I hold a Licence in Software
            Engineering from Université Ibn Tofail, Kenitra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card p-6"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <card.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
