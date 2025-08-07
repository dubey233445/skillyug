import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const letters = "SKILLYUG".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showLoader) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center hero-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center space-x-2">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-6xl md:text-8xl font-bold text-white"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      
      <motion.div
        className="absolute bottom-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-16 h-1 bg-primary rounded-full animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;