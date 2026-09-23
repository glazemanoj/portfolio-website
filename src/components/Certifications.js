'use client';
import { profileData } from '../data/profileData';
import { Award, GraduationCap } from 'lucide-react';

export default function Certifications() {
  const edu = profileData.education;

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/40">
      <div className="w-[90%] max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Certifications List */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-sky-400 flex items-center gap-2">
              <Award className="w-5 h-5" /> Professional Certifications
            </h3>
            <div className="space-y-3">
              {profileData.certifications.map((c, i) => (
                <div key={i} className="glass-panel rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-100 text-sm">{c.title}</h4>
                    <span className="text-xs text-slate-400">{c.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Degree */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-sky-400 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" /> Academic Degree
            </h3>
            <div className="glass-panel rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-slate-100">{edu.degree}</h4>
                <p className="text-sky-400 font-semibold text-sm">{edu.institution}</p>
                <span className="text-xs text-slate-500">{edu.period}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                {edu.details}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
