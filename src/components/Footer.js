'use client';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-slate-500 text-xs">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-heading font-bold text-slate-300">
          <span className="w-6 h-6 rounded bg-gradient-to-br from-sky-400 to-blue-600 text-slate-950 flex items-center justify-center text-xs">MK</span>
          <span>Manoj Kumar</span>
        </div>
        <div>
          © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
