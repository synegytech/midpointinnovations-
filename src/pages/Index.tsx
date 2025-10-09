import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VisionMissionValues />
      <Services />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
