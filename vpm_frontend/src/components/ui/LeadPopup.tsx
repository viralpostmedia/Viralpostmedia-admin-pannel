import React, { useState, useEffect } from 'react';
import { Phone, X, Loader2, CheckCircle2, Sparkles } from 'lucide-react';

const POPUP_DELAY_MS = 10 * 1000; // 10 seconds
const STORAGE_KEY = 'vpm_lead_popup_submitted';

export const LeadPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if user already submitted
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const validatePhone = (value: string) => {
    const clean = value.replace(/\D/g, '');
    if (clean.length === 0) return 'Please enter your mobile number.';
    if (clean.length > 10) return 'Number exceeded — must be exactly 10 digits.';
    if (clean.length < 10) return 'Enter a valid 10-digit Indian mobile number.';
    if (!/^[6-9]/.test(clean)) return 'Invalid number — must start with 6, 7, 8, or 9.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validatePhone(phone);
    if (err) { setError(err); return; }
    setError('');
    setIsSubmitting(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/forms/popup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setTimeout(() => setIsVisible(false), 2500);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Remember dismissal for the session so it doesn't re-appear
    sessionStorage.setItem(STORAGE_KEY, 'dismissed');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop - click does nothing, must use X button */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-linear-to-r from-purple-600 via-cyan-500 to-purple-600" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 pt-7">
          {!isSubmitted ? (
            <>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-purple-600" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                We can serve you better! 🚀
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Drop your mobile number and our team will reach out with exclusive offers, package details, and personalized recommendations — just for you.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-slate-400 font-semibold text-sm">+91</span>
                    </div>
                    <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none">
                      <div className="w-px h-5 bg-slate-200" />
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setError('');
                      }}
                      placeholder="9876543210"
                      className={`w-full pl-16 pr-4 py-4 rounded-2xl bg-slate-50 border text-slate-800 font-semibold text-lg tracking-widest focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        error
                          ? 'border-red-400 focus:ring-red-400/30 focus:border-red-400'
                          : 'border-slate-200 focus:ring-purple-500/30 focus:border-purple-500'
                      }`}
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-slate-300" />
                    </div>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm ml-1 font-medium">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 disabled:opacity-70 disabled:cursor-wait text-white font-black text-base transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                  ) : (
                    <>Get Exclusive Offers <Phone className="w-4 h-4" /></>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 text-slate-400 hover:text-slate-600 font-semibold text-sm transition-colors"
                >
                  No thanks, maybe later
                </button>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">You're all set! 🎉</h3>
              <p className="text-slate-500 leading-relaxed">
                Our team will reach out to you shortly with the best offers tailored just for you.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
