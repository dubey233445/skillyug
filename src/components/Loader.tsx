import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoaderProps {
  onComplete: () => void
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!showLoader) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center hero-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.img
        src="/logo1.png" // ✅ replace with your logo path
        alt="Logo"
        className="h-28 w-auto md:h-40"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />

      {/* Loading Bar / Pulse Effect */}
      <motion.div
        className="absolute bottom-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="w-16 h-1 bg-primary rounded-full animate-pulse" />
      </motion.div>
    </motion.div>
  )
}

export default Loader
