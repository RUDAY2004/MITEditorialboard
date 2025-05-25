import { useEffect } from 'react';
import { teamMembersData } from '@/data/teamData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Team = () => {
  useEffect(() => {
    // Animation setup for elements
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
    <>
      <Navbar />

      <div className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Team Photo Hero */}
          <section className="mb-16 appear-on-scroll">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="public/TeamImage.jpeg" 
                alt="MIT Editorial Board Team" 
                className="w-full h-[400px] md:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent flex items-end">
                <div className="p-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Meet Our Team</h1>
                  <p className="text-xl text-white/80 max-w-2xl">
                    The passionate individuals who bring creativity to life at MIT Editorial Board.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Quote */}
          <section className="text-center mb-16 appear-on-scroll">
            <blockquote className="text-2xl md:text-3xl italic font-serif text-foreground/80">
              "A team is not just a group of people, but a family brought together by shared dreams."
            </blockquote>
          </section>

          {/* Team Members by Department */}
          <section>
            {Object.entries(teamMembersData).map(([department, members], index) => (
              <div 
                key={department} 
                className="mb-16 appear-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="fancy-underline">{department}</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                  {members.map((member, idx) => (
                    <div 
                      key={idx} 
                      className="group relative bg-card rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-border"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      {/* Front */}
                      <div className='w=24 h=24 rounded-full'>
                        <div className="relative z-10 h-full flex">
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-edboard-accent font-medium mb-2">{member.position}</p>
                            <p className="italic text-foreground/80 text-base md:text-lg">
                              "{member.quote}"
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Removed hover quote overlay */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
