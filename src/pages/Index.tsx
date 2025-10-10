import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import PlexusBackground from "@/components/PlexusBackground";
import heroBulbImage from "@/assets/hero-bulb.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Background Image - Lowest layer */}
      <div className="fixed inset-0 z-0">
        <img 
          src={heroBulbImage} 
          alt="Innovation technology lightbulb" 
          className="w-full h-full object-cover"
        />
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
