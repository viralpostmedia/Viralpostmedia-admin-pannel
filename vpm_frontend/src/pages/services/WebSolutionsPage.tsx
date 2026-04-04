import React from 'react';
import { Globe, Code2, ShoppingCart, Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: Globe, title: 'Static Websites', desc: 'Lightning-fast, mobile-first static websites delivered within 3 business days with free hosting & SSL.' },
  { icon: Code2, title: 'Dynamic Websites', desc: 'Custom CMS-driven websites with admin panels, dynamic content and powerful backend logic.' },
  { icon: ShoppingCart, title: 'E-Commerce Stores', desc: 'Full-featured online stores with payment gateways, inventory management and abandoned cart recovery.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Pixel-perfect designs that look stunning on all devices — desktop, tablet, and mobile.' },
  { icon: Shield, title: 'Security & SSL', desc: 'Enterprise-grade security with XSS/CSRF protection, HTTPS, and secure payment integrations.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Google PageSpeed-optimized code for blazing fast load times and better search rankings.' },
];

const STATS = [
  { stat: '3 Days', label: 'Static Site Delivery' },
  { stat: '100+', label: 'Websites Launched' },
  { stat: '99.9%', label: 'Uptime Guaranteed' },
  { stat: 'Free', label: 'Hosting & SSL (1yr)' },
];

export const WebSolutionsPage: React.FC = () => (
  <div className="pt-[130px] md:pt-[150px] min-h-screen bg-white">
    {/* Hero */}
    <div className="bg-[#0f0a3c] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f0a3c]" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">Core Service</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Web <span className="text-cyan-400">Solutions</span></h1>
        <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          No more website worries. From static landing pages to full e-commerce platforms — we build digital experiences that convert.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#/packages" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 justify-center">View Packages <ArrowRight className="w-5 h-5" /></a>
          <a href="#/proposal" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all border border-white/20 flex items-center gap-2 justify-center">Get Proposal</a>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map(r => (
          <div key={r.label}>
            <div className="text-4xl font-black text-cyan-600 mb-1">{r.stat}</div>
            <div className="text-slate-500 font-medium text-sm">{r.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Services Grid */}
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">What We Build</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">Modern, scalable websites engineered for performance and built to grow with your business.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-lg rounded-3xl p-8 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 group-hover:bg-cyan-500 flex items-center justify-center mb-6 transition-colors">
              <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="bg-slate-900 py-20 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Start Your Website Project</h2>
      <p className="text-slate-400 mb-8 text-lg">Let's build a digital presence that your competitors will envy.</p>
      <a href="#/proposal" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-cyan-900/40">
        Initialize Proposal <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);
