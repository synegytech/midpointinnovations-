import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import PlexusBackground from "@/components/PlexusBackground";
import techGirlImage from "@/assets/TECHGIRL.png";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Background Image - Lowest layer */}
      <div className="fixed inset-0 z-0">
        <img 
          src={techGirlImage} 
          alt="Technology innovation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Plexus Background - Middle layer */}
      <div className="fixed inset-0 z-[1]">
        <PlexusBackground />
      </div>
      
      {/* Content - Top layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <VisionMissionValues />
        <Services />
        <Impact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
