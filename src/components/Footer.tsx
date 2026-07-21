import { Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-xs text-bg-primary">
              KAP
            </div>
            <span className="text-sm text-text-secondary">
              {personalInfo.name}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-muted flex items-center gap-1.5">
            © {year} — Built with
            <Heart size={14} className="text-accent-pink fill-accent-pink" />
            and React + TypeScript
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-text-muted hover:text-accent-cyan transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
