import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development: Transforming User Experiences",
    excerpt: "Discover how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces.",
    category: "AI",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    image: "/a1.jpg",
    tags: ["AI", "Web Development", "Machine Learning"]
  },
  {
    id: 2,
    title: "Building Scalable Robotics Applications with Modern Tech Stack",
    excerpt: "Learn how to create robust robotics software solutions using React, Node.js, and real-time communication protocols.",
    category: "Robotics",
    readTime: "12 min read",
    publishDate: "2024-01-10",
    image: "/a3.jpg",
    tags: ["Robotics", "IoT", "Real-time Systems"]
  },
  {
    id: 3,
    title: "Data Analytics: Turning Raw Data into Business Intelligence",
    excerpt: "Explore advanced data analytics techniques and visualization strategies that drive business growth and informed decision-making.",
    category: "Data Analytics",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    image: "/a4.jpg",
    tags: ["Data Science", "Analytics", "Business Intelligence"]
  },
  {
    id: 4,
    title: "Progressive Web Apps: The Bridge Between Web and Mobile",
    excerpt: "Understanding how PWAs are changing the mobile landscape and providing native-like experiences through web technologies.",
    category: "Web Development",
    readTime: "6 min read",
    publishDate: "2023-12-28",
    image: "/a5.jpg",
    tags: ["PWA", "Mobile", "Web Development"]
  }
];

const categories = ["All", "AI", "Web Development", "Robotics", "Data Analytics"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exploring the latest trends in AI, web development, robotics, and data analytics. 
              Stay ahead with cutting-edge insights and practical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button 
                  variant={category === "All" ? "default" : "outline"}
                  className="hover-lift"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Featured Article</Badge>
            <Card className="overflow-hidden hover-lift card-gradient">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt="AI artificial intelligence technology revolutionizing web development with automated code generation and smart user interfaces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(blogPosts[0].publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="self-start group">
                    Read Article
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden hover-lift card-gradient h-full">
                  <div className="aspect-video">
                    <img 
                      src={post.image} 
                      alt={`${post.category} technology illustration for ${post.title} - ${post.excerpt.slice(0, 100)}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on AI, web development, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;