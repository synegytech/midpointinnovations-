import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Users, TrendingUp, Sparkles } from "lucide-react";
import bulbImage from "@/assets/bulb.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Hero Image - Positioned Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
        <div className="relative w-full h-full animate-fade-in">
          <img
            src={bulbImage}
            alt="Innovation lightbulb representing creative solutions"
            className="w-full h-full object-contain animate-float opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl lg:max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-primary/10 border-2 border-primary rounded-full hover:bg-primary/15 transition-smooth group cursor-default">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-semibold group-hover:scale-105 transition-smooth inline-block">Humanity & Creativity Leads to Progress</span>
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
            <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-smooth text-lg group relative overflow-hidden">
              <span className="relative z-10">Partner With Us</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 text-lg transition-smooth group">
              <span>Learn More</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="text-center animate-scale-in group cursor-default">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth group-hover:scale-110 group-hover:shadow-glow">
                <Lightbulb className="w-7 h-7 text-primary group-hover:rotate-12 transition-smooth" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1 group-hover:scale-110 transition-smooth">100+</div>
              <div className="text-sm text-muted-foreground">Innovative Projects</div>
            </div>
            <div className="text-center animate-scale-in group cursor-default" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth group-hover:scale-110 group-hover:shadow-glow">
                <Users className="w-7 h-7 text-secondary group-hover:scale-110 transition-smooth" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-1 group-hover:scale-110 transition-smooth">50+</div>
              <div className="text-sm text-muted-foreground">Strategic Partners</div>
            </div>
            <div className="text-center animate-scale-in group cursor-default" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth group-hover:scale-110 group-hover:shadow-glow">
                <TrendingUp className="w-7 h-7 text-primary group-hover:translate-y-[-2px] transition-smooth" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1 group-hover:scale-110 transition-smooth">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
