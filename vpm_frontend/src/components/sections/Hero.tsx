import React from 'react';
import { Section } from '../layout/Section';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <Section 
      id="hero" 
      className="relative bg-purple-950 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      ariaLabel="Hero Region"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/50 border border-purple-800 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>Next-Generation Digital Company</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#22d3ee] via-[#a855f7] to-[#d946ef] block mb-4">
            Viral Post Media
          </span>
          Scale your brand with <br className="hidden md:block"/>
          data-driven accuracy
        </h1>
        
        <p className="text-lg md:text-xl text-purple-200 mb-10 max-w-2xl leading-relaxed">
          We combine cutting-edge AI technology with proven marketing strategies to generate qualified leads and dominating market presence for B2B and e-commerce brands.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#/proposal" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]">
            Start Scaling Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#/services" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white hover:bg-purple-900/50 transition-colors border border-transparent hover:border-purple-800">
            View Our Services
          </a>
        </div>
      </div>
    </Section>
  );
};
