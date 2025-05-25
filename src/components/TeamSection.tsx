
import { Link } from 'react-router-dom';
import { teamMembers } from '@/data/teamData';

export default function TeamSection() {
  // Only show executive board members in the preview
  const executiveMembers = teamMembers.filter(member => member.department === "Executive Board");
  const previewMembers = executiveMembers.slice(0, 2); // Show first 2 executive members

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-6 appear-on-scroll">
          <span className="fancy-underline">Meet Our Team</span>
        </h2>
        
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-10 appear-on-scroll">
          Our team consists of passionate individuals across various domains working together to create memorable content and experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-card w-65 h-65 flex flex-col items-center justify-center overflow-hidden transform transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-border appear-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Front */}
              <div className="w-55 h-55  z-10 h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-60 h-60 mt-3 rounded-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                </div>
                <div className="p-6 flex-grow items-center justify-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-edboard-accent font-medium">{member.position}</p>
                </div>
              </div>
              
              {/* Flip effect on hover */}
              {/* <div className="absolute inset-0 bg-edboard-dark/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-lg italic">
                  "{member.quote}"
                </p>
              </div> */}
            </div>
          ))}
          
          {/* Teaser card with link to team page */}
          <div className="group relative bg-edboard-accent/20 rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-edboard-accent/30 flex items-center justify-center appear-on-scroll">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold mb-3">Meet the Full Team</h3>
              <p className="text-foreground/70 mb-6">Discover all the talented individuals who make up the MIT Editorial Board</p>
              <Link 
                to="/team" 
                className="bg-edboard-accent text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1 inline-block"
              >
                View All Team Members
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
