'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-white/10 py-3' : 'py-5'}`}>
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-slate-950 font-extrabold flex items-center justify-center font-heading text-lg group-hover:scale-105 transition-transform">
            MK
          </span>
          <span className="font-heading font-bold text-xl text-slate-100 tracking-tight">
            Manoj Kumar
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#about" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors">About</a></li>
          <li><a href="#experience" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors">Projects</a></li>
          <li><a href="#skills" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors">Skills & AI</a></li>
          <li><a href="#certifications" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors">Credentials</a></li>
          <li>
            <a href="#contact" className="px-5 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 hover:bg-sky-500/20 text-sm font-semibold transition-all flex items-center gap-1.5">
              Contact <ArrowUpRight className="w-4 h-4" />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-200 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-white/10 px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-base font-medium">About</a>
          <a href="#experience" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-base font-medium">Experience</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-base font-medium">Projects</a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-base font-medium">Skills & AI</a>
          <a href="#certifications" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-base font-medium">Credentials</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-block px-5 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-sm font-semibold">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
