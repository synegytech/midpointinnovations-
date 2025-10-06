import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Impact = () => {
  const testimonials = [
    {
      quote: "Midpoint Innovations transformed our approach to community development. Their innovative solutions have created lasting impact in our region.",
      author: "Dr. Adebayo Ogunlesi",
      role: "Director, Community Development Agency",
      organization: "Federal Ministry of Development"
    },
    {
      quote: "Working with Midpoint has been a game-changer for our organization. Their creativity and strategic thinking helped us scale our impact exponentially.",
      author: "Mrs. Chioma Nwankwo",
      role: "Executive Director",
      organization: "African Education Initiative"
    },
    {
      quote: "The partnership with Midpoint Innovations brought fresh perspectives and innovative solutions that modernized our operations and improved service delivery.",
      author: "Engr. Ibrahim Mohammed",
      role: "Chief Technology Officer",
      organization: "National Infrastructure Corp"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Creating <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from our partners about the transformative change we've achieved together
            across Nigeria and Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary mb-6" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{testimonial.organization}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="font-heading text-5xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Lives Impacted</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="font-heading text-5xl font-bold text-secondary mb-2">200+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="font-heading text-5xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">States Reached</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="font-heading text-5xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
