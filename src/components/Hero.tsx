import { useEffect, useRef, useState } from 'react';
import TypingAnimation from './TypingAnimation';

import ParticleAnimation from '../components/ui/ParticleAnimation'; 



interface HeroProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

export default function Hero({ aboutRef }: HeroProps) {
  
  const [showFullText, setShowFullText] = useState(false);
   // Hook to get reference
  const scrollToSection = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Ensures it scrolls to the top of the section
    });
  };

  useEffect(() => {
    // Show the full description text after typing animation is complete
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 2500); // Wait for typing to complete
    
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
      <ParticleAnimation />
      
      <div className="absolute inset-0 bg-gradient-to-b z-[1]"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-4 pb-16">
        <h1 className="heading-1 mb-4 sm:mb-6 md:mb-8 text-white">
          <span className="typing-container">
            <TypingAnimation 
              text="MIT EDITORIAL BOARD" 
              typingSpeed={100} 
              delay={500}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-wide shimmer-text break-words"
            />
          </span>
        </h1>
        
        <p className={`text-sm sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-12 px-2 sm:px-6 transition-opacity duration-1000 ${showFullText ? 'opacity-100' : 'opacity-0'}`}>
          Welcome to the MIT Editorial Board, the creative hub and driving force behind the Manipal Institute of Technology's official student body and yearbook committee.
        </p>
        
        <div className={`transition-all duration-1000 transform ${showFullText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-white hover:bg-blue-100 text-[#1a1f2c] font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105" onClick={scrollToSection}>
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
