import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CountUp from "react-countup";

const Team = () => {
  const teamMembers = [
    // 👑 Top Leadership
    {
      name: "Vinayak Pandey",
      role: "Founder & CEO",
      bio: "Driving innovation, growth, and impactful digital solutions with a vision to empower Businesses.",
      image: "qw.png",
      social: {
        linkedin: "https://www.linkedin.com/in/vinayakpandeya/",
        twitter: "#",
        github: "https://github.com/vinayakpandeycode"
      }
    },

    // 🏢 C-Level Executives
    {
      name: "Ashish Dubey",
      role: "Chief Developer Officer (CDO)",
      bio: "Driving tech growth and innovative product development.",
      image: "ashisht.png",
      social: {
        linkedin: "https://www.linkedin.com/in/ashish-dubey-8904a52b3/",
        twitter: "#",
        github: "https://github.com/dubey233445"
      }
    },
    {
      name: "Vibhanshu Mishra",
      role: "Chief Operating Officer (COO)",
      bio: "Driving Blockchain & Android Development and process optimization and strategic focus.",
      image: "qwe.png",
      social: {
        linkedin: "https://www.linkedin.com/in/vibhanshu-mishra-8a351b336/",
        twitter: "#",
        github: "https://github.com/VibhanshuMishra11"
      }
    },
    {
      name: "Omkar Pandey",
      role: "Chief Finance Officer (CFO)",
      bio: "Driving growth through smart financial planning and seamless client-tech Coordination.",
      image: "omq.png",
      social: {
        linkedin: "http://www.linkedin.com/in/omkarpandeycse/",
        twitter: "#",
        github: "https://github.com/Omkar03092006"
      }
    },
    {
      name: "Yash Pandey",
      role: "Chief Marketing Officer (CMO)",
      bio: "Driving brand growth with creativity, strategy, and innovation.",
      image: "vbt.png",
      social: {
        linkedin: "https://www.linkedin.com/in/yash-pandey-70a36b31b",
        twitter: "#",
        github: "https://github.com/yashpandey205"
      }
    },
    {
      name: "Vaibhav Kumar",
      role: "Chief Technology Officer (CTO)",
      bio: "Leading with innovation to build scalable and impactful tech solutions.",
      image: "tp.png",
      social: {
        linkedin: "https://www.linkedin.com/in/vaibhavkumar2611/",
        twitter: "#",
        github: "https://github.com/Vaibhav-Rep"
      }
    },

    // 💡 Creative & Support Roles
    {
      name: "Aditi Mall",
      role: "Social Media & Content Assistant",
      bio: "Crafting content that builds brands and engages audience.",
      image: "aditi.png",
      social: {
        linkedin: "https://www.linkedin.com/in/aditi-mall-27658b28a/",
        twitter: "#",
        github: "https://github.com/Omkar03092006"
      }
    },
    {
      name: "Amara Ezeokafor",
      role: "UI/UX Designer",
      bio: "UX Research, Usability Testing, Figma, and Communication and Marketing.",
      image: "a5.jpg",
      social: {
        linkedin: "http://www.linkedin.com/in/amara-callista",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Akansha Shukla",
      role: "Assistant Marketing Manager",
      bio: "Assistant Marketing Officer, excels in Research and Strategic Marketing.",
      image: "ak2.png",
      social: {
        linkedin: "https://www.linkedin.com/in/akanksha-sunil-shukla-7720072a7/",
        twitter: "#",
        github: "https://github.com/Akankshashukla7110"
      }
    },
    {
      name: "Tanya ojha",
      role: "Social Media Manager & Graphics Designer",
      bio: "Design Head, Social Media Manager.",
      image: "aew.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/ihariomtripathi/",
        twitter: "#",
        github: "https://github.com/HariOmTripathi23"
      }
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
            Meet Our <span className="accent-gradient bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our talented team of developers, designers and innovators working together to bring your vision to life
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateY: 3, scale: 1.02 }}
              className="group h-full"
            >
              <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover-glow overflow-hidden flex flex-col h-full">
                
                {/* Member Photo */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden flex items-center justify-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a href={member.social.linkedin} target="_blank"
                        className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a href={member.social.twitter} target="_blank"
                        className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a href={member.social.github} target="_blank"
                        className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Gradient Role Badge */}
                  <p className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md mb-3">
                    {member.role}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats with Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Team Members", value: 10 },
            { label: "Combined Experience", value: 13 },
            { label: "Certifications", value: 50 }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountUp end={stat.value} duration={2} />+
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

export default Team;
