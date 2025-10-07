import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Let's Create <span className="text-primary">Impact Together</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your vision into reality? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-2 shadow-medium animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-2"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="border-2"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">Organization</label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your Company/Organization"
                  className="border-2"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  required
                  className="border-2"
                />
              </div>

              <Button type="submit" className="w-full gradient-primary shadow-medium hover:shadow-glow transition-smooth group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="p-8 border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@midpointinnovations.com.ng</p>
                  <p className="text-muted-foreground">eaniagolu@yahoo.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-secondary transition-smooth shadow-soft hover:shadow-medium group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+2348139555987</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    D9 Kingstown Estate, Life Camp<br />
                    FCT, Abuja, Nigeria
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 bg-gradient-hero shadow-medium">
              <h3 className="font-heading text-2xl text-white mb-3">Ready to Start?</h3>
              <p className="text-white/90 mb-6">
                Join government agencies, businesses, and NGOs who trust us to deliver innovative solutions.
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Schedule a Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
