import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiAngular, SiVuedotjs,
  SiNodedotjs, SiPython, SiExpress, SiJava, SiFastapi,
  SiReactnative, SiFlutter, SiKotlin, SiAndroid, SiExpo,
  SiMongodb, SiPostgresql, SiFirebase, SiKubernetes, SiDevops
} from "react-icons/si";

const Technologies = () => {
  const techCategories = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", icon: <SiReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Angular", icon: <SiAngular className="text-red-500" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> }
      ]
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-purple-600" /> },
        { name: "Java", icon: <SiJava className="text-orange-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> }
      ]
    },
    {
      name: "Mobile",
      technologies: [
        { name: "React Native", icon: <SiReactnative className="text-sky-400" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-pink-500" /> },
        { name: "Android", icon: <SiAndroid className="text-green-500" /> },
        { name: "Expo", icon: <SiExpo className="text-purple-600" /> }
      ]
    },
    {
      name: "Database & Cloud",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "DevOps", icon: <SiDevops className="text-orange-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> }
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building robust, scalable solutions with the latest technologies
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
                    className="flex items-center gap-3 justify-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(59,130,246,0.5)" // nice blue glow
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-semibold">{tech.name}</span>
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
