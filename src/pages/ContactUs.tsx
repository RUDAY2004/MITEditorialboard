import React, { useEffect } from 'react';
import ParticleAnimation from '../components/ui/ParticleAnimation'; 
import Navbar from '@/components/Navbar'; 
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs: React.FC = () => {
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

  return (
    <div className="flex items-center justify-center min-h-screen appear-on-scroll">
        <Navbar></Navbar>
      {/* Particle Animation Component */}
      <ParticleAnimation />

      <section className="header fixed w-full bg-[#0f112e] z-5"></section>
      <section id="contact" className="contact-section text-white text-center py-16 appear-on-scroll">
        <div className="contact-container bg-[#1a1c40] mx-auto p-8 max-w-[500px] rounded-lg appear-on-scroll">
          <h2 className="text-2xl font-bold underline mb-4 appear-on-scroll">Connect With Us</h2>
          <div className="intro text-lg mb-4 appear-on-scroll">
            <p>Your thoughts matter to us!</p>
            <p>Got a question?</p>
            <p>Want to share your feedback?</p>
            <p>We'd love to hear from you!</p>
          </div>

          <div className="contact-details mt-8 appear-on-scroll">
            <p>
              Email: <a href="mailto:edboard2024@gmail.com" className="text-blue-400">edboard2024@gmail.com</a>
            </p>

            <div className="social-section mt-8 pb-5 appear-on-scroll">
              <p className="follow-text text-xl font-semibold mb-2">Follow us</p>
              <div className="social-icons flex justify-center gap-5 appear-on-scroll">
              {/* <a href="https://www.facebook.com/MITEditorialBoard" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaFacebook />
              </a> */}
              <a href="https://www.instagram.com/mit.edboard?igsh=MTU5dG9haWFiZ2hhOA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaInstagram />
              </a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaTwitter />
              </a> */}
              <a href="https://www.linkedin.com/company/the-mit-editorial-board" target="_blank" rel="noopener noreferrer" className="hover:text-[#22acf1]">
                <FaLinkedin />
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
