import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "GreenArray",
      description: "GreenArray – Your one-stop platform for plants, care guidance, and eco-awareness",
      image: "/api/placeholder/600/400",
      technologies: ["HTML","CSS","JavaScript","Node.js"],
      category: "Web Development",
      link: "https://vinayakpandeycode.github.io/GreenArray-Project/",
      github: "https://github.com/vinayakpandeycode/GreenArray-Project"
    },
    {
      title: "AI Automated Evaluation",
      description: "Instant, Accurate, and Fair Evalution of Answer Sheets Using AI-Powered",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "React", "MongoDB", "Express","Google Gemini Api"],
      category: "AI & Data",
      link: "https://ai-evaluaite-1.onrender.com/",
      github: "https://github.com/vinayakpandeycode/AI-Evalution.git"
    },
    {
      title: "Track My Calorie",
      description: "Track My Calories helps users log meals, calculates nutrients, sets personalized targets, and gives real-time feedback to achieve fitness goals.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "Flask", "SchemaSQL"],
      category: "Web Development",
      link: "https://trackmycalorie.onrender.com",
      github: ""
    },
    {
      title: "Sign Language into text",
      description: "A real-time system that recognizes Indian Sign Language (ISL) gestures using a CNN-LSTM model and translates them into readable text.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Tensorflow", "OpenCV", "LSTM"],
      category: "Automation",
      link: "",
      github: "https://github.com/dubey233445/Ashish_dubey_cse-ai-ml-_E__Sign-Language-to-Text.git"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="accent-gradient bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover some of our recent projects and see how we've helped businesses Transform Digitally
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover-glow overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="opacity-90"
                      onClick={() => window.open(project.link, '_blank')}
                      disabled={project.link === '#'}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="opacity-90 bg-white/10 border-white/30 text-white hover:bg-white/20"
                      onClick={() => window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working with us on your next Project?
          </p>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
