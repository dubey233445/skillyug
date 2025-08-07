import { motion } from "framer-motion";

const Technologies = () => {
  const techCategories = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", color: "text-blue-500" },
        { name: "Next.js", color: "text-gray-800 dark:text-white" },
        { name: "TypeScript", color: "text-blue-600" },
        { name: "Tailwind CSS", color: "text-cyan-500" },
        { name: "Vue.js", color: "text-green-500" }
      ]
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", color: "text-green-600" },
        { name: "Python", color: "text-yellow-500" },
        { name: "Express.js", color: "text-gray-600" },
        { name: "Django", color: "text-green-700" },
        { name: "FastAPI", color: "text-teal-500" }
      ]
    },
    {
      name: "Mobile",
      technologies: [
        { name: "React Native", color: "text-blue-500" },
        { name: "Flutter", color: "text-blue-400" },
        { name: "iOS", color: "text-gray-800 dark:text-white" },
        { name: "Android", color: "text-green-500" },
        { name: "Expo", color: "text-purple-600" }
      ]
    },
    {
      name: "Database & Cloud",
      technologies: [
        { name: "MongoDB", color: "text-green-600" },
        { name: "PostgreSQL", color: "text-blue-700" },
        { name: "AWS", color: "text-orange-500" },
        { name: "Firebase", color: "text-yellow-500" },
        { name: "Docker", color: "text-blue-600" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
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
            Our <span className="accent-gradient bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground text-center">
                {category.name}
              </h3>
              
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "var(--shadow-glow)"
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className={`font-semibold ${tech.color}`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Technologies Mastered", value: "20+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Years Experience", value: "5+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;