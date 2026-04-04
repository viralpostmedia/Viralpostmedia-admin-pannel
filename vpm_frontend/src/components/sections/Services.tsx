import React, { useEffect, useRef, useState } from 'react';
import { servicesData } from '../../data/servicesData';
import type { ServiceData } from '../../data/servicesData';

const ServiceInfoRow: React.FC<{ service: ServiceData; index: number }> = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (rowRef.current) observer.unobserve(rowRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={rowRef}
      className={`relative py-12 lg:py-24 border-b border-white/5 last:border-0 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Info Side */}
        <div className="flex-1 space-y-6 lg:space-y-8 w-full">
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="text-5xl lg:text-6xl font-black text-cyan-400/40 select-none">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            <div className={`p-3 lg:p-4 rounded-2xl bg-linear-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/20`}>
              <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 tracking-tight">{service.title}</h3>
            <p className="text-purple-100/60 text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
              {service.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {service.tags && service.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs"
              >
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-1 w-full group">
          <div className="relative aspect-16/9 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a062e] via-transparent to-transparent opacity-60" />
            
            {/* Animated Glow overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-purple-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          if (headerRef.current) observer.unobserve(headerRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-purple-950 to-[#0a062e] text-white overflow-hidden relative"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-block py-2 px-6 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 md:mb-6 tracking-tight px-2">
            Comprehensive growth solutions.
          </h2>
          <p className="mt-4 text-purple-200/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            We provide end-to-end digital marketing architectures designed to capture attention, nurture leads, and drive measurable revenue.
          </p>
        </div>

        <div className="divide-y divide-white/5">
          {servicesData.map((service, index) => (
            <ServiceInfoRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
