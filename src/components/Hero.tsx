import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import techGirlImage from "@/assets/TECHGIRL.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl lg:max-w-xl space-y-10">
          <h1 className="font-sans text-5xl md:text-6xl lg:text-[4.375rem] font-bold leading-tight tracking-tight">
            Driving Innovation for{" "}
            <span className="text-primary">Africa's Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl">
            Empowering socioeconomic advancement through strategic partnerships and transformative innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
