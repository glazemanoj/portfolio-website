'use client';
import { useState } from 'react';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="w-[88%] max-w-6xl mx-auto space-y-16">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">06 / Contact</span>
          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-white tracking-tight">
            Let's Initiate a Conversation
          </h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Available for executive advisory, high-profile project leadership, and strategic industry consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-8 glass-panel-minimal rounded-2xl p-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Direct Email</span>
              <a href={`mailto:${profileData.email}`} className="block text-slate-200 font-medium hover:text-sky-400 transition-colors text-base">
                {profileData.email}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Phone</span>
              <a href={`tel:${profileData.phone}`} className="block text-slate-200 font-medium hover:text-sky-400 transition-colors text-base">
                {profileData.phone}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">LinkedIn</span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="block text-slate-200 font-medium hover:text-sky-400 transition-colors text-base">
                linkedin.com/in/glazemanoj
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Location</span>
              <span className="block text-slate-200 font-medium text-base">
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 glass-panel-minimal rounded-2xl p-8 space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-300">Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                placeholder="Your full name" 
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-400 text-sm transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-300">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                placeholder="name@company.com" 
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-400 text-sm transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-300">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                required 
                placeholder="Briefly describe your inquiry..." 
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-400 text-sm transition-colors"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 rounded-lg bg-white text-slate-950 font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-xs text-emerald-400 font-mono text-center pt-2">
                ✓ Message sent successfully. Thank you for reaching out!
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
