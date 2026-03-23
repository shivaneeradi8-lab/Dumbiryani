import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-8 backdrop-blur-sm bg-black/5">
      <div className="flex items-center gap-4">
        <span className="text-xl font-black uppercase tracking-[0.2em] !text-white italic">
            Dum Biryani
        </span>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-[10px] uppercase !font-black tracking-[0.3em] !text-white/60">
            <a href="#" className="hover:!text-white transition-colors">Experience</a>
            <a href="#" className="hover:!text-white transition-colors">Our Story</a>
            <a href="#" className="hover:!text-white transition-colors">Menu</a>
        </div>
        <button className="px-8 py-3 text-[10px] !font-black uppercase tracking-[0.3em] !text-white bg-black rounded-full border border-white/20 hover:bg-white hover:!text-black transition-all duration-500">
          Order Now
        </button>
      </div>
    </nav>
  );
}
