import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Zap, Globe, Timer, Eye } from "lucide-react";
import { projects } from "../data/portfolio-data";

function PerformanceWidget() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const webVitals = [
    { label: "FCP", value: "0.8s", icon: Timer, color: "text-green-400" },
    { label: "LCP", value: "1.2s", icon: Eye, color: "text-green-400" },
    { label: "CLS", value: "0.01", icon: Globe, color: "text-green-400" },
    { label: "TBT", value: "50ms", icon: Zap, color: "text-green-400" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass rounded-2xl p-6 card-hover col-span-1 md:col-span-1 row-span-1 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-accent-cyan/5 pointer-events-none" />

      <div className="relative z-10 text-center">
        {/* Lighthouse Score Circle */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="rgba(30,41,59,0.8)"
              strokeWidth="8"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 327" }}
              animate={
                inView
                  ? { strokeDasharray: "327 327" }
                  : { strokeDasharray: "0 327" }
              }
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#00f2fe" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-3xl font-bold text-green-400"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              100
            </motion.span>
          </div>
        </div>

        <p className="text-sm font-semibold text-text-primary mb-1">
          Lighthouse Score
        </p>
        <p className="text-xs text-text-muted mb-4">Web Performance Metrics</p>

        {/* Vitals */}
        <div className="grid grid-cols-2 gap-2">
          {webVitals.map((vital) => (
            <div
              key={vital.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5"
            >
              <vital.icon size={12} className={vital.color} />
              <span className="text-xs text-text-secondary">{vital.label}</span>
              <span className={`text-xs font-semibold ${vital.color} ml-auto`}>
                {vital.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative w-full overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-accent-cyan text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Enterprise-grade applications built for clients across Australia,
            Belgium, and Sri Lanka.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Featured Projects (larger cards) */}
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`glass rounded-2xl p-6 card-hover group relative overflow-hidden ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-violet/0 group-hover:from-accent-cyan/5 group-hover:to-accent-violet/5 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full">
                      {project.company}
                    </span>
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-text-muted group-hover:text-accent-cyan transition-colors"
                  />
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  <span className="text-accent-violet font-medium">Client:</span>{" "}
                  {project.client}
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-text-secondary">
                    <span className="text-text-muted font-medium">Problem:</span>{" "}
                    {project.problem}
                  </p>
                  <p className="text-sm text-text-secondary">
                    <span className="text-green-400 font-medium">Solution:</span>{" "}
                    {project.solution}
                  </p>
                  <p className="text-sm text-text-secondary">
                    <span className="text-accent-cyan font-medium">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-muted border border-border hover:border-accent-cyan/30 hover:text-accent-cyan transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Performance Widget */}
          <PerformanceWidget />

          {/* Remaining Projects */}
          {projects.slice(3).map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-violet/0 group-hover:from-accent-cyan/5 group-hover:to-accent-violet/5 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-accent-violet bg-accent-violet/10 px-3 py-1 rounded-full">
                    {project.company}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-text-muted group-hover:text-accent-cyan transition-colors"
                  />
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {project.solution}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-text-muted">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
