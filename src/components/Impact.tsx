import { Card } from "@/components/ui/card";
import techGirlImage from "@/assets/TECHGIRL.png";

const Impact = () => {
  return (
    <section id="impact" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={techGirlImage} 
          alt="Technology innovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-white">
            Our <span className="text-primary">Potential Impact</span>
          </h2>
          <p className="text-xl text-white leading-relaxed">
            Positioned to create transformative change across Nigeria and Africa through 
            strategic innovation and meaningful partnerships.
          </p>
        </div>

        {/* Potential Impact Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="font-heading text-5xl font-bold text-primary mb-2">1M+</div>
            <div className="text-white">Potential Lives to Impact</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="font-heading text-5xl font-bold text-secondary mb-2">200+</div>
            <div className="text-white">Projected Projects</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="font-heading text-5xl font-bold text-primary mb-2">30+</div>
            <div className="text-white">States to Reach</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="font-heading text-5xl font-bold text-secondary mb-2">95%</div>
            <div className="text-white">Target Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
