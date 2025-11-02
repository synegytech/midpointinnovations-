import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import PlexusBackground from "@/components/PlexusBackground";
import SEO from "@/components/SEO";
import heroBulbImage from "@/assets/hero-bulb.jpg";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Midpoint Innovations Nigeria Limited",
    "description": "Driving socioeconomic advancement in Nigeria and Africa through innovation, creativity, and strategic partnerships",
    "url": "https://midpointinnovations.com",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/a0qsPgJh4LUe46zduF1z4fgDBIL2/uploads/1759830202069-meterbuddy.png",
    "foundingDate": "2022-11-03",
    "founders": [{
      "@type": "Person",
      "name": "Prof. Emeka Aniagolu"
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "info@midpointinnovations.com"
    },
    "sameAs": []
  };

  return (
    <>
      <SEO 
        title="Humanity & Creativity Leads to Progress"
        description="Midpoint Innovations Nigeria drives socioeconomic advancement in Nigeria and Africa through innovation, creativity, and strategic partnerships with government, businesses, and NGOs."
        canonical="/"
        structuredData={structuredData}
      />
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
    </>
  );
};

export default Index;
