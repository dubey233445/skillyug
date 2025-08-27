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
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showLoader) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center hero-gradient overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 🔥 Particle Burst */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 500,
            y: (Math.random() - 0.5) * 500,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
      ))}

      {/* 🚀 Logo with Glow */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src="/logo1.png"
          alt="Logo"
          className="h-28 md:h-40 w-auto drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]"
        />

        {/* ✨ Neon Shine Sweep (Cyberpunk) */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none"
        >
          <motion.div
            className="absolute top-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-12"
            animate={{ left: ["-150%", "150%"] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* 📍 Bottom Pulse Bar */}
      <motion.div
        className="absolute bottom-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-20 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(0,255,255,0.7)]" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
