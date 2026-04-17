import React, { useState, useEffect } from 'react';
import { CheckCircle2, Lock, Unlock, ArrowLeft, Mail, Phone, User, MonitorSpeaker, Loader2 } from 'lucide-react';

const PACKAGES_DATA: Record<string, any> = {
  'social-media': {
    title: 'Social Media Marketing',
    subtitle: 'Drive Engagement, Build Brand & Convert Followers to Customers',
    tiers: [
      { name: 'Standard', price: '₹16,999', period: '+ GST/Month', features: ['Facebook, Instagram & Google My Business', 'Social Media Audit', '10–12 Creative Designs', '2 Revisions per Post', '5–6 Reels', 'Standard Content Calendar', 'Monthly Reports', 'Trending & Festival Posts'] },
      { name: 'Premium', price: '₹22,999', period: '+ GST/Month', features: ['Facebook, Instagram, Google My Business', '12–15 Creative Designs', '3 Revisions per Post', '8–10 Reels', 'Premium Content Calendar', 'Weekly Performance Reports'], recommended: true },
      { name: 'Super Premium', price: '₹49,999', period: '+ GST/Month', features: ['FB, IG, YouTube, GMB, LinkedIn & Twitter', '2 Camera Shoots (6 hrs each)', '6–8 YouTube Videos + SEO & Thumbnails', '12–15 Reels/Shorts', '12–15 Creatives', '4 Meta Ad Campaigns'] },
    ]
  },
  'google-ads': {
    title: 'Google Ads / PPC Package',
    subtitle: 'Instant Visibility & Lead Generation via High-Intent Targeting',
    tiers: [
      { name: 'Basic', price: '₹9,999', period: '+ GST/Month', features: ['Campaign Setup for Search Ads', 'Daily Ads Optimization', 'Budget Optimization Guidance'] },
      { name: 'Standard', price: '₹16,999', period: '+ GST/Month', features: ['Search & Display Ads Setup', 'Advanced Keyword Research (15–20 keywords)', 'Daily Ads Optimization', 'Budget Optimization Guidance'], recommended: true },
      { name: 'Premium', price: '₹26,999', period: '+ GST/Month', features: ['Search, Display & Shopping Ads Setup', 'Comprehensive Keyword Research (50+ keywords)', 'Multi-Campaign Management', 'A/B Testing & Scaling', 'Daily & Weekly Reporting'] },
    ]
  },
  'seo': {
    title: 'Search Engine Optimization (SEO)',
    subtitle: 'Rank Higher, Earn Organic Traffic & Dominate Your Niche',
    tiers: [
      { name: 'Basic', price: '₹11,999', period: '+ GST/Month', features: ['Website Audit', '10–15 Keywords', 'Meta Tags/Titles/Desc', 'Technical SEO', 'Search Console & Analytics Setup', 'Mobile/Speed Optimization'] },
      { name: 'Standard', price: '₹16,999', period: '+ GST/Month', features: ['20–30 Keywords', 'Schema/Structured Data', '10–15 High-Quality Backlinks/Month', 'GMB Optimization & 4 Posts/Month', 'Complete Basic Features'], recommended: true },
      { name: 'Premium', price: '₹24,999', period: '+ GST/Month', features: ['40+ Keywords', '4 Blogs/Month', '30+ High-DA Backlinks', 'Guest Posting', 'Advanced Technical SEO', 'Complete Standard Features'] },
    ]
  },
  'static-website': {
    title: 'Static Website Package',
    subtitle: 'A Lightning-Fast Gateway for Your Online Business',
    tiers: [
      { name: 'Basic', price: '₹5,999', period: '+ GST/Month', features: ['Single Page (Scrolling)', 'Mobile Friendly', 'WhatsApp/Call Integration', 'Basic SEO', '3-Day Delivery'] },
      { name: 'Standard', price: '₹9,999', period: '+ GST/Month', features: ['Up to 5 Pages', 'Free Hosting & SSL (1 yr)', 'Google Analytics & Search Console', 'Mobile/Tablet Friendly', 'Basic Features Included'], recommended: true },
      { name: 'Premium', price: '₹11,999', period: '+ GST/Month', features: ['Up to 8 Pages', 'Advanced UI/UX Animations', 'Content Writing (800 words)', 'Priority Support', 'Full Standard Features'] },
    ]
  },
  'dynamic-website': {
    title: 'Dynamic Website Package',
    subtitle: 'Powerful CMS Platforms Scaled for Growing Enterprises',
    tiers: [
      { name: 'Basic', price: '₹15,999', period: '+ GST/Month', features: ['4–5 Dynamic Pages', 'Responsive Design', 'Lead Capture Form', 'SEO Optimized Code', 'Free Hosting & SSL'] },
      { name: 'Standard', price: '₹26,999', period: '+ GST/Month', features: ['Up to 10 Pages', 'Advanced Admin Panel', 'CMS Ready', 'Dynamic Content updates', 'Basic Features Included'], recommended: true },
      { name: 'Premium', price: '₹39,999', period: '+ GST/Month', features: ['Custom UI/UX', 'Full CRUD Dashboard', 'Role-Based Access', 'Advanced Security (XSS/CSRF Protection)', 'Full Standard Features'] },
    ]
  },
  'ecommerce': {
    title: 'E-Commerce Website Package',
    subtitle: 'Robust Digital Storefronts Optimized for Sales',
    tiers: [
      { name: 'Basic', price: '₹29,999', period: '+ GST/Month', features: ['Dynamic Store (5–10 Products)', 'WordPress Technology', 'Free SSL & Hosting for 1 Year'] },
      { name: 'Standard', price: '₹44,999', period: '+ GST/Month', features: ['Up to 50 Products', 'Custom Framework Technology', 'Product Admin Dashboard', 'Payment Gateway Integration (Razorpay/PayPal)'], recommended: true },
      { name: 'Premium', price: '₹3,21,999', period: 'Setup Fee', features: ['Unlimited Products', 'React JS & NextJS Development', 'Advanced UI/UX Animations', 'Multiple Payment & Shipping Gateways', 'API Integrations'] },
    ]
  }
};

export const PackageUnlockFlow: React.FC = () => {
  const [packageId, setPackageId] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [howDidYouHearAboutUs, setHowDidYouHearAboutUs] = useState('');
  const [errors, setErrors] = useState<{email?: string, phone?: string}>({});

  useEffect(() => {
    // Extract ID from hash like '#/package-unlock/social-media'
    const hash = window.location.hash;
    const parts = hash.split('/');
    if (parts.length >= 3) {
      setPackageId(parts[2]);
    }
  }, []);

  const pkg = PACKAGES_DATA[packageId] || PACKAGES_DATA['social-media'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: {email?: string, phone?: string} = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email (e.g. name@gmail.com or name@company.co.in).";
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length > 10) {
      newErrors.phone = "Number exceeded — Indian mobile numbers must be exactly 10 digits.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    } else if (!/^[6-9]/.test(cleanPhone)) {
      newErrors.phone = "Invalid number — Indian mobile numbers start with 6, 7, 8, or 9.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:5000');
      await fetch(`${API_URL}/api/forms/packages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phoneNumber: phone, howDidYouHearAboutUs }),
      });
    } catch {
      // non-blocking - still unlock even if API fails
    } finally {
      setIsSubmitting(false);
      setIsUnlocked(true);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="pt-[100px] md:pt-[120px] min-h-screen bg-slate-50 relative pb-20">
      
      {!isUnlocked ? (
        <div className="max-w-3xl mx-auto px-4 mt-8 relative z-10 animate-fade-in-up">
           
           <a href="#/packages" className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-8 hover:text-cyan-700 transition-colors">
             <ArrowLeft className="w-4 h-4" /> Back to Packages
           </a>

           <div className="text-center mb-8">
             <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
               Get Full <span className="text-cyan-500">{pkg?.title}</span> Details
             </h1>
             <p className="text-slate-600 text-lg md:text-xl font-medium">
               Fill in your details and we’ll reveal the complete package info instantly — pricing, features & offers.
             </p>
           </div>

           <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                         <User className="h-5 w-5" />
                       </div>
                       <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your name" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-slate-700 font-medium" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                         <Mail className="h-5 w-5" />
                       </div>
                       <input required type="email" value={email} onChange={(e) => {setEmail(e.target.value); setErrors(prev => ({...prev, email: undefined}))}} placeholder="Enter your email" className={`w-full pl-12 pr-4 py-4 bg-slate-50 border ${errors.email ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-2xl focus:bg-white focus:outline-hidden focus:ring-2 transition-all text-slate-700 font-medium`} />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm ml-1 mt-1 font-medium">{errors.email}</p>}
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                         <Phone className="h-5 w-5" />
                       </div>
                       <input required type="tel" value={phone} onChange={(e) => {setPhone(e.target.value); setErrors(prev => ({...prev, phone: undefined}))}} placeholder="Enter your phone" className={`w-full pl-12 pr-4 py-4 bg-slate-50 border ${errors.phone ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-2xl focus:bg-white focus:outline-hidden focus:ring-2 transition-all text-slate-700 font-medium`} />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm ml-1 mt-1 font-medium">{errors.phone}</p>}
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">How did you hear about us?</label>
                    <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                         <MonitorSpeaker className="h-5 w-5" />
                       </div>
                       <select required value={howDidYouHearAboutUs} onChange={(e) => setHowDidYouHearAboutUs(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-slate-700 font-medium appearance-none">
                          <option value="">-- Select Source --</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="YouTube">YouTube</option>
                          <option value="Website">Website</option>
                          <option value="Friend/Referral">Friend / Referral</option>
                          <option value="Other">Other</option>
                       </select>
                    </div>
                 </div>

                 <div className="md:col-span-2 pt-6">
                    <button disabled={isSubmitting} type="submit" className="w-full md:w-auto md:mx-auto md:min-w-[300px] flex items-center justify-center gap-3 bg-slate-900 hover:bg-cyan-600 text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-cyan-500/30 disabled:opacity-70 disabled:cursor-wait">
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-5 h-5" />}
                      Get My Full Package Info
                    </button>
                    <p className="text-center text-slate-500 text-sm mt-6 font-medium">
                      We respect your privacy. No spam — Only package details in your inbox.
                    </p>
                 </div>

              </form>
           </div>
        </div>
      ) : (
        /* UNLOCKED STATE */
        <div className="max-w-7xl mx-auto px-4 mt-8 animate-fade-in-up">
           
           <div className="mb-12 text-center bg-[#0f0a3c] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0a3c]" />
              
              <div className="relative z-10 flex flex-col items-center">
                 <div className="bg-emerald-500/20 text-emerald-400 p-3 rounded-full mb-6 inline-flex items-center gap-2">
                    <Unlock className="w-5 h-5" />
                    <span className="font-bold tracking-wide uppercase text-sm">Package Details Unlocked</span>
                 </div>
                 <h1 className="text-4xl md:text-6xl font-black mb-6">{pkg?.title}</h1>
                 <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">{pkg?.subtitle}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
             {pkg?.tiers.map((tier: any, idx: number) => (
                <div key={idx} className={`bg-white rounded-3xl overflow-hidden border ${tier.recommended ? 'border-purple-500 shadow-purple-500/20 shadow-2xl transform md:-translate-y-4' : 'border-slate-200 shadow-lg'} transition-all`}>
                   
                   {tier.recommended && (
                      <div className="bg-purple-600 text-white text-center py-2 font-bold text-sm tracking-widest uppercase">
                         Most Popular
                      </div>
                   )}

                   <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                      <h3 className="text-2xl font-black text-slate-800 mb-2">{tier.name}</h3>
                      <div className="flex items-baseline gap-2 mb-2">
                         <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                      </div>
                      <span className="text-slate-500 font-medium">{tier.period}</span>
                   </div>

                   <div className="p-8">
                      <ul className="space-y-5">
                         {tier.features.map((feat: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                               <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-cyan-500" />
                               <span className="text-slate-700 font-medium leading-snug">{feat}</span>
                            </li>
                         ))}
                      </ul>
                      
                      <button className={`mt-10 w-full py-4 rounded-xl font-bold text-lg transition-all ${tier.recommended ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'}`}>
                         Start With {tier.name}
                      </button>
                   </div>
                </div>
             ))}
           </div>
           
           <div className="mt-12 text-center">
              <a href="#/packages" className="inline-flex items-center gap-2 text-slate-500 font-semibold hover:text-slate-800 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Browse other packages
              </a>
           </div>
        </div>
      )}

    </div>
  );
};
