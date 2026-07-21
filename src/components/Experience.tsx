import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "../data/portfolio-data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative w-full overflow-hidden">
      <div className="ambient-glow w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-cyan/8 top-[30%] left-[-100px]" />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <span className="text-accent-violet text-sm font-semibold uppercase tracking-widest">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A decade of growth from PHP developer to Senior Frontend Architect,
            building enterprise solutions across 4 countries.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="timeline-line" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 sm:mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot - mobile */}
              <div className="md:hidden absolute left-[17px] top-6 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Content card */}
              <div
                className={`flex-1 ml-9 sm:ml-12 md:ml-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}
              >
                <div className="glass rounded-2xl p-4 sm:p-6 card-hover group inline-block text-left w-full">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    {i === 0 && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <Briefcase size={14} className="text-accent-violet flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-accent-violet font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs sm:text-sm text-text-muted"
                      >
                        <MapPin
                          size={14}
                          className="text-accent-cyan mt-0.5 flex-shrink-0"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot - desktop */}
              <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Spacer for alternate layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
