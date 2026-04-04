import React from 'react';
import { Section } from '../components/layout/Section';
import { ShieldAlert, CheckCircle2, Lock, Zap, Target, LayoutTemplate } from 'lucide-react';

const DIGITAL_MARKETING_PACKAGES = [
  {
    title: 'Social Media Marketing',
    subtitle: 'Creative, Consistent & Conversion-Focused',
    features: [
      { text: '15-18 High-Quality Creative Posts', isBlurred: false },
      { text: 'Competitor Analysis', isBlurred: false },
      { text: 'Paid Meta Ads', isBlurred: false },
      { text: 'Strategy & Content Calendar', isBlurred: false },
      { text: 'Social Media Manager Support', isBlurred: true },
    ],
    gradient: 'from-[#0f0a3c] to-purple-700',
    icon: Target,
    slug: 'social-media'
  },
  {
    title: 'Google Ads/PPC Ads',
    subtitle: 'From Clicks to Customers',
    features: [
      { text: 'Ads Account Setup & Audit', isBlurred: false },
      { text: 'Advanced Keyword Research', isBlurred: false },
      { text: 'Conversion Tracking', isBlurred: false },
      { text: 'Audience Targeting Strategies', isBlurred: false },
      { text: 'Ads Specialist Support', isBlurred: true },
    ],
    gradient: 'from-purple-600 to-cyan-500',
    icon: Zap,
    slug: 'google-ads'
  },
  {
    title: 'Search Engine Optimization',
    subtitle: 'From Keywords to Conversions',
    features: [
      { text: 'Free Website Audit', isBlurred: false },
      { text: 'Keyword Research & Strategy', isBlurred: false },
      { text: 'Competitor Analysis & Reporting', isBlurred: false },
      { text: 'High-Quality Backlink Building', isBlurred: false },
      { text: 'Monthly Performance & Ranking Reports', isBlurred: true },
    ],
    gradient: 'from-cyan-500 to-[#0f0a3c]',
    icon: Target,
    slug: 'seo'
  }
];

const WEBSITE_PACKAGES = [
  {
    title: 'Starter Static Website',
    subtitle: 'Perfect for Small Businesses',
    features: [
      { text: 'Delivery Within 3 Working Days', isBlurred: false },
      { text: 'FREE Web Hosting & SSL for 1 year', isBlurred: false },
      { text: '1 Week FREE Support', isBlurred: false },
      { text: 'Responsive Design', isBlurred: false },
      { text: 'Basic SEO Setup', isBlurred: true },
      { text: 'Google Page Speed Optimized', isBlurred: true },
    ],
    gradient: 'from-cyan-400 to-blue-600',
    icon: LayoutTemplate,
    slug: 'static-website'
  },
  {
    title: 'Dynamic Website',
    subtitle: 'Best for Growing Businesses',
    features: [
      { text: 'Unlimited Dynamic Web Pages', isBlurred: false },
      { text: 'FREE Web Hosting & SSL for 1 year', isBlurred: false },
      { text: '1 Week FREE Support', isBlurred: false },
      { text: 'Responsive CMS Design', isBlurred: false },
      { text: 'Standard SEO Setup', isBlurred: true },
      { text: 'Contact Form Integrations', isBlurred: true },
    ],
    gradient: 'from-purple-600 to-cyan-500',
    icon: LayoutTemplate,
    slug: 'dynamic-website'
  },
  {
    title: 'E-Commerce Website',
    subtitle: 'Ideal for Online Stores',
    features: [
      { text: 'Add & Manage Unlimited Products', isBlurred: false },
      { text: 'Advanced Shopping Cart System', isBlurred: false },
      { text: 'Easy Checkout Flow', isBlurred: false },
      { text: 'Secure Payment Gateway', isBlurred: false },
      { text: 'Inventory Management', isBlurred: true },
      { text: 'Abandoned Cart Recovery', isBlurred: true },
    ],
    gradient: 'from-[#0f0a3c] to-purple-600',
    icon: LayoutTemplate,
    slug: 'ecommerce'
  }
];

export const PackagesPage: React.FC = () => {
  return (
    <div className="pt-[110px] md:pt-[130px] min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Growth Package</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transparent features. Premium deliverables. Guaranteed results. Select a package tailored for your exact business scale.
          </p>
        </div>
      </div>

      <Section id="digital-marketing" className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Digital Marketing Packages
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Ads That Work While You Sleep. Creative content designed to convert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {DIGITAL_MARKETING_PACKAGES.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <div key={i} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                  <div className={`p-8 pb-10 bg-linear-to-br ${pkg.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-6 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                       <Icon className="w-24 h-24" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 relative z-10">{pkg.title}</h3>
                    <p className="text-white/80 font-medium relative z-10">{pkg.subtitle}</p>
                  </div>
                  
                  <div className="p-8 grow flex flex-col">
                    <ul className="space-y-4 mb-10 grow">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className={`flex items-start gap-3 ${feature.isBlurred ? 'select-none pointer-events-none' : ''}`}>
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${feature.isBlurred ? 'text-slate-300' : 'text-cyan-500'}`} />
                          <span className={feature.isBlurred ? 'text-slate-400 blur-[4px]' : 'text-slate-700 font-medium'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <p className="text-sm font-semibold text-slate-500 mb-4 text-center">Want to know what's inside?</p>
                      <a href={`#/package-unlock/${pkg.slug}`} className={`block w-full text-center py-4 rounded-xl font-bold text-white bg-linear-to-r ${pkg.gradient} hover:shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2`}>
                        <Lock className="w-4 h-4" />
                        Unlock Full Package
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section id="website-development" className="bg-slate-50/50 py-20 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Website Packages
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              No More Website Worries. Say Goodbye to Concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {WEBSITE_PACKAGES.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <div key={i} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                  <div className={`p-8 pb-10 bg-linear-to-br ${pkg.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-6 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                       <Icon className="w-24 h-24" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 relative z-10">{pkg.title}</h3>
                    <p className="text-white/80 font-medium relative z-10">{pkg.subtitle}</p>
                  </div>
                  
                  <div className="p-8 grow flex flex-col">
                    <ul className="space-y-4 mb-10 grow">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className={`flex items-start gap-3 ${feature.isBlurred ? 'select-none pointer-events-none' : ''}`}>
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${feature.isBlurred ? 'text-slate-300' : 'text-purple-500'}`} />
                          <span className={feature.isBlurred ? 'text-slate-400 blur-[4px]' : 'text-slate-700 font-medium'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <p className="text-sm font-semibold text-slate-500 mb-4 text-center">Want to know what's inside?</p>
                      <a href={`#/package-unlock/${pkg.slug}`} className={`block w-full text-center py-4 rounded-xl font-bold text-white bg-linear-to-r ${pkg.gradient} hover:shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2`}>
                        <Lock className="w-4 h-4" />
                        Unlock Full Package
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>
      
      {/* Guarantees */}
      <div className="bg-white py-16 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mx-auto mb-4 text-purple-600">
                     <Target className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">ROI Focused</h4>
                  <p className="text-slate-600 text-sm">We deliver measurable growth with strategies built for results.</p>
               </div>
               <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-4 text-cyan-500">
                     <ShieldAlert className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">24/7 Support</h4>
                  <p className="text-slate-600 text-sm">Round-the-clock assistance to ensure your business never stops.</p>
               </div>
               <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4 text-blue-600">
                     <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h4>
                  <p className="text-slate-600 text-sm">Our skilled professionals bring innovation & expertise to every project.</p>
               </div>
               <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-4 text-orange-500">
                     <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Proven Results</h4>
                  <p className="text-slate-600 text-sm">Trusted by clients with successful projects & long-term partnerships.</p>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};
