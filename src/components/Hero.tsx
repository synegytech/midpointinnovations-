import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Innovation and progress in Nigeria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border-2 border-primary rounded-full">
            <span className="text-primary font-semibold">Humanity & Creativity Leads to Progress</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
            Driving Innovation for{" "}
            <span className="text-primary">Africa's Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Midpoint Innovations Nigeria empowers socioeconomic advancement through strategic
            partnerships, creative solutions, and transformative innovation across Nigeria and Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="gradient-primary shadow-glow hover:shadow-glow transition-smooth text-lg group">
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg transition-smooth">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center animate-scale-in">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Innovative Projects</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-heading text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Strategic Partners</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
