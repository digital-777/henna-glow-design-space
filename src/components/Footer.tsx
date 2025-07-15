import { Heart, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-terracotta to-gold text-gold-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              ArtisticTouch
            </h3>
            <p className="text-gold-foreground/80 mb-4">
              Creating beautiful mehendi designs and stunning nail art that celebrates your unique style and special moments.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gold-foreground/20 p-2 rounded-full hover:bg-gold-foreground/30 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-gold-foreground/20 p-2 rounded-full hover:bg-gold-foreground/30 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="block text-gold-foreground/80 hover:text-gold-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-gold-foreground/80 hover:text-gold-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="block text-gold-foreground/80 hover:text-gold-foreground transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-gold-foreground/80 hover:text-gold-foreground transition-colors"
              >
                About
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gold-foreground/80">
              <p>Bridal Mehendi</p>
              <p>Party Mehendi</p>
              <p>Nail Art Design</p>
              <p>Manicure & Pedicure</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gold-foreground/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>Beauty Plaza, Market Street<br />City Center, State 123456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-foreground/20 mt-8 pt-8 text-center">
          <p className="text-gold-foreground/80">
            © 2024 ArtisticTouch. Made with{" "}
            <Heart className="w-4 h-4 inline text-warm-pink" />{" "}
            for beautiful art.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;