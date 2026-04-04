import React, { useEffect, useRef, useState } from 'react';
import { framesData } from '../../data/frames';

export const VpmFrames: React.FC<{ variant?: 'dark' | 'light' | 'grid' }> = ({ variant = 'dark' }) => {
  const isLight = variant === 'light';
  const isGrid = variant === 'grid';
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio"
      ref={sectionRef} 
      className={`relative py-16 md:py-32 overflow-hidden transition-colors duration-1000 ${isLight ? 'bg-white' : 'bg-[#0a062e]'}`}
    >
      {/* Background glowing orbs */}
      {!isLight && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
        </>
      )}
      {isLight && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[150px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 md:mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span className={`inline-block py-2 px-6 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm ${
            isLight ? 'bg-purple-50 text-purple-600 border border-purple-100' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]'
          }`}>
            VPM Frames Portfolio
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-8 tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Explore Our <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-cyan-500">Distribution Hubs</span>
          </h2>
          <p className={`text-base md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isLight ? 'text-slate-500' : 'text-purple-200/70'}`}>
            Beyond simple marketing, we own a proprietary network of audience-centric frames across massive digital verticals.
          </p>
        </div>

        {/* Grid Variant (Organized Tall OS Metro Tiles) */}
        {isGrid && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 p-2 md:p-4 bg-slate-900/40 rounded-3xl border border-white/5 shadow-2xl">
            {framesData.map((frame, index) => {
              const Icon = frame.icon;
              return (
                <a
                  key={index}
                  href={`#/frame/${frame.id}`}
                  className="group relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 opacity-0-init animate-fade-in-up active:scale-[0.97] ring-1 ring-white/10 hover:ring-2 hover:ring-cyan-400/50 block w-full bg-slate-800"
                  style={{ animationDelay: `${(index % 10) * 30}ms` }}
                >
                  {/* Background Image - Tile Layout */}
                  <img 
                    src={frame.image} 
                    alt={frame.name} 
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover origin-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
                  />
                  
                  {/* Flat Transparent Overlay for OS Tile Depth */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-300" />
                  
                  {/* Metro Interface Content Overlay */}
                  <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-between">
                     {/* Top Badge / Icon Corner (OS style) */}
                     <div className="flex justify-end">
                        <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 group-hover:bg-cyan-500 transition-colors duration-300 shadow-xl">
                           <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                     </div>
                     
                     {/* Bottom Info Section - OS Live Tile Format */}
                     <div className="transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                           <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-cyan-400 drop-shadow-md">
                              Platform Hub
                           </span>
                           <div className="h-px w-6 bg-cyan-500/80" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight drop-shadow-lg mb-2">
                           {frame.name}
                        </h4>
                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 line-clamp-3">
                           {frame.description}
                        </p>
                     </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Informational Inventory List (Classic Style) */}
        {!isGrid && (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 border-t pt-12 ${isLight ? 'border-slate-100' : 'border-white/5'}`}>
            {framesData.map((frame, index) => {
              const Icon = frame.icon;
              return (
                <a
                  key={index}
                  href={`#/frame/${frame.id}`}
                  className={`group flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 opacity-0-init ${isVisible ? 'animate-fade-in-up' : ''} ${
                    isLight ? 'hover:bg-slate-50 border border-transparent hover:border-slate-200' : 'hover:bg-white/[0.03]'
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${
                    isLight 
                      ? 'bg-purple-100 border-purple-200 text-purple-600' 
                      : 'bg-linear-to-br from-purple-500/20 to-cyan-500/20 border-white/5 text-cyan-400'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center gap-3">
                      <h4 className={`font-extrabold text-lg tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {frame.name}
                      </h4>
                      <div className={`h-px flex-grow transition-colors hidden sm:block ${isLight ? 'bg-slate-200 group-hover:bg-purple-300' : 'bg-white/5 group-hover:bg-cyan-500/30'}`} />
                      <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        View Frame Detail
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed font-light transition-colors ${
                      isLight ? 'text-slate-500 group-hover:text-slate-800' : 'text-purple-100/60 group-hover:text-purple-100/90'
                    }`}>
                      {frame.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
