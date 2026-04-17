import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Send, CheckCircle2, ChevronRight, Sparkles, Phone, Mail, User, Building2, Globe, MessageSquare } from 'lucide-react';

const PACKAGES = [
  { label: 'Social Media Marketing', category: 'Digital Marketing' },
  { label: 'Google Ads / PPC Ads', category: 'Digital Marketing' },
  { label: 'Search Engine Optimization (SEO)', category: 'Digital Marketing' },
  { label: 'Static Website', category: 'Website' },
  { label: 'Dynamic Website', category: 'Website' },
  { label: 'E-Commerce Website', category: 'Website' },
];

export const Proposal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    packageChoice: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors: { email?: string; phone?: string } = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email (e.g. name@gmail.com).';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length > 10) {
      newErrors.phone = 'Number exceeded — must be exactly 10 digits.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    } else if (!/^[6-9]/.test(cleanPhone)) {
      newErrors.phone = 'Invalid number — must start with 6, 7, 8, or 9.';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    try {
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:5000');
      await fetch(`${API_URL}/api/forms/proposal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          companyName: formData.company,
          webUrl: formData.website,
          choosePackage: formData.packageChoice,
          briefVision: formData.message,
        }),
      });
    } catch {
      // non-blocking - still show success screen
    }

    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const inputClass = (hasError?: string) =>
    `w-full pl-12 pr-4 py-4 rounded-2xl bg-white border ${hasError ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-purple-500/10 focus:border-purple-500'} outline-none focus:ring-4 transition-all text-slate-700 font-medium`;

  if (submitted) {
    return (
      <div className="pt-40 pb-32 min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in-up">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-12 h-12 text-purple-600 animate-pulse" />
          </div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight">Strategy Initialized.</h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Our growth engineering team has received your request for <strong className="text-purple-600">{formData.packageChoice || 'your chosen package'}</strong>. We'll deliver your custom VPM blueprint within 48 business hours.
          </p>
          <div className="pt-8">
            <a href="#hero" className="text-purple-600 font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
              Return to Home <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`pt-32 pb-24 bg-white min-h-screen selection:bg-purple-100 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* Left Side */}
        <div className="lg:sticky lg:top-40 space-y-12">
          <div>
            <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-slate-50 text-purple-600 border border-purple-200 text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              Strategic Consult
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Get Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-indigo-600 to-cyan-500">Growth Blueprint.</span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-lg">
              Choose the package that fits your goal. We'll build a detailed technical proposal tailored to your brand's path to dominance.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Phase 1: Deep Audit</h4>
                <p className="text-slate-400 text-sm leading-relaxed">We analyze your current engagement, competitor positioning, and untapped distribution frames.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Phase 2: Distribution Mapping</h4>
                <p className="text-slate-400 text-sm leading-relaxed">We determine which VPM proprietary frames will yield the highest ROI for your vertical.</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
            <p className="text-purple-200/70 italic text-lg leading-relaxed relative z-10">
              "The proposal was so detailed it felt like a complete business masterclass. We saw a 140% growth in reach within the first 60 days."
            </p>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-slate-800" />
              <div>
                <div className="font-bold text-sm">Enterprise Partner</div>
                <div className="text-xs text-slate-400 font-medium tracking-widest uppercase">Global E-commerce Hub</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-100">
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClass()} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required type="email" placeholder="name@gmail.com" value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); setErrors(p => ({...p, email: undefined})); }} className={inputClass(errors.email)} />
                </div>
                {errors.email && <p className="text-red-500 text-sm ml-1 font-medium">{errors.email}</p>}
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required type="tel" placeholder="9876543210" value={formData.phone} onChange={e => { setFormData({...formData, phone: e.target.value}); setErrors(p => ({...p, phone: undefined})); }} className={inputClass(errors.phone)} />
                </div>
                {errors.phone && <p className="text-red-500 text-sm ml-1 font-medium">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input required type="text" placeholder="Your Business Name" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className={inputClass()} />
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Website URL <span className="normal-case text-slate-400">(optional)</span></label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" placeholder="https://yourwebsite.com" value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})} className={inputClass()} />
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Choose Package</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.label}
                    type="button"
                    onClick={() => setFormData({...formData, packageChoice: pkg.label})}
                    className={`py-3 px-4 rounded-xl border text-sm font-bold text-left transition-all ${formData.packageChoice === pkg.label ? 'border-purple-600 bg-purple-600 text-white shadow-lg shadow-purple-200' : 'border-slate-200 bg-white text-slate-600 hover:border-purple-300'}`}
                  >
                    <span className={`block text-xs mb-0.5 font-medium ${formData.packageChoice === pkg.label ? 'text-purple-200' : 'text-slate-400'}`}>{pkg.category}</span>
                    {pkg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Brief Vision</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                <textarea
                  rows={4}
                  placeholder="Tell us about your brand challenge..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all resize-none text-slate-700 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              Initialize Proposal
              <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              By submitting, you agree to our professional disclosure terms.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};
