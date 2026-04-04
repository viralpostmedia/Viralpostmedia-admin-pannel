import React from 'react';
import { Palette, PenTool, Layout, Star, Eye, Layers, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: Palette, title: 'Brand Identity Design', desc: 'Logo, color palette, typography and brand guidelines that make your business instantly recognizable.' },
  { icon: PenTool, title: 'Creative Content Design', desc: 'Scroll-stopping social media creatives, banners, posters and ad visuals designed to convert.' },
  { icon: Layout, title: 'Brand Guidelines', desc: 'Comprehensive brand style guides ensuring consistency across every touchpoint — digital and print.' },
  { icon: Star, title: 'Brand Strategy', desc: 'Positioning, messaging, and storytelling frameworks that differentiate you in a crowded market.' },
  { icon: Eye, title: 'Visual Identity', desc: 'Cohesive visual systems including iconography, illustration styles and photography direction.' },
  { icon: Layers, title: 'Rebranding', desc: "Modernize your brand image while retaining the trust and equity you've already built." },
];

const STATS = [
  { stat: '150+', label: 'Brands Designed' },
  { stat: '48hr', label: 'First Draft Delivery' },
  { stat: '∞', label: 'Revision Rounds' },
  { stat: '100%', label: 'Custom Designs' },
];

export const BrandingPage: React.FC = () => (
  <div className="pt-[130px] md:pt-[150px] min-h-screen bg-white">
    {/* Hero */}
    <div className="bg-[#0f0a3c] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f0a3c]" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block bg-purple-500/20 text-purple-300 text-sm font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">Core Service</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Brand <span className="text-purple-400">Identity</span></h1>
        <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          A brand is more than a logo — it's the feeling your customers get. We craft identities that resonate, inspire, and endure.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#/proposal" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2 justify-center">Get Proposal <ArrowRight className="w-5 h-5" /></a>
          <a href="#/packages" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all border border-white/20 flex items-center gap-2 justify-center">View Packages</a>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map(r => (
          <div key={r.label}>
            <div className="text-4xl font-black text-purple-700 mb-1">{r.stat}</div>
            <div className="text-slate-500 font-medium text-sm">{r.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Services Grid */}
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Branding Services</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">From first impression to lasting loyalty — every pixel is purposeful.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-purple-200 hover:shadow-lg rounded-3xl p-8 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center mb-6 transition-colors">
              <Icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="bg-slate-900 py-20 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Let's Build Your Brand Story</h2>
      <p className="text-slate-400 mb-8 text-lg">Great brands are built intentionally. Start yours with VPM today.</p>
      <a href="#/proposal" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-purple-900/40">
        Initialize Proposal <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);
