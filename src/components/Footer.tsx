import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, ArrowUp, Instagram } from "lucide-react";

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
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/smartcore-software/?viewAsMember=true", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/skillyug063", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/skillyug?igsh=ZnFwbGM4MW1tY29m", color: "hover:bg-pink-500" },
    { name: "Email", icon: Mail, href: "mailto:consultantskillyug@gmail.com", color: "hover:bg-red-500" }
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
                <h3 className="text-3xl font-bold accent-gradient bg-clip-text text-transparent mb-2">
                  SKILLYUG
                </h3>
                <p className="text-sm text-primary font-medium">
                  Empowering businesses through smart code 🚀
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-md mt-3">
                  We build custom software solutions that drive growth,
                  efficiency, and digital transformation for modern businesses.
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
                  <strong className="text-foreground">Phone:</strong> +91 9450935939
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
                    className={`p-2 bg-muted rounded-lg text-muted-foreground transition-all duration-300 ${social.color} hover:text-white`}
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

          {/* Newsletter */}
          <motion.div
            className="mt-12 lg:col-span-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Subscribe to get the latest news and updates.
            </p>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary w-64 text-sm"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/80 transition text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>
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
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} SKILLYUG. All rights reserved. <br />
              <span className="text-xs">Made  by Skillyug Team</span>
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
