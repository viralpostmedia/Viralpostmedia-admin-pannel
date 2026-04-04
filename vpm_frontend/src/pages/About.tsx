import React, { useEffect, useState } from 'react';
import { Target, Shield, Zap, Globe2, BarChart3, Users2, Sparkles, Rocket } from 'lucide-react';

const TEAM_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: 'Years of Growth Engineering', value: '13+', icon: BarChart3 },
    { label: 'Global Enterprise Partners', value: '1,500+', icon: Globe2 },
    { label: 'Total Monthly Impressions', value: '100M+', icon: Zap },
    { label: 'Dedicated Brand Strategists', value: '85+', icon: Users2 },
  ];

  const values = [
    {
      title: 'Precision Distribution',
      desc: 'We don’t just create; we deliver. Our priority distribution network ensures your message lands exactly where it matters most.',
      icon: Target,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      title: 'Data-Driven Intuition',
      desc: 'By blending 13 years of historical data with modern AI analysis, we predict trends before they become noise.',
      icon: Shield,
      color: 'text-cyan-600',
      bg: 'bg-cyan-100'
    },
    {
      title: 'Radical Transparency',
      desc: 'Partnering with VPM means having a clear view of every metric. No hidden costs, no vanity numbers—only measurable growth.',
      icon: Sparkles,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    }
  ];

  return (
    <div className={`bg-white min-h-screen selection:bg-purple-100 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className={`transition-all duration-1000 transform animate-fade-in-up`}>
            <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-slate-50 text-slate-900 border border-slate-200 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-purple-600" />
              The Viral Post Media Story
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-indigo-600 to-cyan-500">Digital Scale.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-light italic border-l-4 border-purple-500 pl-8">
                "We didn’t set out to be just another marketing company. We set out to be the engine that drives high-impact brands toward global dominance."
              </p>
              <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                <p>
                  Founded over a decade ago, Viral Post Media (VPM) emerged from a simple observation: most brands struggle not with creativity, but with **distribution**. We realized that in a world of infinite noise, visibility isn't earned—it is engineered.
                </p>
                <p>
                  Today, VPM is a premier Digital Marketing Company that bridges the gap between enterprise-level strategy and high-energy distribution. We own the largest network of audience-centric "Frames" internationally, giving our partners an unfair advantage in the attention economy.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="absolute -inset-4 bg-linear-to-tr from-purple-500/10 to-transparent rounded-[3rem] blur-2xl" />
              <img 
                src={TEAM_IMAGE} 
                alt="VPM Strategy Session"
                className="rounded-[2.5rem] shadow-2xl relative z-10 object-cover aspect-4/3"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 z-20">
                <div className="text-4xl font-black text-slate-900">1.5K+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Partners Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Stats Grid */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-tr from-purple-600/5 via-transparent to-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <stat.icon className="w-8 h-8 text-cyan-400" />
                <div className="text-5xl md:text-6xl font-black tracking-tighter">{stat.value}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique "Why VPM" Detailed Information */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
           <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Our Core <span className="text-purple-600 underline decoration-cyan-500/30">Philosophy.</span></h2>
           <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
             We specialize in the science of attention. By combining proprietary distribution algorithms with world-class narrative design, we create growth that is both explosive and sustainable.
           </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
           {values.map((val, i) => (
             <div key={i} className="group p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/50 hover:border-purple-200 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl ${val.bg} ${val.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                   <val.icon className="w-8 h-8 text-6xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{val.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">
                  {val.desc}
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* Corporate Mission Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <h3 className="text-4xl font-black text-slate-900 mb-8">Empowering <br />Enterprise Vision.</h3>
               <div className="space-y-6 text-slate-500 leading-relaxed font-light text-lg">
                  <p>
                    Viral Post Media is committed to maintaining a position of leadership in the global digital landscape. We empower our partners through radical innovation and technical superiority.
                  </p>
                  <p>
                    Every brand we partner with receives a customized "Growth Blueprint" that encompasses social dominance, search technicality, and conversion optimization.
                  </p>
                  <div className="pt-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <span className="font-bold text-slate-800 uppercase tracking-widest text-sm">Strategic Discovery & Internal Audits</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-r from-indigo-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <span className="font-bold text-slate-800 uppercase tracking-widest text-sm">Deployment of Proprietary VPM Frames</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <span className="font-bold text-slate-800 uppercase tracking-widest text-sm">Iterative Scaling & Performance Tuning</span>
                    </div>
                  </div>
               </div>
            </div>
            <div className="bg-slate-900 p-16 rounded-[4rem] text-white space-y-10 relative">
               <div className="absolute top-10 right-10 opacity-20"><Rocket className="w-24 h-24" /></div>
               <h4 className="text-3xl font-black">Join the <br />Distribution Revolution.</h4>
               <p className="text-purple-100/70 font-light text-xl leading-relaxed">
                 We are always looking for visionary brands who are ready to break boundaries and define their own digital futures.
               </p>
               <a href="#/contact" className="inline-block px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-purple-400 hover:text-white transition-all shadow-xl shadow-white/5">
                 Contact Global HQ
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};
