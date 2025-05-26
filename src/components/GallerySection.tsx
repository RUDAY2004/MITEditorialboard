
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryImages } from '@/data/galleryData';

export default function GallerySection() {
  // Show a preview of 5 gallery images
  const previewImages = galleryImages.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const elements = document.querySelectorAll('.appear-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-6 appear-on-scroll">
          <span className="fancy-underline">Gallery</span>
        </h2>
        
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-10 appear-on-scroll">
          Explore the visual storytelling of MIT Manipal through our lens. Each photograph captures a unique moment of campus life, events, and the people who make our institution special.
        </p>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {previewImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`group relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.01] hover:shadow-xl appear-on-scroll ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
        
        {/* Link to full gallery */}
        <div className="text-center appear-on-scroll">
          <Link 
            to="/gallery" 
            className="bg-edboard-accent text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1 inline-block"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
