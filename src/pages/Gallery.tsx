
import { useState, useEffect } from 'react';
import { galleryImages } from '@/data/galleryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Animation setup for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const elements = document.querySelectorAll('.appear-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 appear-on-scroll">
            Captures
          </h1>
          
          <p className="text-center text-foreground/80 max-w-3xl mx-auto mb-12 appear-on-scroll">
            Explore moments captured through our lens. Each photograph tells a story of campus life, events, and the vibrant MIT community.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`group relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer appear-on-scroll ${
                  image.span === 'col' ? 'md:col-span-2' : 
                  image.span === 'row' ? 'md:row-span-2' : 
                  image.span === 'both' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm opacity-80">Photo by</p>
                    <p className="font-medium">{image.photographer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full z-[60]"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl p-2 hover:bg-white/10 rounded-full z-[60]"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="relative max-w-7xl max-h-[90vh] overflow-hidden">
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="max-h-[90vh] max-w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <p className="font-medium text-lg">{galleryImages[currentImage].alt}</p>
              <p className="text-sm opacity-80">Photo by {galleryImages[currentImage].photographer}</p>
            </div>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl p-2 hover:bg-white/10 rounded-full z-[60]"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Gallery;
