import React, { useEffect, useState } from 'react';
import { Services as ServicesSection } from '../components/sections/Services';
import { VpmFrames } from '../components/sections/VpmFrames';
import { Zap, ArrowRight } from 'lucide-react';

// Guaranteed high-impact corporate growth visualization
const HERO_IMAGE_PATH = '/images/ascending_graph.png';

export const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* High-End Hero with Dynamic Image and Animated Stats */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div className="text-left">
            <div 
              className={`inline-flex items-center gap-2 py-2 px-6 rounded-full bg-slate-50 text-purple-600 border border-purple-100/50 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-sm transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <Zap className="w-4 h-4" />
              Services & VPM Frames
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-none transition-all duration-1000 delay-150 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-indigo-600 to-cyan-500">Digital Scale.</span>
            </h1>
            
            <p className={`text-lg md:text-2xl text-slate-500 leading-relaxed max-w-xl mb-12 font-light transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Viral Post Media engineers propriety distribution systems that guarantee visibility. From high-impact services to our massive VPM Frame network, we own the audience.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#/contact" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-purple-600 transition-all flex items-center gap-2 group shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* New Image/Illustration Side */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-6'}`}>
            <div className="absolute -inset-4 bg-linear-to-tr from-purple-500/10 to-cyan-500/10 rounded-[4rem] blur-3xl -z-10 animate-pulse" />
            <img 
              src={HERO_IMAGE_PATH} 
              alt="Digital Marketing Ecosystem" 
              className="w-full h-auto rounded-[3.5rem] shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Floating stats badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 animate-bounce">
               <div className="text-3xl font-black text-slate-900">100M+</div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Monthly Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES - High-Impact Dark Mode Cards */}
      <div className="relative group/services">
        {/* Transitional Header specifically for Services */}
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-white to-transparent z-10 pointer-events-none" />
        <ServicesSection />
      </div>

      {/* VPM FRAMES - Informational List in Light Theme */}
      <div className="relative">
        <VpmFrames variant="light" />
      </div>

      {/* Simplified Bottom CTA */}
      <section className="py-32 bg-slate-50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
             Ready to deploy your <span className="bg-linear-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">brand upgrade?</span>
           </h2>
           <a 
             href="#/contact" 
             className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-purple-600 hover:scale-105 transition-all shadow-xl shadow-slate-200"
            >
             Initialize Partnership
           </a>
        </div>
      </section>
    </div>
  );
};
