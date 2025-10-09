import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bulbImage from "@/assets/bulb.jpg";
import PlexusBackground from "./PlexusBackground";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated Plexus Background */}
      <div className="absolute inset-0 bg-background">
        <PlexusBackground />
      </div>

      {/* Hero Image - Visible on all screen sizes */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full">
        <div className="relative w-full h-full">
          <img
            src={bulbImage}
            alt="Innovation lightbulb representing creative solutions"
            className="w-full h-full object-contain opacity-30 lg:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background lg:via-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl lg:max-w-xl space-y-10">
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Driving Innovation for{" "}
            <span className="text-primary">Africa's Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Empowering socioeconomic advancement through strategic partnerships and transformative innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button size="lg" className="h-12 px-8 text-base font-medium">
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
