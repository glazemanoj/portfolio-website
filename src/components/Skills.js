'use client';
import { profileData } from '../data/profileData';

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="w-[88%] max-w-6xl mx-auto space-y-16">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">04 / Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white tracking-tight">
            Engineering & AI Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Progress Bars */}
          <div className="lg:col-span-7 glass-panel-minimal rounded-2xl p-8 space-y-6">
            <h3 className="font-heading font-semibold text-lg text-white">Core Expertise</h3>
            <div className="space-y-6">
              {profileData.skills.map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="text-sky-400 font-mono">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-sky-400 transition-all duration-1000" 
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-minimal rounded-2xl p-8 space-y-4">
              <span className="text-xs font-mono text-sky-400 uppercase">Automation & Generative AI</span>
              <h3 className="font-heading font-semibold text-lg text-white">Operational Innovation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pioneering the application of modern AI tools, automated estimation, 5-axis CNC programming, and Power BI dashboards in façade project management to ensure on-time delivery and operational excellence.
              </p>
            </div>

            <div className="glass-panel-minimal rounded-2xl p-8 space-y-4">
              <h3 className="font-heading font-semibold text-base text-white">Multilingual Proficiency</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((l, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300">
                    {l.name} ({l.level})
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
