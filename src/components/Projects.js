'use client';
import { useState } from 'react';
import { profileData } from '../data/profileData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Airports', 'Tech Parks', 'Commercial & Educational', 'In Progress'];

  const filteredProjects = activeFilter === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="w-[88%] max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">03 / Selected Works</span>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white tracking-tight">
              Landmark Architectural Projects
            </h2>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-white text-slate-950 font-semibold'
                    : 'bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div key={p.id} className="glass-panel-minimal rounded-2xl overflow-hidden flex flex-col group">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase backdrop-blur-md border ${
                  p.badge === 'In Progress'
                    ? 'bg-amber-500/10 border-amber-400/30 text-amber-400'
                    : 'bg-black/60 border-white/10 text-sky-400'
                }`}>
                  {p.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{p.category}</span>
                <h3 className="font-heading font-semibold text-lg text-white group-hover:text-sky-400 transition-colors">{p.title}</h3>
                <div className="text-xs text-slate-400 font-medium">
                  {p.client} — <span className="text-slate-500">{p.location}</span>
                </div>
                <p className="text-slate-400 text-sm pt-2 leading-relaxed flex-grow">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
