'use client';
import { profileData } from '../data/profileData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="w-[88%] max-w-6xl mx-auto space-y-16">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">02 / Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white tracking-tight">
            30+ Years of Executive Career History
          </h2>
        </div>

        <div className="space-y-6">
          {profileData.experiences.map((exp, i) => (
            <div key={i} className="glass-panel-minimal rounded-xl p-8 transition-all hover:translate-x-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-mono text-sky-400 font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold font-heading text-white">{exp.role}</h3>
                  <div className="text-sm text-slate-400 font-medium">
                    {exp.company} — <span className="text-slate-500">{exp.location}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pt-2">
                    {exp.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
