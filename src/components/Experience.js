'use client';
import { profileData } from '../data/profileData';
import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Career Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            30+ Years of <span className="gradient-text">Leadership Experience</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-sky-500/30 space-y-8">
          {profileData.experiences.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors shadow-sm shadow-sky-400" />
              
              <div className="glass-panel rounded-xl p-6 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-bold font-heading">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-100">{exp.role}</h3>
                <div className="text-sm font-semibold text-slate-400 flex flex-wrap items-center gap-2">
                  <span className="text-slate-200">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pt-1">
                  {exp.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
