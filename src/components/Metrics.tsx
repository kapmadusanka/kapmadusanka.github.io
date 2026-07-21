import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { metrics } from "../data/portfolio-data";
import { TrendingUp, Clock, Gauge, FolderGit2 } from "lucide-react";

const metricIcons = [TrendingUp, Clock, Gauge, FolderGit2];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  useEffect(() => {
    const unsub = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [display]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text-cyan">
      0{suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full overflow-hidden">
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
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Proven <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Numbers that reflect consistency, quality, and a commitment to
            delivering exceptional results.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {metrics.map((metric, i) => {
            const Icon = metricIcons[i];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 card-hover text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-border flex items-center justify-center group-hover:border-accent-cyan/30 group-hover:glow-cyan transition-all">
                  <Icon
                    size={22}
                    className="text-accent-cyan"
                  />
                </div>

                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  inView={inView}
                />

                <p className="text-sm font-semibold text-text-primary mt-3 mb-1">
                  {metric.label}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
