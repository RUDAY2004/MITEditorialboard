import { useState, useEffect } from 'react';

const ArtsAndGraphicsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const artworks = [
    '/Manipal.jpg',
    '/Manipal.jpg',
    '/Manipal.jpg',
    '/Manipal.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artworks.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Centered Heading */}
        <div className="text-center mb-12 appear-on-scroll">
          <h2 className="text-3xl font-bold">
            <span className="fancy-underline">Arts and Graphics</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="appear-on-scroll">
            <p className="text-foreground/80 mb-4 text-lg">
              Our Arts and Graphics department is the creative powerhouse behind MIT Editorial Board's visual identity. We blend artistic innovation with technical precision to create compelling visual narratives that enhance our publications.
            </p>
            <p className="text-foreground/80 mb-4 text-lg">
              From stunning illustrations to dynamic graphic designs, our team pushes the boundaries of creativity while maintaining the highest standards of professional excellence.
            </p>
            <p className="text-foreground/80 text-lg">
              Each piece we create is a testament to our commitment to visual storytelling and our passion for artistic expression in editorial design.
            </p>
          </div>

          {/* Right side - Carousel */}
          <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl appear-on-scroll">
            <div 
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {artworks.map((artwork, index) => (
                <img
                  key={index}
                  src={artwork}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtsAndGraphicsSection;