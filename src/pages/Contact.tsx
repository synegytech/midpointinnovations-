import Navbar from "@/components/Navbar";
import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
