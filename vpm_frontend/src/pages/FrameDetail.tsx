import React, { useEffect, useState } from 'react';
import { framesData } from '../data/frames';
import { ArrowLeft, Send, Sparkles, Target, Zap } from 'lucide-react';

export const FrameDetail: React.FC = () => {
  const [frame, setFrame] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const slug = hash.split('/').pop();
      const found = framesData.find(f => f.id === slug);
      setFrame(found || null);
      window.scrollTo(0, 0);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('hashchange', handleHash);
      clearTimeout(timer);
    };
  }, []);

  if (!frame) return (
    <div className="pt-40 text-center min-h-screen">
      <h2 className="text-2xl font-bold">Frame not found.</h2>
      <a href="#/services" className="text-purple-600 mt-4 inline-block underline">Return to Services</a>
    </div>
  );

  const Icon = frame.icon;

  return (
    <div className={`pt-32 pb-24 bg-white min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <div className="mb-12">
          <a href="#/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-600 font-bold transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Back to Distribution Hubs
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Content Side */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 py-2 px-6 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 mb-8">
                 <Icon className="w-6 h-6" />
                 <span className="font-black uppercase tracking-widest text-xs">Proprietary VPM Frame</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                {frame.name} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-cyan-500">Distribution.</span>
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                {frame.description}
              </p>
            </div>

            <div className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl" />
               <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-600" />
                  Strategic Impact
               </h3>
               <p className="text-lg text-slate-600 leading-relaxed font-light">
                 {frame.fullPara}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400">
                     <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">Guaranteed Reach</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">We bypass traditional ad saturation by deploying directly into high-intent audience groups.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-purple-400">
                     <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">High Authority</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Position your brand as the definitive leader within this specific digital vertical.</p>
               </div>
            </div>
          </div>

          {/* Engagement Side - Sticky Form */}
          <div className="lg:sticky lg:top-40">
            <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
               
               <h2 className="text-3xl font-black mb-8 leading-tight">
                  Ready to deploy <br />
                  into this <span className="text-cyan-400">Hub?</span>
               </h2>
               
               <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Brand Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Proposed Objective</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer">
                       <option className="bg-slate-900">Lead Generation</option>
                       <option className="bg-slate-900">Brand Authority</option>
                       <option className="bg-slate-900">Market Penetration</option>
                    </select>
                  </div>
                  
                  <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-cyan-400 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group mt-8">
                    Request Entry
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest mt-6">
                    Professional Distribution Inquiry
                  </p>
               </form>
            </div>
            
            <div className="mt-12 p-8 border border-slate-100 rounded-[2.5rem] flex items-center gap-6 group hover:bg-slate-50 transition-all cursor-default">
               <div className="w-16 h-16 shrink-0 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
               </div>
               <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Status</div>
                  <div className="text-xl font-bold text-slate-900">Active High-ROI Hub</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
