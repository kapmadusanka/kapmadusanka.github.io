import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Code2,
  Link,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = personalInfo.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: personalInfo.github,
      icon: Code2,
    },
    {
      label: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Link,
    },
    {
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="ambient-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-cyan/10 bottom-[-150px] left-1/2 -translate-x-1/2" />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <span className="text-accent-cyan text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-5 sm:p-8 md:p-10 relative overflow-hidden mb-6 sm:mb-8"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-violet/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center">
                  <Send size={20} className="text-bg-primary" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2">
                Ready to collaborate?
              </h3>
              <p className="text-xs sm:text-base text-text-secondary text-center mb-6 sm:mb-8">
                Drop me an email and let's discuss your next project.
              </p>

              {/* Email Copy Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={copyEmail}
                className={`w-full max-w-md mx-auto flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-base md:text-lg transition-all duration-300 cursor-pointer break-all ${
                  copied
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : "bg-gradient-to-r from-accent-cyan/10 to-accent-violet/10 border border-border hover:border-accent-cyan/40 text-text-primary"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-green-400 flex-shrink-0" />
                    <span>Copied to Clipboard! 🚀</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} className="text-accent-cyan flex-shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.a
              href={`tel:${personalInfo.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-xl p-5 card-hover text-center group"
            >
              <Phone
                size={20}
                className="text-accent-cyan mx-auto mb-2 group-hover:scale-110 transition-transform"
              />
              <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                {personalInfo.phone}
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-5 card-hover text-center group"
            >
              <MapPin
                size={20}
                className="text-accent-violet mx-auto mb-2 group-hover:scale-110 transition-transform"
              />
              <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                {personalInfo.location}
              </p>
            </motion.div>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-xl p-5 card-hover text-center group"
            >
              <Mail
                size={20}
                className="text-accent-pink mx-auto mb-2 group-hover:scale-110 transition-transform"
              />
              <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                {personalInfo.email}
              </p>
            </motion.a>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl glass card-hover"
              >
                <link.icon
                  size={18}
                  className="text-text-secondary group-hover:text-accent-cyan transition-colors"
                />
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                  {link.label}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-text-muted group-hover:text-accent-cyan transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
