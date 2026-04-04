import React, { useState, useEffect } from 'react';
import { VpmLogo } from '../ui/VpmLogo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleHash = () => {
      setCurrentHash(window.location.hash);
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const isActive = (hash: string) => {
    // Treat empty hash or #hero as home active
    if ((hash === '' || hash === '#hero') && (currentHash === '' || currentHash === '#hero')) return true;
    return currentHash === hash;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-3'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center" aria-label="Home">
          <VpmLogo 
            className={`w-auto transition-all duration-500 hover:scale-105 ${isScrolled ? 'h-16' : 'h-24 md:h-28'}`} 
            textColor={(isScrolled || ['#/services', '#/about', '#/proposal', '#/work', '#/packages', '#/digital-marketing', '#/web-solutions', '#/branding', '#/influence-marketing'].includes(currentHash) || currentHash.startsWith('#/package-unlock/')) ? '#0f172a' : '#ffffff'} 
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a 
            href="#hero" 
            className={`text-lg font-semibold transition-all hover:text-purple-400 group relative ${
              isScrolled ? 'text-slate-800' : 'text-gray-100'
            } ${isActive('#hero') ? 'text-purple-500 underline decoration-purple-500 decoration-2 underline-offset-8' : ''}`}
          >
            Home
          </a>
          <a 
            href="#/services" 
            className={`text-lg font-semibold transition-all hover:text-purple-400 ${
              isScrolled ? 'text-slate-800' : 'text-gray-100'
            } ${isActive('#/services') ? 'text-purple-500 underline decoration-purple-500 decoration-2 underline-offset-8' : ''}`}
          >
            Services
          </a>
          <a 
            href="#/about" 
            className={`text-lg font-semibold transition-all hover:text-purple-400 ${
              isScrolled ? 'text-slate-800' : 'text-gray-100'
            } ${isActive('#/about') ? 'text-purple-500 underline decoration-purple-500 decoration-2 underline-offset-8' : ''}`}
          >
            About
          </a>
          <a 
            href="#/work" 
            className={`text-lg font-semibold transition-all hover:text-purple-400 ${
              isScrolled ? 'text-slate-800' : 'text-gray-100'
            } ${isActive('#/work') ? 'text-purple-500 underline decoration-purple-500 decoration-2 underline-offset-8' : ''}`}
          >
            Our Work
          </a>
          <a href="#/packages" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-5 py-2.5 rounded-full text-base font-bold transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Packages
          </a>
          <a href="#/proposal" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-full text-base font-semibold transition-colors shadow-[0_0_15px_rgba(147,51,234,0.4)]">
            Get Proposal
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled || ['#/services', '#/about', '#/proposal', '#/work', '#/packages', '#/digital-marketing', '#/web-solutions', '#/branding', '#/influence-marketing'].includes(currentHash) || currentHash.startsWith('#/package-unlock/') 
              ? 'text-slate-800 hover:bg-slate-100' 
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          <a href="#hero" className={`text-base font-bold ${isActive('#hero') ? 'text-purple-600' : 'text-slate-700'}`}>Home</a>
          <a href="#/services" className={`text-base font-bold ${isActive('#/services') ? 'text-purple-600' : 'text-slate-700'}`}>Services</a>
          <a href="#/about" className={`text-base font-bold ${isActive('#/about') ? 'text-purple-600' : 'text-slate-700'}`}>About</a>
          <a href="#/work" className={`text-base font-bold ${isActive('#/work') ? 'text-purple-600' : 'text-slate-700'}`}>Our Work</a>
          <div className="h-px bg-slate-200 my-2"></div>
          <a href="#/packages" className="bg-cyan-500 text-slate-900 px-5 py-3 rounded-xl text-center font-bold">Packages</a>
          <a href="#/proposal" className="bg-purple-600 text-white px-5 py-3 rounded-xl text-center font-bold">Get Proposal</a>
        </div>
      </div>
    </header>
  );
};
