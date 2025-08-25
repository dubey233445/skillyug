import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "AI Automation", href: "#services" },
      { name: "Custom Solutions", href: "#services" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" }
    ],
    Technologies: [
      { name: "React & Next.js", href: "#" },
      { name: "Node.js", href: "#" },
      { name: "Python & AI", href: "#" },
      { name: "Mobile Development", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/smartcore-software/?viewAsMember=true" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/skillyug063" },
    { name: "Email", icon: Mail, href: "mailto:consultantskillyug@gmail.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold accent-gradient bg-clip-text text-transparent mb-4">
                  SKILLYUG
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Empowering businesses through smart code. We create custom software solutions 
                  that drive growth, efficiency, and digital transformation.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> consultantskillyug@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Phone:</strong> +91 123456789
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Location:</strong> Noida, UP
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-muted hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
                viewport={{ once: true }}
              >
                <h4 className="text-foreground font-semibold text-lg">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="py-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © {currentYear} SKILLYUG. All rights reserved.
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
