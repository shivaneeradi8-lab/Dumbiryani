"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBottleScroll from "../components/ProductBottleScroll";
import ProductTextOverlays from "../components/ProductTextOverlays";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Reset when changing product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const product = products[currentIndex];

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main 
      className="relative min-h-screen text-white font-sans overflow-x-hidden w-full transition-colors duration-700"
      style={{ background: product.gradient }}
    >
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Scroll sequence container */}
          <div ref={scrollContainerRef} className="relative h-[500vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <ProductBottleScroll product={product} scrollYProgress={scrollYProgress} />
                <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
            </div>
          </div>

          <div className="relative z-20 bg-black/20 backdrop-blur-3xl">
            {/* Details Section (Section 2) */}
            <motion.section 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="py-32 px-6 border-b border-white/10 flex flex-col items-center justify-center text-center"
              style={{ background: "linear-gradient(135deg, #8B5E3C 0%, #D4A373 100%)" }}
            >
              <div className="max-w-[700px] mx-auto flex flex-col gap-6">
                  <h2 className="text-[48px] md:text-[64px] font-black leading-tight text-white uppercase tracking-tighter italic">
                    {product.detailsSection.title}
                  </h2>
                  <p className="text-[18px] md:text-[22px] font-medium leading-relaxed text-[#FDE68A]">
                    {product.detailsSection.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6 mt-12 w-full">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="bg-black/20 backdrop-blur-3xl p-6 rounded-3xl border border-white/10 shadow-3xl transform hover:scale-105 transition-all">
                        <div className="text-xs opacity-60 mb-2 uppercase tracking-widest text-[#FDE68A]">{stat.label}</div>
                        <div className="text-2xl font-black text-white tracking-tighter italic">{stat.val}</div>
                      </div>
                    ))}
                  </div>
              </div>
            </motion.section>

            {/* Freshness Section (Section 3) */}
            <motion.section 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="py-32 px-6 border-b border-white/10 flex flex-col items-center justify-center text-center"
              style={{ background: "linear-gradient(135deg, #8B5E3C 0%, #D4A373 100%)" }}
            >
                <div className="max-w-[700px] mx-auto flex flex-col gap-6">
                   <h2 className="text-[48px] md:text-[64px] font-black leading-tight tracking-tighter text-white uppercase italic">
                       {product.freshnessSection.title}
                    </h2>
                   <p className="text-[18px] md:text-[22px] font-medium leading-relaxed text-[#FDE68A]">
                       {product.freshnessSection.description}
                    </p>
                </div>
            </motion.section>

            {/* Buy Now Section */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="py-32 px-6 max-w-5xl mx-auto text-center"
            >
               <h1 className="text-6xl md:text-[10vw] font-black mb-4 tracking-tighter uppercase italic leading-[0.8]">
                   {product.name}
               </h1>
               <p className="text-3xl font-black mb-12 tracking-tight" style={{ color: product.themeColor }}>
                  {product.buyNowSection.price} <span className="text-sm opacity-60 font-medium">{product.buyNowSection.unit}</span>
               </p>
               
               <button 
                  className="px-16 py-8 text-2xl font-black uppercase tracking-widest text-white rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] active:scale-95 shadow-2xl"
                  style={{ background: product.themeColor }}
                >
                   Add to Cart
               </button>
               
               <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                  <div className="text-left">
                     <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Process</h4>
                     <p className="text-sm text-white/60 font-medium">{product.buyNowSection.processingParams.join(" • ")}</p>
                  </div>
                  <div className="text-left">
                     <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Delivery</h4>
                     <p className="text-sm text-white/60 font-medium">{product.buyNowSection.deliveryPromise}</p>
                  </div>
                  <div className="text-left">
                     <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Guarantee</h4>
                     <p className="text-sm text-white/60 font-medium">{product.buyNowSection.returnPolicy}</p>
                  </div>
               </div>
            </motion.section>
            
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flavor Switcher - Fixed at bottom */}
      <div className="fixed bottom-12 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-2xl px-2 py-2 rounded-full border border-white/10 shadow-2xl flex items-center gap-1 pointer-events-auto overflow-hidden">
             {products.map((p, idx) => (
                <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                        currentIndex === idx 
                        ? "bg-white text-black shadow-lg" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                    {p.name.split(' ')[0]}
                </button>
             ))}
          </div>
      </div>
    </main>
  );
}
