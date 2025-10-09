import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import PlexusBackground from "@/components/PlexusBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Full-page Plexus Background */}
      <div className="fixed inset-0 bg-background z-0">
        <PlexusBackground />
      </div>
      
      {/* Content */}
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
