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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yearbook;
