import { Download, BookOpen, Calendar } from 'lucide-react';
import { useState } from 'react';
import { YearbookData } from '@/data/YearbookData';

interface YearbookCardProps {
  yearbook: YearbookData;
  index: number;
}

const YearbookCard = ({ yearbook, index }: YearbookCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Open PDF in new tab
      window.open(yearbook.pdfUrl, '_blank');
    } catch (error) {
      console.error('Error opening PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getGradientClass = (theme: string) => {
    switch (theme) {
      case 'Blue Ocean':
        return 'from-blue-600 to-cyan-500';
      case 'Purple Dreams':
        return 'from-purple-600 to-pink-500';
      case 'Green Horizons':
        return 'from-green-600 to-teal-500';
      case 'Golden Memories':
        return 'from-orange-600 to-yellow-500';
      default:
        return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(yearbook.theme)} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Cover Image Area */}
      <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden">
        {/* Cover Image fills the area */}
        <img 
          src={yearbook.coverImage} 
          alt={yearbook.title + ' Cover'} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 z-20">
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">{yearbook.year}</span>
        </div>

        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 z-20">
          <span className="text-white text-sm font-medium">{yearbook.pages} pages</span>
        </div>
        {/* Year badge in bottom right */}
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center z-20">
          <span className="text-xs font-bold text-white">{yearbook.year.slice(-2)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getGradientClass(yearbook.theme)}`} />
            <span className="text-white/60 text-sm font-medium">{yearbook.theme}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {yearbook.title}
          </h3>
          <p className="text-white/70 leading-relaxed">
            {yearbook.description}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className={`w-full bg-gradient-to-r ${getGradientClass(yearbook.theme)} text-white font-semibold py-3 px-6 rounded-xl 
            hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 
            flex items-center justify-center gap-2 group-hover:scale-105
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Opening...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              View Yearbook
            </>
          )}
        </button>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default YearbookCard;