<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import ParticleAnimation from '../components/ui/ParticleAnimation';
import Navbar from '@/components/Navbar';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Yearbook: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Coming Soon';
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, 150);

    const dotsInterval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Navbar />
      <ParticleAnimation />
      <section className="relative flex flex-col items-center text-white text-center px-5">
        <div className="bg-[#1a1c40] max-w-md w-full p-6 rounded-2xl shadow-lg border border-[#22acf1]">
          <h1 className="text-4xl font-bold uppercase relative">Yearbook</h1>
          <div className="w-[80px] h-[4px] bg-[#22acf1] rounded absolute left-1/2 transform -translate-x-1/2 mt-2" />
          <p className="text-2xl font-medium text-[#22acf1] mt-6">
            {text}
            
          </p>
          <div className="flex justify-center mt-2">
            {Array.from({ length: dotCount }, (_, i) => (
              <span key={i} className="w-2 h-2 bg-white rounded-full mx-1 animate-pulse"></span>
            ))}
          </div>
          <p className="mt-4 text-lg font-light">Stay Tuned!</p>
          <div className="mt-8">
            <p className="text-lg">Follow us</p>
            <div className="flex justify-center space-x-6 mt-4 text-2xl">
            <a href="https://www.facebook.com/MITEditorialBoard" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/mit.edboard?igsh=MTU5dG9haWFiZ2hhOA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/the-mit-editorial-board" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaLinkedin />
              </a>
=======
import { useState, useEffect } from 'react';
import { BookOpen, Download, Calendar } from 'lucide-react';
import YearbookCard from '@/components/YearbookCard';
import Navbar from '@/components/Navbar';
import { yearbooksData } from '@/data/YearbookData';

const Yearbook = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  useEffect(() => {
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

  const filteredYearbooks = selectedYear 
    ? yearbooksData.filter(yearbook => yearbook.year === selectedYear)
    : yearbooksData;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 appear-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 appear-on-scroll">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span className="text-white/80 text-sm font-medium">Digital Archive</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent appear-on-scroll">
            MIT YEARBOOKS
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed appear-on-scroll">
            Journey through time with our digital yearbook collection. Each edition captures the spirit, 
            achievements, and memories of our vibrant MIT community.
          </p>

          {/* Year Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 appear-on-scroll">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedYear === null
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              All Years
            </button>
            {yearbooksData.map((yearbook) => (
              <button
                key={yearbook.year}
                onClick={() => setSelectedYear(yearbook.year)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedYear === yearbook.year
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {yearbook.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Yearbooks Grid */}
      <section className="pb-20 px-6 appear-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredYearbooks.map((yearbook, index) => (
              <YearbookCard
                key={yearbook.year}
                yearbook={yearbook}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-t border-white/10 appear-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group appear-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{yearbooksData.length}</h3>
              <p className="text-white/60">Digital Yearbooks</p>
            </div>
            
            <div className="group appear-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">4+</h3>
              <p className="text-white/60">Years Archived</p>
            </div>
            
            <div className="group appear-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
              <p className="text-white/60">Downloads</p>
>>>>>>> origin/sangini
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Yearbook;
=======
export default Yearbook;
>>>>>>> origin/sangini
