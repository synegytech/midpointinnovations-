import { Target, Eye, Award, Building2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import heroInnovation from "@/assets/hero-innovation.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={heroInnovation} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl mb-6">
              About <span className="text-primary">Midpoint Innovations</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A forward-thinking organization committed to catalyzing socioeconomic advancement
              in Nigeria and across Africa through innovation, creativity, and strategic collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 shadow-medium animate-scale-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl mb-4">Who We Are</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      Midpoint Innovations is a private corporation limited by shares, primarily involved
                      in and devoted to research and development (R&D) in a wide variety of interest
                      areas, with the primary objective of harnessing the intellectual, technical know-
                      how and practical experience of Nigerians and other Africans, to innovate ideas
                      that help solve ongoing or anticipated problems in Nigeria and other parts of
                      Africa.
                    </p>
                    <p className="leading-relaxed">
                      To that extent, Midpoint Innovations has a Chief Executive Officer in the
                      person of Professor Emeka Aniagolu, working with a team of Associate
                      Consultants (area experts from a variety of disciplines), that have the freedom to
                      suggest, initiate and/or innovate research and development on any project or idea
                      of their choice; which, once proven to be feasible, the rest of the Associate
                      Consultants collaborates to bring the idea(s) to fruition.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Registration Info */}
            <Card className="p-8 mt-8 border-2 bg-muted/30 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl mb-3">Legal Registration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Midpoint Innovations is a limited liability company by shares, it was duly
                    registered by the Corporate Affairs Commission (CAC) of Nigeria on <span className="font-semibold text-foreground">November 3,
                    2022</span> <span className="font-mono text-sm">[RC: 1994438]</span>.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
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

      {/* Team Section */}
      <Team />

      <Footer />
    </div>
  );
};

export default About;
