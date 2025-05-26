import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterDropdownOpen, setNewsletterDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-md py-3" : "py-5 bg-background/50 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="logo.png"
            alt="MIT Editorial Board"
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="link-hover text-foreground font-medium">Home</Link>
          <Link to="/team" className="link-hover text-foreground font-medium">Team</Link>
          
          {/* Newsletter Dropdown */}
          <div className="relative">
            <button
              className="flex items-center link-hover text-foreground font-medium"
              onClick={() => setNewsletterDropdownOpen((prev) => !prev)}
            >
              <span>Newsletters</span>
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${newsletterDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {newsletterDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border animate-fade-in">
                <div className="py-2 rounded-md">
                  <a href="/public/HQFINALfinalfinal_compressed.pdf" target="_blank" className="block px-4 py-2 hover:bg-muted hover:text-foreground transition-colors">February 2024</a>
                  <a href="/public/September_Newsletter.pdf" target="_blank" className="block px-4 py-2 hover:bg-muted hover:text-foreground transition-colors">September 2024</a>
                </div>
              </div>
            )}
          </div>
          
          <Link to="/yearbook" className="link-hover text-foreground font-medium">Yearbook</Link>
          <Link to="/gallery" className="link-hover text-foreground font-medium">Gallery</Link>
          <Link to="/contact" className="link-hover text-foreground font-medium">Contact us</Link>
          <a
            href="/apply"
            className="bg-edboard-accent text-white font-medium px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1"
            onClick={(e) => { e.preventDefault(); alert("Sorry form closed for now!"); }}
          >
            Apply
          </a>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-md z-40">
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button
                className="text-foreground focus:outline-none p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4 bg-background ">
              <Link 
                to="/" 
                className="text-foreground text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/team" 
                className="text-foreground text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              
              {/* Mobile Newsletter Dropdown */}
              <div className="text-center">
                <button
                  className="flex items-center text-foreground text-xl font-medium hover:text-primary transition-colors"
                  onClick={() => setNewsletterDropdownOpen((prev) => !prev)}
                >
                  <span>Newsletters</span>
                  <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${newsletterDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {newsletterDropdownOpen && (
                  <div className="mt-4 space-y-3">
                    <a 
                      href="/public/HQFINALfinalfinal_compressed.pdf" 
                      target="_blank" 
                      className="block text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      February 2024
                    </a>
                    <a 
                      href="/public/September_Newsletter.pdf" 
                      target="_blank" 
                      className="block text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      September 2024
                    </a>
                  </div>
                )}
              </div>
              
              <Link 
                to="/yearbook" 
                className="text-foreground text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Yearbook
              </Link>
              <Link 
                to="/gallery" 
                className="text-foreground text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>
              <a
                href="/apply"
                className="bg-edboard-accent text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1 text-xl"
                onClick={(e) => { 
                  e.preventDefault(); 
                  alert("Sorry form closed for now!"); 
                  setMobileMenuOpen(false);
                }}
              >
                Apply
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}