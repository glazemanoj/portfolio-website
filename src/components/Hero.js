'use client';
import { profileData } from '../data/profileData';
import { ArrowRight, Sparkles, MapPin, Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background overlay image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url(${profileData.heroBg})` }}
      />
      <div className="absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generative AI & Façade Engineering Leader</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-none">
            Manoj <span className="gradient-text">Kumar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 font-heading">
            {profileData.headline}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Over 30 years of engineering leadership transforming architectural landmarks with world-class glass, structural glazing, fenestration, and Generative AI workflows.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 font-semibold text-sm hover:bg-white/10 hover:border-sky-400/50 transition-all"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-3 pl-2">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {profileData.github && (
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {profileData.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-sky-400">{st.value}</span>
                <span className="text-xs text-slate-500 font-medium leading-tight mt-0.5">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md glass-panel rounded-2xl p-4 shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl blur-lg opacity-25 -z-10" />
            <img 
              src={profileData.avatar} 
              alt={profileData.name} 
              className="w-full h-[400px] object-cover rounded-xl shadow-md" 
            />
            <div className="mt-4 text-center space-y-1">
              <h3 className="font-heading font-bold text-lg text-slate-100">{profileData.name}</h3>
              <p className="text-xs font-semibold text-sky-400">{profileData.headline.split('|')[0]}</p>
              <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profileData.location}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
