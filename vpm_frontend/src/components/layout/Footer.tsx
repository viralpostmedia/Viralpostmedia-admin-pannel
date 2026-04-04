import React from 'react';
import { VpmLogo } from '../ui/VpmLogo';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0a3c] pt-20 pb-10 border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <VpmLogo className="h-16 w-auto" textColor="#ffffff" />
            <p className="text-purple-200/70 leading-relaxed text-sm pr-4">
              Viral Post Media is a premier digital marketing company accelerating brand growth through data-driven campaigns, innovative tech, and compelling narratives.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_viralpostmedia_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-300 hover:bg-linear-to-tr hover:from-orange-500 hover:to-fuchsia-600 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587745340579" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-300 hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-300 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/viralpost-media-6231ba3b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-300 hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="https://www.youtube.com/@ViralPostMedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-300 hover:bg-[#FF0000] hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#/about" 
                  onClick={() => window.location.hash === '#/about' && window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                  className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#/services" className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                  Services
                </a>
              </li>
              <li>
                <a href="#/work" className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#/contact" className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative inline-block">
              Core Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Digital Marketing', href: '#/digital-marketing' },
                { label: 'Web Solutions', href: '#/web-solutions' },
                { label: 'Branding', href: '#/branding' },
                { label: 'Influence Marketing', href: '#/influence-marketing' },
                { label: 'Choose Package', href: '#/packages' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '';
                    setTimeout(() => {
                      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-purple-200/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-400" />
                  VPM Frames Content
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:9010080098" className="text-purple-200/70 hover:text-cyan-400 transition-colors block mt-1">
                    9010080098
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:contact@viralpostmedia.com" className="text-purple-200/70 hover:text-cyan-400 transition-colors block mt-1">
                    contact@viralpostmedia.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-purple-200/70 mt-1 leading-relaxed">
                    7-2-962, SRT-707 Industrial Colony<br />
                    Sanatnagar, Hyderabad<br />
                    Telangana - 500018
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-purple-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-200/50 text-sm">
            © {new Date().getFullYear()} Viral Post Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-purple-200/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
