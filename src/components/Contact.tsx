import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="bg-gradient-to-r from-terracotta to-gold bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your appointment? We'd love to hear from you and discuss your artistic vision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-terracotta/10 bg-warm-pink/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Phone className="w-6 h-6 text-terracotta mr-3" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-terracotta/20 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-terracotta/20 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Beauty Plaza, Market Street<br />City Center, State 123456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-terracotta/20 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Working Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-terracotta/20 p-3 rounded-full">
                    <Instagram className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Follow Us</p>
                    <p className="text-muted-foreground">@artistictouch_official</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full">
                <Phone className="w-5 h-5" />
                Call Now for Instant Booking
              </Button>
              
              <Button variant="elegant" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-terracotta/10">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-foreground font-medium">Name</label>
                    <Input placeholder="Your full name" className="border-terracotta/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-foreground font-medium">Phone</label>
                    <Input placeholder="Your phone number" className="border-terracotta/20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-medium">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-terracotta/20" />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-medium">Service</label>
                  <select className="w-full p-2 border border-terracotta/20 rounded-md bg-background text-foreground">
                    <option>Select a service</option>
                    <option>Bridal Mehendi</option>
                    <option>Party Mehendi</option>
                    <option>Nail Art Design</option>
                    <option>Manicure & Pedicure</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements, preferred date, and any specific designs you have in mind..."
                    className="border-terracotta/20 min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;