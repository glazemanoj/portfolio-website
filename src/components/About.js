'use client';
import { profileData } from '../data/profileData';
import { Building2, Cpu, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="w-[90%] max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Executive Summary</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Transforming Façades Through <span className="gradient-text">Precision & Innovation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-100">World-Class Façade Solutions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Over 30 years expertise in structural glazing, fenestration, skylights, curtain walls, and bespoke luxury glass engineering across India and the UAE.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-100">AI & Operations Leadership</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leveraging Generative AI, Power BI analytics, and automated workflows to streamline project handovers, procurement, and site execution for multi-million dollar developments.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-100">Global & National Impact</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Proven track record leading major airport terminals (Mangalore, Trivandrum), IT Campuses (Infosys, Wipro, RMZ), and high-rise commercial structures.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold font-heading text-sky-400">Background & Vision</h3>
          <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
            {profileData.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
