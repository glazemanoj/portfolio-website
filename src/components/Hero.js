'use client';
import { profileData } from '../data/profileData';
import { ArrowRight, Sparkles, MapPin, Linkedin, Github, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Dynamic backdrop glow circles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-emerald-400/20 border border-sky-400/40 text-sky-300 text-xs font-black tracking-wider uppercase shadow-md shadow-sky-500/10">
            <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>AI-Powered Façade Engineering Executive</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-heading leading-tight text-white">
              Manoj <span className="gradient-text-bold">Kumar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-extrabold text-sky-400 font-heading">
              {profileData.headline}
            </h2>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Over 30 years of engineering leadership transforming architectural landmarks with world-class glass, structural glazing, fenestration, and Generative AI workflows.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 hover:scale-[1.02] transition-all flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="px-7 py-3.5 rounded-full bg-slate-900/80 border border-sky-400/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 hover:border-sky-400/60 transition-all"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-3 pl-2">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {profileData.github && (
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Bold Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-sky-500/20">
            {profileData.stats.map((st, i) => (
              <div key={i} className="glass-panel-bold rounded-xl p-4 text-center">
                <span className="font-heading font-black text-3xl gradient-text-bold block">{st.value}</span>
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block mt-1">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md glass-panel-bold rounded-3xl p-5 shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-600 to-emerald-400 rounded-3xl blur-md opacity-40 -z-10" />
            <img 
              src={profileData.avatar} 
              alt={profileData.name} 
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg" 
            />
            <div className="mt-4 text-center space-y-1">
              <h3 className="font-heading font-black text-xl text-white">{profileData.name}</h3>
              <p className="text-xs font-bold text-sky-400">{profileData.headline.split('|')[0]}</p>
              <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profileData.location}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
