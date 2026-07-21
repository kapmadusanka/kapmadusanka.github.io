import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "../data/portfolio-data";
import {
  Code2,
  Palette,
  Layers,
  Server,
  Cloud,
  Wrench,
} from "lucide-react";

const categoryIcons: Record<string, typeof Code2> = {
  "Frontend Core": Code2,
  "Styling & UI": Palette,
  "State & Architecture": Layers,
  "Backend & APIs": Server,
  "Cloud & Auth": Cloud,
  "Tools & DevOps": Wrench,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative w-full overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow w-[400px] h-[400px] bg-accent-violet/10 top-[20%] right-[-100px]" />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-accent-violet text-sm font-semibold uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tech Stack &{" "}
            <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Battle-tested technologies refined over 9+ years of building
            production systems for enterprise clients.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {techStack.map((category) => {
            const Icon = categoryIcons[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                variants={cardVariants}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-border flex items-center justify-center group-hover:border-accent-cyan/30 transition-colors">
                    <Icon
                      size={20}
                      className="text-accent-cyan group-hover:text-accent-cyan transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-text-muted font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={
                            inView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
