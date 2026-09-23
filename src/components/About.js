'use client';
import { profileData } from '../data/profileData';

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="w-[88%] max-w-6xl mx-auto space-y-16">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">01 / Overview</span>
          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white tracking-tight">
            Executive Philosophy & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel-minimal rounded-xl p-8 space-y-4">
            <span className="text-xs font-mono text-slate-500">01.01</span>
            <h3 className="font-heading font-semibold text-lg text-slate-100">World-Class Façade Solutions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Over 30 years expertise in structural glazing, fenestration, skylights, curtain walls, and bespoke luxury glass engineering across India and the UAE.
            </p>
          </div>

          <div className="glass-panel-minimal rounded-xl p-8 space-y-4">
            <span className="text-xs font-mono text-slate-500">01.02</span>
            <h3 className="font-heading font-semibold text-lg text-slate-100">AI & Operations Leadership</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leveraging Generative AI, Power BI analytics, and automated workflows to streamline project handovers, procurement, and site execution for multi-million dollar developments.
            </p>
          </div>

          <div className="glass-panel-minimal rounded-xl p-8 space-y-4">
            <span className="text-xs font-mono text-slate-500">01.03</span>
            <h3 className="font-heading font-semibold text-lg text-slate-100">Global & National Impact</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Proven track record leading major airport terminals (Mangalore, Trivandrum), IT Campuses (Infosys, Wipro, RMZ), and high-rise commercial structures.
            </p>
          </div>
        </div>

        <div className="glass-panel-minimal rounded-2xl p-10 space-y-4 border-l-2 border-l-sky-400">
          <h3 className="text-lg font-semibold font-heading text-slate-200">Summary</h3>
          <p className="text-slate-400 text-base leading-relaxed whitespace-pre-line max-w-4xl font-normal">
            {profileData.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
