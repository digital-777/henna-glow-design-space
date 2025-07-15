import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-terracotta/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-terracotta to-gold bg-clip-text text-transparent">
              ArtisticTouch
            </h1>
            <span className="text-sm text-muted-foreground">Mehendi & Nails</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-terracotta transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-terracotta transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-terracotta transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-terracotta transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-terracotta transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="soft"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="w-4 h-4" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;