import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-8 backdrop-blur-xl bg-black/5 border-b border-white/5">
      <div className="text-3xl font-black tracking-tighter uppercase italic">
        <span className="text-white">
          Dum <span className="text-orange-500">Biryani</span>
        </span>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-[10px] uppercase font-black tracking-[0.3em] text-white/60">
            <a href="#" className="hover:text-white transition-colors">Experience</a>
            <a href="#" className="hover:text-white transition-colors">Our Story</a>
            <a href="#" className="hover:text-white transition-colors">Menu</a>
        </div>
        <button className="px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white bg-black rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500">
          Order Now
        </button>
      </div>
    </nav>
  );
}
