import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/10">
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
          Dum Biryani
        </span>
      </div>
      <div>
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
          Order Fresh Biryani
        </button>
      </div>
    </nav>
  );
}
