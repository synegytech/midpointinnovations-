import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-background">Midpoint</span>
                <span className="text-xs text-background/70">Innovations Nigeria</span>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Driving socioeconomic advancement in Nigeria and Africa through innovation,
              creativity, and strategic partnerships.
            </p>
            <p className="text-primary font-semibold italic">
              "Humanity & Creativity Leads to Progress"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-background">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#impact" className="text-background/80 hover:text-primary transition-smooth">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-background">Contact</h3>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@midpointinnovations.ng</span>
              </li>
              <li>+234 (0) 800 123 4567</li>
              <li>
                Innovation Hub<br />
                Victoria Island, Lagos<br />
                Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm mb-4 md:mb-0">
            © {currentYear} Midpoint Innovations Nigeria, Limited. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
