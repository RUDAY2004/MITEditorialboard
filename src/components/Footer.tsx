


export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="public/logo.png" 
                alt="MIT Editorial Board" 
                className="h-14 w-auto mr-3"
              />
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              The MIT Editorial Board is the creative hub behind Manipal Institute of Technology's yearbook and student publications. We capture memories and shape narratives that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mit.edboard?igsh=bmxmaGk0cWJ2ankz" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-colors hover:bg-edboard-accent hover:text-white hover:border-edboard-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <path d="M17.5 6.5L17.5 6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/the-mit-editorial-board/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-colors hover:bg-edboard-accent hover:text-white hover:border-edboard-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-edboard-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-edboard-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#team" className="text-foreground/70 hover:text-edboard-accent transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#gallery" className="text-foreground/70 hover:text-edboard-accent transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#domains" className="text-foreground/70 hover:text-edboard-accent transition-colors">Domains</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-edboard-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-0.5 text-edboard-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-foreground/70">
                  MIT Manipal, Karnataka, India - 576104
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-0.5 text-edboard-accent">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-foreground/70">
                  mitedboard@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-0.5 text-edboard-accent">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-foreground/70">
                  +91 9876543210
                </span>
              </li>
            </ul>
            
            
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} MIT Editorial Board. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 text-sm hover:text-edboard-accent transition-colors">Privacy Policy</a>
            <span className="mx-2 text-foreground/60">•</span>
            <a href="#" className="text-foreground/60 text-sm hover:text-edboard-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
