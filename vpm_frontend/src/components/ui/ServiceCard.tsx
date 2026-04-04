import React from 'react';
import type { ServiceData } from '../../data/servicesData';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceData;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/5 hover:-translate-y-1 overflow-hidden">
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-50 text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 drop-shadow-sm">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-950 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <a href={`#${service.id}`} className="inline-flex items-center text-sm font-semibold text-purple-600 group-hover:text-purple-700">
          Learn more
          <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
};
