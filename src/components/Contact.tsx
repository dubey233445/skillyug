import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "consultantskillyug@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+919953157887",
      description: ""
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Noida, Delhi",
      description: "Schedule an in-person meeting"
    }
  ];

  const handleContactForm = () => {
    // Placeholder Google Form URL - replace with actual form
    window.open("https://forms.gle/eaACebw9kxZBfQ7g6", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
            Get In <span className="accent-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help. Our team is ready to discuss your requirements and provide 
                expert guidance on the best solutions for your business.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary font-semibold mb-1">
                            {info.details}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Options */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-foreground mb-4">
                Prefer a Quick Chat?
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2"
                  onClick={() => window.open("mailto:consultantskillyug@gmail.com")}
                >
                  <Mail className="h-4 w-4" />
                  <span>Send Email</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2"
                  onClick={() => window.open("tel:+919953157887")}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form CTA */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="w-full max-w-md card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover-glow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Start Your Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out our project form and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Project Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Detailed project proposal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Timeline & cost estimate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Technology recommendations</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={handleContactForm}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold rounded-full hover-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Fill Project Form
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  No spam, just valuable insights and updates about your project
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Something Custom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique, and so are our solutions. Let's discuss your specific 
            requirements and create something amazing together.
          </p>
          <Button
            onClick={handleContactForm}
            variant="outline"
            size="lg"
            className="font-semibold"
          >
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
