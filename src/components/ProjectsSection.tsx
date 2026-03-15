import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projectDrone from "@/assets/project-drone.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectCodeExplainer from "@/assets/project-code-explainer.jpg";
import projectWeather from "@/assets/project-weather.jpg";
import projectPlaces from "@/assets/project-places.jpg";
import projectTodo from "@/assets/project-todo.jpg";
import projectTictactoe from "@/assets/project-tictactoe.jpg";

const projects = [
  {
    image: projectDrone,
    title: "Drone Management System",
    desc: "Web application for managing drone maintenance and operations.",
    tech: ["React", "Node.js", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    image: projectChatbot,
    title: "AI Chatbot",
    desc: "Chatbot application powered by AI for answering questions.",
    tech: ["JavaScript", "AI APIs"],
    github: "#",
    demo: "#",
  },
  {
    image: projectCodeExplainer,
    title: "AI Code Explainer",
    desc: "Tool that explains programming code automatically.",
    tech: ["JavaScript", "AI"],
    github: "#",
    demo: "#",
  },
  {
    image: projectWeather,
    title: "WeatherPulse Dashboard",
    desc: "Dashboard displaying real-time weather data.",
    tech: ["JavaScript", "APIs"],
    github: "#",
    demo: "#",
  },
  {
    image: projectPlaces,
    title: "Meeting Places Finder",
    desc: "Application for discovering restaurants and meeting locations.",
    tech: ["JavaScript", "Maps API"],
    github: "#",
    demo: "#",
  },
  {
    image: projectTodo,
    title: "To-Do List App",
    desc: "Task management application.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    image: projectTictactoe,
    title: "Tic Tac Toe Game",
    desc: "Desktop game demonstrating programming logic.",
    tech: ["C#", "Desktop App"],
    github: "#",
    demo: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Screenshot */}
              <div className="relative h-44 rounded-t-xl overflow-hidden bg-muted/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border bg-muted/50 text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground transition-colors"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
