import Navbar from "@/components/Navbar";
import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Midpoint Innovations Nigeria",
    "description": "Get in touch with Midpoint Innovations to discuss partnership opportunities and innovative solutions for Africa's development."
  };

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch"
        description="Contact Midpoint Innovations Nigeria for partnership opportunities, consultations, and innovative solutions. Reach out to our team to discuss how we can drive progress together."
        keywords="Contact Midpoint Innovations, Nigeria innovation contact, partnership opportunities Nigeria, innovation consultancy contact"
        canonical="/contact"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <ContactComponent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
