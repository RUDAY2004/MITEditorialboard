
import { articles } from '@/data/articlesData';

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-6 appear-on-scroll">
          <span className="fancy-underline">Featured Articles</span>
        </h2>
        
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-10 appear-on-scroll">
          Explore our collection of thought-provoking articles covering campus life, student achievements, and more.
        </p>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {articles.map((article, index) => (
            <div 
              key={article.id}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 appear-on-scroll ${
                article.size === 'big' ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 sm:h-64 md:h-full">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl md:text-2xl text-white font-bold mb-2">{article.title}</h3>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
