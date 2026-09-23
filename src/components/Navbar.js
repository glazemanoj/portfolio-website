'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] py-4' : 'py-6'}`}>
      <div className="w-[88%] max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white font-medium flex items-center justify-center font-heading text-xs tracking-wider group-hover:border-sky-400/50 transition-colors">
            MK
          </span>
          <span className="font-heading font-semibold text-lg text-slate-100 tracking-tight">
            Manoj Kumar
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#about" className="text-slate-400 hover:text-slate-100 text-xs font-medium tracking-wide transition-colors">About</a></li>
          <li><a href="#experience" className="text-slate-400 hover:text-slate-100 text-xs font-medium tracking-wide transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-slate-400 hover:text-slate-100 text-xs font-medium tracking-wide transition-colors">Projects</a></li>
          <li><a href="#skills" className="text-slate-400 hover:text-slate-100 text-xs font-medium tracking-wide transition-colors">Skills & AI</a></li>
          <li><a href="#certifications" className="text-slate-400 hover:text-slate-100 text-xs font-medium tracking-wide transition-colors">Credentials</a></li>
          <li>
            <a href="#contact" className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-slate-200 hover:text-white hover:border-sky-400/40 text-xs font-medium transition-all flex items-center gap-1">
              Contact <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-300 p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#07090e] border-b border-white/[0.08] px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-sm font-medium">About</a>
          <a href="#experience" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-sm font-medium">Experience</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-sm font-medium">Projects</a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-sm font-medium">Skills & AI</a>
          <a href="#certifications" onClick={() => setMobileOpen(false)} className="block text-slate-300 text-sm font-medium">Credentials</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-block px-4 py-2 rounded-full bg-white/10 text-slate-200 text-xs font-medium">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
