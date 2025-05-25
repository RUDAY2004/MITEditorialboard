import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ArticlesSection from '@/components/ArticlesSection';
import GallerySection from '@/components/GallerySection';
import DomainsSection from '@/components/DomainsSection';
import Footer from '@/components/Footer';
import ArtsAndGraphicsSection from '@/components/ArtsAndGraphicsSection';
import ContactSection from '@/components/ContactSection';

import { motion } from 'framer-motion';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  const [customCursor, setCustomCursor] = useState({ x: -100, y: -100, hover: false });
  
  

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCustomCursor({
        x: e.clientX,
        y: e.clientY,
        hover: customCursor.hover
      });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLButtonElement || 
        e.target instanceof HTMLAnchorElement ||
        (e.target instanceof HTMLElement && (
          e.target.parentElement instanceof HTMLButtonElement ||
          e.target.parentElement instanceof HTMLAnchorElement
        ))
      ) {
        setCustomCursor(prev => ({ ...prev, hover: true }));
      } else {
        setCustomCursor(prev => ({ ...prev, hover: false }));
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    // Scroll animation observer setup
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
      }
    );
    
    const elements = document.querySelectorAll('.appear-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // For smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [customCursor.hover]);

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Custom cursor */}
      <div 
        className={`custom-cursor ${customCursor.hover ? 'hover' : ''}`} 
        style={{ 
          left: `${customCursor.x}px`, 
          top: `${customCursor.y}px`,
        }}
      />
      
      <Navbar />
      <motion.main
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Hero aboutRef={aboutRef} />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <AboutSection ref={aboutRef} />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <TeamSection />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <ArticlesSection />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <ArtsAndGraphicsSection />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <GallerySection />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <DomainsSection />
          <ContactSection />
        </motion.div>
      </motion.main>
      
      <Footer />
    </>
  );
};

export default Index;
