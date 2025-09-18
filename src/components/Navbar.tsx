import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-border"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Container aligned with Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#home")}
          >
            <img
              src="/logo1.png"
              alt="Skillyug Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base px-2 py-1"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-background/90 h-9 w-9 sm:h-10 sm:w-10 p-0 flex items-center justify-center"
            >
              {isOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 text-left w-full py-2 px-2 rounded-lg hover:bg-primary/5 active:bg-primary/10"
                  whileTap={{ scale: 0.97 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
