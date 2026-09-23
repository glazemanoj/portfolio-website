'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#060913]/90 backdrop-blur-xl border-b border-sky-500/20 py-3.5 shadow-lg shadow-sky-500/5' : 'py-5'}`}>
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-emerald-400 text-slate-950 font-black flex items-center justify-center font-heading text-sm shadow-md shadow-sky-400/20 group-hover:scale-105 transition-transform">
            MK
          </span>
          <span className="font-heading font-extrabold text-xl text-white tracking-tight">
            Manoj Kumar
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#about" className="text-slate-300 hover:text-sky-400 text-sm font-semibold tracking-tight transition-colors">About</a></li>
          <li><a href="#experience" className="text-slate-300 hover:text-sky-400 text-sm font-semibold tracking-tight transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-slate-300 hover:text-sky-400 text-sm font-semibold tracking-tight transition-colors">Projects</a></li>
          <li><a href="#skills" className="text-slate-300 hover:text-sky-400 text-sm font-semibold tracking-tight transition-colors">Skills & AI</a></li>
          <li><a href="#certifications" className="text-slate-300 hover:text-sky-400 text-sm font-semibold tracking-tight transition-colors">Credentials</a></li>
          <li>
            <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 hover:shadow-lg hover:shadow-sky-400/30 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5">
              Contact <Zap className="w-3.5 h-3.5 fill-slate-950" />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-200 p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#060913] border-b border-sky-500/20 px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-slate-200 text-base font-bold">About</a>
          <a href="#experience" onClick={() => setMobileOpen(false)} className="block text-slate-200 text-base font-bold">Experience</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="block text-slate-200 text-base font-bold">Projects</a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="block text-slate-200 text-base font-bold">Skills & AI</a>
          <a href="#certifications" onClick={() => setMobileOpen(false)} className="block text-slate-200 text-base font-bold">Credentials</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 text-xs font-black uppercase tracking-wider">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
