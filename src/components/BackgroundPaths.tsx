import { motion } from "framer-motion";

export default function BackgroundPaths() {
  // Group 1: Flowing from top-left across to bottom-right spanning full screen
  const pathsGroup1 = Array.from({ length: 24 }, (_, i) => {
    const yStart = -120 + i * 38;
    const yControl1 = 120 + i * 32;
    const yControl2 = 500 - i * 18;
    const yEnd = 720 + i * 28;
    return {
      id: `g1-${i}`,
      d: `M -200 ${yStart} C 400 ${yControl1}, 850 ${yControl2}, 1600 ${yEnd}`,
      width: 1 + (i % 4) * 0.5,
      opacity: 0.15 + (i / 24) * 0.45,
      duration: 16 + (i % 6) * 2,
    };
  });

  // Group 2: Flowing from bottom-left across to top-right spanning full screen
  const pathsGroup2 = Array.from({ length: 24 }, (_, i) => {
    const yStart = 920 - i * 38;
    const yControl1 = 680 - i * 32;
    const yControl2 = 280 + i * 18;
    const yEnd = -120 - i * 20;
    return {
      id: `g2-${i}`,
      d: `M -200 ${yStart} C 450 ${yControl1}, 950 ${yControl2}, 1600 ${yEnd}`,
      width: 1 + (i % 4) * 0.5,
      opacity: 0.15 + (i / 24) * 0.45,
      duration: 18 + (i % 6) * 2,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      <svg
        className="absolute inset-0 w-full h-full opacity-60 md:opacity-85"
        viewBox="0 0 1400 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <g opacity="0.85">
          {pathsGroup1.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="url(#hero-path-gradient-1)"
              strokeWidth={path.width}
              strokeOpacity={path.opacity}
              initial={{ pathLength: 0.3, opacity: 0.2 }}
              animate={{
                pathLength: [0.2, 0.85, 0.2],
                pathOffset: [0, 1, 0],
                opacity: [0.25, 0.75, 0.25],
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {pathsGroup2.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="url(#hero-path-gradient-2)"
              strokeWidth={path.width}
              strokeOpacity={path.opacity}
              initial={{ pathLength: 0.3, opacity: 0.2 }}
              animate={{
                pathLength: [0.2, 0.85, 0.2],
                pathOffset: [1, 0, 1],
                opacity: [0.25, 0.75, 0.25],
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </g>
        <defs>
          <linearGradient
            id="hero-path-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="hero-path-gradient-2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4facfe" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
