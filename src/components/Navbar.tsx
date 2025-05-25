import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

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
      <div className="container mx-auto px-4 flex justify-center items-center space-x-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="logo.png"
            alt="MIT Editorial Board"
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
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
                  <a href="/public/Netflix Newsletter FInal.pdf" target="_blank" className="block px-4 py-2 hover:bg-muted hover:text-foreground transition-colors">May 2025</a>
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
      </div>
    </header>
  );
}




// Order version
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown, X } from "lucide-react";


// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [newsletterDropdownOpen, setNewsletterDropdownOpen] = useState(false);
  

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
//         ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md py-3' : 'py-5 bg-background/50 backdrop-blur-sm'}
//       `}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img 
//             src="logo.png" 
//             alt="MIT Editorial Board" 
//             className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" 
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           <Link to="/" className="link-hover text-foreground font-medium">Home</Link>
//           <Link to="/" className="link-hover text-foreground font-medium">Home</Link>
//           <Link to="/team" className="link-hover text-foreground font-medium">Team</Link>
          
//           {/* Newsletter Dropdown */}
//           <div className="relative">
//       <button
//         className="flex items-center link-hover text-foreground font-medium"
//         onClick={() => setNewsletterDropdownOpen((prev) => !prev)}
//       >
//         <span>Newsletters</span>
//         <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${newsletterDropdownOpen ? "rotate-180" : ""}`} />
//       </button>
      
//       {newsletterDropdownOpen && (
//         <div
//           className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border animate-fade-in"
//           onMouseEnter={() => setNewsletterDropdownOpen(true)}
//           onMouseLeave={() => setNewsletterDropdownOpen(false)}
//         >
//           <div className="py-2 rounded-md">
//             <a href="/public/HQFINALfinalfinal_compressed.pdf" target="_blank" className="block px-4 py-2 hover:bg-muted hover:text-foreground transition-colors">February 2024</a>
//             <a href="/public/September_Newsletter.pdf" target="_blank" className="block px-4 py-2 hover:bg-muted hover:text-foreground transition-colors">September 2024</a>
//           </div>
//         </div>
//       )}
//     </div>
          
//           {/* Yearbook Dropdown */}
//           <Link to="/yearbook" className="link-hover text-foreground font-medium">Yearbook</Link>
          
//           <Link to="/gallery" className="link-hover text-foreground font-medium">Gallery</Link>
//           <Link to="/contact" className="link-hover text-foreground font-medium">Contact us</Link>
//           <a 
//             href="/apply" 
//             className="bg-edboard-accent text-white font-medium px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1"
//             onClick={(e) => { e.preventDefault(); alert("Sorry form closed for now!"); }}
//           >
//             Apply
//           </a>
          
          
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden flex items-center space-x-4">
          
//           <button 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="text-foreground p-2 focus:outline-none"
//           >
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <div className="space-y-1.5">
//                 <span className="block w-6 h-0.5 bg-foreground"></span>
//                 <span className="block w-6 h-0.5 bg-foreground"></span>
//                 <span className="block w-6 h-0.5 bg-foreground"></span>
//               </div>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`fixed top-[72px] left-0 right-0 bottom-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden transition-transform transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
//           <Link 
//             to="/" 
//             className="text-xl font-medium border-b border-border pb-3"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link 
//             to="/team" 
//             className="text-xl font-medium border-b border-border pb-3"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Team
//           </Link>
          
//           {/* Mobile Newsletters Dropdown */}
//           <div className="border-b border-border pb-3">
//             <button 
//               className="flex items-center justify-between w-full text-xl font-medium"
//               onClick={() => setNewsletterDropdownOpen(!newsletterDropdownOpen)}
//             >
//               <span>Newsletters</span>
//               <ChevronDown className={`h-5 w-5 transition-transform ${newsletterDropdownOpen ? 'rotate-180' : ''}`} />
//             </button>
//             {newsletterDropdownOpen && (
//               <div className="mt-3 pl-4 space-y-3">
//                 <a 
//                   href="/HQFINALfinalfinal_compressed.pdf" 
//                   target="_blank" 
//                   className="block text-foreground/80"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   February 2024
//                 </a>
//                 <a 
//                   href="/September_Newsletter.pdf" 
//                   target="_blank" 
//                   className="block text-foreground/80"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   September 2024
//                 </a>
//               </div>
//             )}
//           </div>
          
//           <Link 
//             to="/yearbook" 
//             className="text-xl font-medium border-b border-border pb-3"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Yearbook
//           </Link>
          
//           <Link 
//             to="/gallery" 
//             className="text-xl font-medium border-b border-border pb-3"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Gallery
//           </Link>
//           <Link 
//             to="/contact" 
//             className="text-xl font-medium border-b border-border pb-3"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Contact us
//           </Link>
//           <a 
//             href="/apply" 
//             className="bg-edboard-accent text-white font-medium px-5 py-3 rounded-md text-center shadow-md"
//             // onClick={() => setMobileMenuOpen(false)}
//             onClick={(e) => { e.preventDefault(); alert("Sorry form closed for now!"); }}
//           >
//             Apply
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }
