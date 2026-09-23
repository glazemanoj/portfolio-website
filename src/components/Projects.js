'use client';
import { useState } from 'react';
import { profileData } from '../data/profileData';
import { Building, MapPin, CheckCircle, Clock } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Airports', 'Tech Parks', 'Commercial & Educational', 'In Progress'];

  const filteredProjects = activeFilter === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40">
      <div className="w-[90%] max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Portfolio Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Landmark <span className="gradient-text">Architectural Projects</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Major infrastructure, corporate software blocks, airport terminals, and commercial towers.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-100 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div key={p.id} className="glass-panel rounded-2xl overflow-hidden flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1 ${
                  p.badge === 'In Progress'
                    ? 'bg-amber-500/20 border border-amber-400/40 text-amber-400'
                    : 'bg-slate-950/80 border border-white/10 text-sky-400'
                }`}>
                  {p.badge === 'In Progress' ? <Clock className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                  <span>{p.badge}</span>
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">{p.category}</span>
                <h3 className="font-heading font-bold text-lg text-slate-100">{p.title}</h3>
                <div className="text-xs text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-slate-500" /> {p.client}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {p.location}</div>
                </div>
                <p className="text-slate-400 text-sm pt-1 leading-relaxed flex-grow">
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
