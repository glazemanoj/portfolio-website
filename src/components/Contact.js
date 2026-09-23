'use client';
import { useState } from 'react';
import { profileData } from '../data/profileData';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Let's Connect for <span className="gradient-text">Your Next Project</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Available for technical advisory, executive leadership discussions, and high-profile façade engineering inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">Email Address</span>
                  <a href={`mailto:${profileData.email}`} className="text-slate-100 font-bold text-base hover:text-sky-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">Phone Number</span>
                  <a href={`tel:${profileData.phone}`} className="text-slate-100 font-bold text-base hover:text-sky-400 transition-colors">
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">LinkedIn Profile</span>
                  <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-slate-100 font-bold text-base hover:text-sky-400 transition-colors">
                    linkedin.com/in/glazemanoj
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">Location</span>
                  <span className="text-slate-100 font-bold text-base">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 text-sm transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 text-sm transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required 
                  placeholder="Describe your inquiry..." 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 text-sm transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-medium text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! Your message has been submitted.</span>
                </div>
              )}
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
