import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
            Dum Biryani
          </h3>
          <p className="text-sm opacity-80 leading-relaxed text-gray-400">
            Experience the authentic taste of tradition. Handcrafted spices and slow-cooked perfection.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Chicken Dum Biryani</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Mutton Dum Biryani</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Paneer Tikka Biryani</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Sides & Desserts</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-semibold mb-4">Support</h4>
           <ul className="space-y-2 text-sm opacity-80">
             <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
             <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping & Delivery</a></li>
             <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
           </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm opacity-80 mb-4 text-gray-400">Subscribe for exclusive offers and updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 w-full text-sm focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm opacity-60 text-gray-500">
        &copy; {new Date().getFullYear()} Dum Biryani. Taste the Tradition. All rights reserved.
      </div>
    </footer>
  );
}
