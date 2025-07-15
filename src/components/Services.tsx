import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Palette, Sparkles, Star } from "lucide-react";
import mehendiArt from "@/assets/mehendi-art.jpg";
import nailArt from "@/assets/nail-art.jpg";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Heart,
      title: "Bridal Mehendi",
      description: "Exquisite traditional and contemporary designs for your special day",
      image: mehendiArt,
      features: ["Intricate patterns", "Long-lasting stain", "Custom designs", "Bridal packages"],
      price: "Starting from ₹2500"
    },
    {
      icon: Palette,
      title: "Nail Art Design",
      description: "Stunning nail art that reflects your personality and style",
      image: nailArt,
      features: ["Custom designs", "Gel & acrylic", "3D nail art", "Seasonal trends"],
      price: "Starting from ₹800"
    },
    {
      icon: Sparkles,
      title: "Party Mehendi",
      description: "Quick and elegant designs perfect for festivities",
      image: mehendiArt,
      features: ["Quick application", "Elegant patterns", "Arabic styles", "Group bookings"],
      price: "Starting from ₹500"
    },
    {
      icon: Star,
      title: "Manicure & Pedicure",
      description: "Complete nail care with luxurious treatments",
      image: nailArt,
      features: ["Nail shaping", "Cuticle care", "Polish application", "Hand massage"],
      price: "Starting from ₹600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-terracotta to-gold bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of artistic services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-terracotta/10 bg-background/50 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gold text-gold-foreground p-2 rounded-full">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="absolute bottom-4 right-4 bg-background/90 text-terracotta px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <Sparkles className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="elegant" 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;