import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta/80 via-terracotta/60 to-gold/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-gold mr-3" />
            <span className="text-gold-foreground text-lg font-medium">Exquisite Art for Your Beauty</span>
            <Sparkles className="w-8 h-8 text-gold ml-3" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gold-foreground mb-6 leading-tight">
            Beautiful
            <span className="block bg-gradient-to-r from-gold to-cream bg-clip-text text-transparent">
              Mehendi & Nail Art
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gold-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your hands into masterpieces with our intricate henna designs and stunning nail artistry. 
            Every detail crafted with passion and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-4"
            >
              Book Your Appointment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="soft" 
              size="lg"
              onClick={scrollToServices}
              className="text-lg px-8 py-4"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-warm-pink/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;