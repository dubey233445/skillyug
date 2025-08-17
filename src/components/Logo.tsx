import { motion } from "framer-motion";
import { Zap, Code2 } from "lucide-react";

interface LogoProps {
  variant?: "full" | "symbol" | "wordmark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "full", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32
  };

  if (variant === "symbol") {
    return (
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative bg-gradient-to-br from-primary to-primary-glow rounded-lg p-2">
          <Code2 size={iconSizes[size]} className="text-primary-foreground" />
          <motion.div
            className="absolute -top-1 -right-1 bg-accent-gradient rounded-full p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={iconSizes[size] * 0.5} className="text-primary-foreground" />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (variant === "wordmark") {
    return (
      <motion.div
        className={`font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent ${sizeClasses[size]}`}
        whileHover={{ scale: 1.02 }}
      >
        SKILLYUG
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative bg-gradient-to-br from-primary to-primary-glow rounded-lg p-2">
        <Code2 size={iconSizes[size]} className="text-primary-foreground" />
        <motion.div
          className="absolute -top-1 -right-1 bg-accent-gradient rounded-full p-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Zap size={iconSizes[size] * 0.5} className="text-primary-foreground" />
        </motion.div>
      </div>
      <div className={`font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent ${sizeClasses[size]}`}>
        SKILLYUG
      </div>
    </motion.div>
  );
};

export default Logo;