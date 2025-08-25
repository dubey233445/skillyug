import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Custom Software",
    "AI Automation", 
    "Web & Mobile Solutions"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const shouldDelete = isDeleting;
    
    if (!shouldDelete && displayText !== currentPhrase) {
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (shouldDelete && displayText !== "") {
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!shouldDelete && displayText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (shouldDelete && displayText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Building</span>
              <span className="block">
                <span className="accent-gradient bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  className="inline-block w-1 h-16 bg-primary ml-2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Streamlining Processes with AI-Driven Technology
            </motion.p>
          </div>

          {/* Feature Icons */}
          <motion.div 
            className="flex justify-center space-x-8 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Code, label: "Web Dev" },
              { icon: Smartphone, label: "Mobile" },
              { icon: Zap, label: "AI Tools" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-white/70 text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full hover-glow transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
