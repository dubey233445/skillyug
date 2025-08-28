import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showLoader) return null;

  return (
    <>
      {/* ✅ Inline CSS (Glitch + Scanline Animations) */}
      <style jsx>{`
        @keyframes scanlines {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 3px;
          }
        }
        .animate-scanlines {
          animation: scanlines 0.2s linear infinite;
        }

        .glitch-text {
          position: relative;
          color: #00ffff;
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
          animation: flicker 1.5s infinite alternate;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: "LOADING...";
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch-text::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          color: #ff00ff;
        }
        .glitch-text::after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          color: #00ffea;
        }

        @keyframes glitchTop {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          20% {
            clip: rect(0, 9999px, 8px, 0);
            transform: translate(-2px, -2px);
          }
          40% {
            clip: rect(0, 9999px, 0, 0);
          }
          60% {
            clip: rect(0, 9999px, 8px, 0);
            transform: translate(2px, 2px);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
          }
        }

        @keyframes glitchBottom {
          0% {
            clip: rect(0, 9999px, 0, 0);
          }
          20% {
            clip: rect(4px, 9999px, 9999px, 0);
            transform: translate(2px, 2px);
          }
          40% {
            clip: rect(0, 9999px, 0, 0);
          }
          60% {
            clip: rect(4px, 9999px, 9999px, 0);
            transform: translate(-2px, -2px);
          }
          100% {
            clip: rect(0, 9999px, 0, 0);
          }
        }

        @keyframes flicker {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center hero-gradient overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 🚀 Logo with Neon Flicker */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative inline-block">
            {/* Logo */}
            <motion.img
              src="/logo1.png"
              alt="Logo"
              className="h-28 md:h-40 w-auto relative z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.9)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.3, 1, 0.6, 1] }} // Neon Flicker
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.3, 0.5, 0.7, 1],
              }}
            />

            {/* ✨ Shine only on Logo */}
            <motion.div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute top-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/70 to-transparent rotate-12 mix-blend-screen"
                animate={{ left: ["-150%", "150%"] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
            </motion.div>
          </div>

          {/* ⚡ Glitch Text */}
          <motion.div
            className="mt-6 text-cyan-400 text-lg md:text-xl font-mono relative glitch-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            LOADING...
          </motion.div>
        </motion.div>

        {/* 🌌 Holographic Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            initial={{
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              y: Math.random() * window.innerHeight - window.innerHeight / 2,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: ["0%", "-100%"],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* 📺 Glitchy Scanlines Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:100%_3px] animate-scanlines" />

        {/* 📍 Bottom Pulse Bar */}
        <motion.div
          className="absolute bottom-20 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="w-20 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.9)]" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Loader;
