import { domains } from '@/data/domainsData';

export default function DomainsSection() {
  return (
    <section id="domains" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-6 appear-on-scroll">
          <span className="fancy-underline">Our Domains</span>
        </h2>
        
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-10 appear-on-scroll">
          Discover the specialized teams that bring MIT Edboard's vision to life through diverse skills and expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border shadow-md hover:shadow-lg shadow-white/60 hover:shadow-white/80 transition-all duration-200 hover:bg-card hover:-translate-y-1 appear-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-edboard-accent/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-edboard-accent/30 transition-colors">
                {domain.icon && <domain.icon className="h-8 w-8 text-edboard-accent" />}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{domain.name}</h3>
              <p className="text-foreground/80">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-edboard-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-edboard-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
    </section>
  );
}