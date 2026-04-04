import React from 'react';
import { Users, Star, Video, Camera, MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: Users, title: 'Influencer Sourcing', desc: 'We identify and vet nano, micro, macro and mega influencers perfectly aligned with your brand values.' },
  { icon: Star, title: 'Campaign Management', desc: 'Full-cycle influencer campaign execution from briefing and content review to publishing and reporting.' },
  { icon: Video, title: 'Reel & Short Content', desc: 'Viral short-form video strategies for Instagram Reels, YouTube Shorts and TikTok that drive reach.' },
  { icon: Camera, title: 'UGC Content Creation', desc: 'User-generated content campaigns that build authenticity, social proof and community trust.' },
  { icon: MessageCircle, title: 'Brand Collaborations', desc: 'Strategic co-branding partnerships with complementary creators for maximum audience overlap.' },
  { icon: TrendingUp, title: 'Performance Tracking', desc: 'Real-time dashboards tracking impressions, reach, saves, shares and conversions per influencer.' },
];

const STATS = [
  { stat: '500+', label: 'Influencer Network' },
  { stat: '10M+', label: 'Combined Reach' },
  { stat: '3x', label: 'Avg Engagement Boost' },
  { stat: '48hr', label: 'Campaign Launch' },
];

export const InfluenceMarketingPage: React.FC = () => (
  <div className="pt-[130px] md:pt-[150px] min-h-screen bg-white">
    {/* Hero */}
    <div className="bg-[#0f0a3c] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f0a3c]" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block bg-pink-500/20 text-pink-300 text-sm font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">Core Service</span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Influence <span className="text-pink-400">Marketing</span></h1>
        <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Authentic voices, explosive reach. We connect your brand with creators who turn followers into buyers.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#/proposal" className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-pink-500/30 flex items-center gap-2 justify-center">Get Proposal <ArrowRight className="w-5 h-5" /></a>
          <a href="#/packages" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all border border-white/20 flex items-center gap-2 justify-center">View Packages</a>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map(r => (
          <div key={r.label}>
            <div className="text-4xl font-black text-pink-600 mb-1">{r.stat}</div>
            <div className="text-slate-500 font-medium text-sm">{r.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Services Grid */}
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">What We Do</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">Influence marketing is the fastest route from awareness to conversion.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-pink-200 hover:shadow-lg rounded-3xl p-8 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 group-hover:bg-pink-500 flex items-center justify-center mb-6 transition-colors">
              <Icon className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="bg-slate-900 py-20 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Go Viral?</h2>
      <p className="text-slate-400 mb-8 text-lg">Let our creator network amplify your brand to millions of engaged followers.</p>
      <a href="#/proposal" className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-pink-900/40">
        Initialize Proposal <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);
