import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    howCanWeHelp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('http://localhost:5000/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-linear-to-b from-[#0a062e] to-[#120b44] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-6 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            Contact
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Let's build something <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">incredible.</span>
          </h1>
          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
            Ready to scale your brand? Reach out to us today to get a customized strategy and personalized digital footprint review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          {/* Left Column: Contact Details */}
          <div className="space-y-12">
            <div className="bg-[#1a144e]/40 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-10 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-purple-200/70 mb-4">Monday - Saturday, 10am - 7pm</p>
              <a href="tel:9010080098" className="text-3xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                +91 9010080098
              </a>
            </div>

            <div className="bg-[#1a144e]/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-10 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-purple-200/70 mb-4">We usually reply within 24 hours</p>
              <a href="mailto:contact@viralpostmedia.com" className="text-2xl font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                contact@viralpostmedia.com
              </a>
            </div>
            
            <div className="bg-[#1a144e]/40 backdrop-blur-sm border border-white/5 rounded-3xl p-10 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-purple-200/70 text-lg">
                7-2-962, SRT-707 Industrial Colony<br />
                Sanatnagar, Hyderabad<br />
                Telangana - 500018
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#1a144e]/60 backdrop-blur-md border border-purple-500/30 rounded-3xl p-10 md:p-12 shadow-2xl relative">
            <div className="absolute -inset-1 rounded-3xl blur-md bg-linear-to-br from-cyan-500/20 to-purple-600/20 -z-10" />
            
            <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <h4 className="text-2xl font-black text-white">Message Sent!</h4>
                <p className="text-purple-200/70">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-purple-200">First Name</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full bg-[#0a062e]/50 border border-purple-900 rounded-xl px-5 py-4 text-white placeholder-purple-900/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-purple-200">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-[#0a062e]/50 border border-purple-900 rounded-xl px-5 py-4 text-white placeholder-purple-900/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-[#0a062e]/50 border border-purple-900 rounded-xl px-5 py-4 text-white placeholder-purple-900/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">Phone Number</label>
                  <input required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" className="w-full bg-[#0a062e]/50 border border-purple-900 rounded-xl px-5 py-4 text-white placeholder-purple-900/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="+91 90000 00000" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-purple-200">How can we help?</label>
                  <textarea required name="howCanWeHelp" value={formData.howCanWeHelp} onChange={handleChange} rows={4} className="w-full bg-[#0a062e]/50 border border-purple-900 rounded-xl px-5 py-4 text-white placeholder-purple-900/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                {submitError && <p className="text-red-400 text-sm font-medium">{submitError}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-70 disabled:cursor-wait text-white font-bold py-5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 mt-4"
                >
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
