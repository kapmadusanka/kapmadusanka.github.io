import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";
import BackgroundPaths from "./BackgroundPaths";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Animated Path Background */}
      <BackgroundPaths />

      {/* Animated ambient background orbs */}
      <motion.div
        className="ambient-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-cyan/15 top-[-100px] left-[-100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-glow w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-accent-violet/15 bottom-[-100px] right-[-100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 section-container text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full glass border-accent-cyan/20 mb-6 sm:mb-8 max-w-full"
        >
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500 pulse-dot flex-shrink-0" />
          <span className="text-xs sm:text-sm text-text-secondary font-medium leading-snug">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-3 sm:mb-4 w-full"
        >
          <span className="text-text-secondary text-base sm:text-lg md:text-xl font-medium">
            Hi, I'm
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mt-1 sm:mt-2 break-words">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-accent-cyan font-semibold mb-4 sm:mb-6 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap"
        >
          <Sparkles size={18} className="text-accent-violet flex-shrink-0" />
          <span className="text-center">{personalInfo.title}</span>
          <Sparkles size={18} className="text-accent-violet flex-shrink-0" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("#projects")}
            className="w-full sm:w-auto group relative px-7 py-3.5 rounded-xl font-semibold text-bg-primary bg-gradient-to-r from-accent-cyan to-[#4facfe] hover:shadow-lg hover:shadow-accent-cyan/25 transition-shadow cursor-pointer flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-text-primary border border-border hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
