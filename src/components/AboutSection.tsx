
import { useEffect, forwardRef  } from "react";


const AboutSection =  forwardRef<HTMLDivElement>((_, ref) => {
  
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
      }
    );
    
    const elements = document.querySelectorAll('.appear-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  

  return (
    <section  ref={ref} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-16 relative appear-on-scroll">
          <span className="fancy-underline">What We Do</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="appear-on-scroll">
            <h3 className="heading-3 mb-4 text-edboard-accent">What is EdBoard?</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              The Editorial Board is the creative powerhouse of MIT Manipal, dedicated to documenting and showcasing the vibrant campus life through various mediums. We're responsible for crafting the yearbook that captures the essence of each academic year, publishing regular newsletters that keep the community informed, and creating content that celebrates student achievements.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With a team of passionate writers, photographers, designers, and creative minds, we work collaboratively to create publications that reflect the spirit and culture of MIT Manipal, ensuring that every memorable moment is preserved for years to come.
            </p>
          </div>
          
          <div className="appear-on-scroll">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-edboard-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-edboard-accent/10 rounded-full blur-xl"></div>
              <img 
                src="/Group pic.jpg" 
                alt="Editorial Board Team" 
                className="rounded-lg shadow-xl border border-edboard-accent/20 w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-300"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-lg card-hover appear-on-scroll border border-edboard-accent/10">
            <div className="w-14 h-14 rounded-full bg-edboard-accent/20 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edboard-accent">
                <path d="M7 16h13M7 8h13M7 12h13M3 8h.01M3 12h.01M3 16h.01"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Yearbook Production</h4>
            <p className="text-foreground/80">We design, curate, and publish the annual yearbook, capturing the defining moments and memories of each academic year at MIT Manipal.</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg card-hover appear-on-scroll border border-edboard-accent/10" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-full bg-edboard-accent/20 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edboard-accent">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <path d="M17.5 6.5L17.5 6.5"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Content Creation</h4>
            <p className="text-foreground/80">Our talented team creates engaging articles, photography, videography, and design work that showcases student life and activities.</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg card-hover appear-on-scroll border border-edboard-accent/10" style={{ animationDelay: "0.4s" }}>
            <div className="w-14 h-14 rounded-full bg-edboard-accent/20 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-edboard-accent">
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3">Community Engagement</h4>
            <p className="text-foreground/80">We organize events, photoshoots, and campaigns that bring together the MIT community and create memorable shared experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
});
export default AboutSection;