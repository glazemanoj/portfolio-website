'use client';
import { profileData } from '../data/profileData';
import { ArrowRight, MapPin, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="w-[88%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Generative AI & Façade Engineering</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight font-heading text-white leading-tight">
              Manoj Kumar
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-sky-400 font-heading">
              {profileData.headline}
            </h2>
          </div>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl font-normal">
            Over 30 years of engineering leadership transforming architectural landmarks with world-class glass, structural glazing, fenestration, and Generative AI workflows.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition-all flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-slate-200 font-semibold text-xs hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-3 pl-2">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {profileData.github && (
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-slate-400 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.08]">
            {profileData.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading font-semibold text-2xl text-white">{st.value}</span>
                <span className="text-xs text-slate-500 font-normal leading-snug mt-1">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm glass-panel-minimal rounded-2xl p-3 shadow-xl">
            <img 
              src={profileData.avatar} 
              alt={profileData.name} 
              className="w-full h-[380px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="mt-4 text-center space-y-1">
              <h3 className="font-heading font-semibold text-base text-slate-100">{profileData.name}</h3>
              <p className="text-xs text-slate-400 font-medium">{profileData.headline.split('|')[0]}</p>
              <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{profileData.location}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
