import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
    { icon: Clock, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-warm-pink/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-terracotta to-gold bg-clip-text text-transparent">ArtisticTouch</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Welcome to ArtisticTouch, where artistry meets beauty. Our passion for mehendi and nail art 
                has been creating unforgettable experiences for brides, party-goers, and beauty enthusiasts 
                for over 5 years.
              </p>
              
              <p>
                We specialize in intricate henna designs that tell your story and nail art that reflects 
                your unique personality. Every design is carefully crafted with attention to detail, 
                using high-quality materials and traditional techniques passed down through generations.
              </p>
              
              <p>
                Our team of skilled artists is dedicated to making every client feel special. Whether 
                it's your wedding day, a festival celebration, or just a desire to pamper yourself, 
                we're here to transform your vision into beautiful reality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-terracotta/10 bg-background/70 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-terracotta to-gold p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-gold-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-terracotta mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose Us?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-terracotta" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Passionate Artists</h4>
              <p className="text-muted-foreground">Our team consists of passionate artists dedicated to their craft</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-terracotta" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Quality Materials</h4>
              <p className="text-muted-foreground">We use only the highest quality henna and nail products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-terracotta" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Personalized Service</h4>
              <p className="text-muted-foreground">Every design is tailored to your preferences and style</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;