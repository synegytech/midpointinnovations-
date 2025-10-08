import { Building2, Lightbulb, Users2, BookOpen, Briefcase, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Government Partnerships",
      description: "Collaborating with government agencies to develop and implement innovative policies and programs that drive national development.",
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Business Solutions",
      description: "Providing strategic consulting and innovative solutions to help private businesses scale and achieve sustainable growth.",
      color: "secondary"
    },
    {
      icon: Users2,
      title: "NGO Collaboration",
      description: "Partnering with non-governmental organizations to create impactful social programs and community development initiatives.",
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Educational Innovation",
      description: "Transforming education through technology and creative learning solutions for institutions and learners across Africa.",
      color: "secondary"
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Delivering cutting-edge innovation strategies and creative problem-solving approaches for complex challenges.",
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Technology Development",
      description: "Building and deploying technology solutions that accelerate socioeconomic advancement and digital transformation.",
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Our <span className="text-primary">Focus Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We deliver comprehensive solutions across multiple sectors, partnering with diverse
            stakeholders to create lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === "primary";
            
            return (
              <Card 
                key={service.title}
                className="p-8 border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium group animate-scale-in hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${isPrimary ? 'gradient-primary' : 'gradient-secondary'} flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth group-hover:rotate-12`}>
                  <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-smooth" />
                </div>
                <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
