import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, TrendingUp, Users, Target, Rocket, ArrowRight } from 'lucide-react';

export const Enterprise: React.FC = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Years of Experience', value: '13+', icon: <TrendingUp className="w-6 h-6 text-purple-600" /> },
    { label: 'Growing Businesses', value: '1500+', icon: <Users className="w-6 h-6 text-purple-600" /> },
    { label: 'Expert Specialists', value: '50+', icon: <Target className="w-6 h-6 text-purple-600" /> },
    { label: 'Success Rate', value: '98%', icon: <Rocket className="w-6 h-6 text-purple-600" /> }
  ];

  const features = [
    { title: 'Results-Driven Strategies', desc: 'Focusing on conversions and high-intent ROI, not just traffic.' },
    { title: 'Industry Experts', desc: 'A dedicated team of certified SEO, PPC, and social specialists.' },
    { title: 'Custom Solutions', desc: 'Tailored enterprise architectures to fit unique business needs.' },
    { title: 'Market Trends', desc: 'Staying ahead of the curve with AI-driven marketing insights.' }
  ];

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Representation */}
          <div 
            className={`w-full lg:w-1/2 relative opacity-0-init ${
              isVisible ? 'animate-fade-in-up' : ''
            }`}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Enterprise Team" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent mix-blend-multiply transition-opacity duration-500" />
            </div>
            
            {/* Abstract Background Element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-0 opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0 opacity-60" />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className={`opacity-0-init ${
              isVisible ? 'animate-fade-in-right' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-100 rounded-full shadow-sm">
                About Our Enterprise
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Best Digital Marketing Company <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                  for Global Scalability
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Viral Post Media is a leading digital marketing powerhouse with 13+ years of collective expertise in SEO, 
                Google Ads, and Enterprise Branding. We represent the gold standard for over 1,500+ 
                growing businesses, providing the strategic architecture required to dominate modern 
                digital landscapes with measurable precision.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group cursor-default">
                    <div className="mt-1 bg-purple-50 p-2 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="flex justify-center mb-3 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-start">
                 <a href="#/about" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-4 transition-all group">
                    Read Our Full Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                 </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
