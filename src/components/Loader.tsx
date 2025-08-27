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

      {/* 🚀 Logo Entry */}
      <motion.img
        src="/logo1.png"
        alt="Logo"
        className="h-28 md:h-40 w-auto relative z-10 drop-shadow-lg"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* ✨ Shine Sweep */}
      <motion.div
        className="absolute h-40 w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 z-20"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />

      {/* 📍 Bottom Pulse Bar */}
      <motion.div
        className="absolute bottom-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-20 h-1.5 bg-primary rounded-full animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
