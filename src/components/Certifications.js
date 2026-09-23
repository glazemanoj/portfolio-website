'use client';
import { profileData } from '../data/profileData';

export default function Certifications() {
  const edu = profileData.education;

  return (
    <section id="certifications" className="py-28 relative">
      <div className="w-[88%] max-w-6xl mx-auto space-y-16">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">05 / Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white tracking-tight">
            Certifications & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Certifications List */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg text-white">Professional Certifications</h3>
            <div className="space-y-3">
              {profileData.certifications.map((c, i) => (
                <div key={i} className="glass-panel-minimal rounded-xl p-5 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-semibold text-white text-sm">{c.title}</h4>
                    <span className="text-xs text-slate-500 font-mono">{c.issuer}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-600">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Degree */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-lg text-white">Academic Foundation</h3>
            <div className="glass-panel-minimal rounded-2xl p-8 space-y-4">
              <span className="text-xs font-mono text-sky-400">{edu.period}</span>
              <div>
                <h4 className="font-heading font-semibold text-xl text-white">{edu.degree}</h4>
                <p className="text-slate-400 font-medium text-sm">{edu.institution}</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-t border-white/[0.08] pt-4">
                {edu.details}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
