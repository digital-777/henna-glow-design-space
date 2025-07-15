import mehendiArt from "@/assets/mehendi-art.jpg";
import nailArt from "@/assets/nail-art.jpg";

const Gallery = () => {
  // Create gallery items using our generated images
  const galleryItems = [
    { id: 1, image: mehendiArt, category: "mehendi", title: "Bridal Mehendi Design" },
    { id: 2, image: nailArt, category: "nails", title: "Elegant Nail Art" },
    { id: 3, image: mehendiArt, category: "mehendi", title: "Arabic Mehendi Style" },
    { id: 4, image: nailArt, category: "nails", title: "Festival Nail Design" },
    { id: 5, image: mehendiArt, category: "mehendi", title: "Traditional Patterns" },
    { id: 6, image: nailArt, category: "nails", title: "Modern Nail Art" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-terracotta to-gold bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful mehendi designs and stunning nail art creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-gold-foreground font-semibold text-lg mb-1">{item.title}</h3>
                  <span className="text-gold text-sm uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Love what you see?</p>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-terracotta to-gold text-gold-foreground px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
          >
            Book Your Session Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;