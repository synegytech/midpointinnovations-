import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const VisionMissionValues = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            About <span className="text-primary">Midpoint Innovations</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A private corporation devoted to research and development across diverse fields, 
            harnessing the intellectual and technical expertise of Nigerians and Africans to 
            innovate solutions for ongoing and anticipated challenges across the continent.
          </p>
        </div>

        {/* Vision, Mission, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="p-8 border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium group animate-scale-in hover:scale-105">
            <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth group-hover:rotate-6">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl mb-4 group-hover:text-primary transition-smooth">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be Africa's leading catalyst for innovative solutions that drive sustainable
              socioeconomic transformation and empower communities to reach their full potential.
            </p>
          </Card>

          {/* Mission */}
          <Card className="p-8 border-2 hover:border-secondary transition-smooth shadow-soft hover:shadow-medium group animate-scale-in hover:scale-105" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 rounded-xl gradient-secondary flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth group-hover:rotate-6">
              <Target className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-2xl mb-4 group-hover:text-secondary transition-smooth">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver transformative innovation through strategic partnerships with government,
              businesses, and NGOs, creating lasting impact through creativity and human-centered solutions.
            </p>
          </Card>

          {/* Values */}
          <Card className="p-8 border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium group animate-scale-in hover:scale-105" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth group-hover:rotate-6">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl mb-4 group-hover:text-primary transition-smooth">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovation, integrity, collaboration, excellence, and impact. We believe that humanity
              and creativity are the cornerstones of sustainable progress.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
