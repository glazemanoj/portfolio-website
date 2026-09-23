'use client';
import { profileData } from '../data/profileData';
import { Cpu, Languages } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Technical Competencies</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Skills & <span className="gradient-text">Innovation Focus</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Progress Bars */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-100">Core Expertise & Proficiency</h3>
            <div className="space-y-5">
              {profileData.skills.map((s, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-slate-200">{s.name}</span>
                    <span className="text-sky-400 font-heading">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-1000" 
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* AI Integration Card */}
            <div className="glass-panel rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-100">Generative AI & Automation Integration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pioneering the application of modern AI tools, automated estimation, 5-axis CNC programming, and Power BI dashboards in façade project management to ensure on-time delivery and operational excellence.
              </p>
            </div>

            {/* Languages Card */}
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-sky-400" />
                <h3 className="font-heading font-bold text-lg text-slate-100">Languages Spoken</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((l, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                    🗣️ {l.name} ({l.level})
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
