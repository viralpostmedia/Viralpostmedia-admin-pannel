import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Layout, Palette, Zap, ShieldCheck } from 'lucide-react';
import buildexImage from '../assets/projects/buildex.png';
import buildexLogo from '../assets/projects/buildex_logo.png';

const PROJECTS = [
  {
    id: 'buildex',
    title: 'BuildexIndia',
    category: 'Full Branding & Marketplace',
    description: 'Engineering India’s premier construction material ecosystem. We developed the complete "BK" identity and a high-performance marketplace enabling thousands of contractors to procure materials and book civil services seamlessly.',
    image: buildexImage,
    tags: ['Next.js', 'Brand Identity', 'Marketplace Architecture'],
    metrics: ['40% Increase in Bookings', '150k+ Monthly Visits'],
    color: 'from-orange-500 to-amber-600',
    link: 'https://buildexindia.com/'
  }
];

export const PortfolioPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white min-h-screen selection:bg-purple-100 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dynamic Header */}
      <section className="pt-40 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white text-slate-900 border border-slate-200 text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
            <Zap className="w-4 h-4 text-purple-600" />
            VPM Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
            Proven <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-cyan-500">Global Impact.</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            From industrial marketplaces to luxury retail, we engineer the digital infrastructure that drives high-growth brands forward.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-40">
          {PROJECTS.map((project, i) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)] group-hover:-translate-y-4">
                  <div className={`absolute inset-0 bg-linear-to-tr ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-video object-cover transition-transform duration-2000 group-hover:scale-110" 
                  />
                  {project.id === 'buildex' && (
                    <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10 transition-transform duration-700 group-hover:scale-105">
                      <div className="bg-white/95 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border border-white/50 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] min-w-[250px]">
                        <img src={buildexLogo} alt="Buildex Logo" className="w-[200px] md:w-[280px] h-auto object-contain" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-8 left-8 flex gap-3 z-20">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm border border-slate-100">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div>
                  <div className={`text-sm font-black uppercase tracking-[0.3em] mb-4 bg-linear-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.metrics.map(metric => (
                    <div key={metric} className="flex gap-3 items-center">
                       <CheckSquare className="w-5 h-5 text-purple-600" />
                       <span className="text-sm font-bold text-slate-800">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-8">
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-black text-slate-900 hover:text-purple-600 transition-all group"
                    >
                      Visit Platform <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  <a 
                    href="#/proposal" 
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-sm hover:scale-105 transition-all shadow-xl`}
                  >
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Technical Excellence.</h2>
            <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto italic">
              "We don't just build websites; we build distribution powerhouses that define industry standards."
            </p>
         </div>

         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
               <Layout className="w-10 h-10 text-cyan-500 mb-8" />
               <h3 className="text-2xl font-bold mb-4 text-slate-900">Marketplace Logic</h3>
               <p className="text-slate-600 font-light leading-relaxed">Engineered complex category systems and transactional flows for multi-vendor industrial platforms.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
               <Palette className="w-10 h-10 text-purple-500 mb-8" />
               <h3 className="text-2xl font-bold mb-4 text-slate-900">Brand Systems</h3>
               <p className="text-slate-600 font-light leading-relaxed">Developing cohesive visual languages that scale across digital, social, and physical environments.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
               <ShieldCheck className="w-10 h-10 text-indigo-500 mb-8" />
               <h3 className="text-2xl font-bold mb-4 text-slate-900">Performance Tech</h3>
               <p className="text-slate-600 font-light leading-relaxed">Achieving sub-second load times on heavy data-driven dashboards and high-traffic stores.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

// Helper for check icon
const CheckSquare = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);
