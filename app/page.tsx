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
            {/* Details Section */}
            <motion.section 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="py-24 px-6 md:px-20 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: product.themeColor }}>
                    {product.detailsSection.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                    {product.detailsSection.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <div className="text-sm opacity-60 mb-2">{stat.label}</div>
                        <div className="text-2xl font-bold text-white tracking-tight">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4 italic">The Dum Secret</h3>
                    <p className="text-white/70">Slow-cooked to perfection, sealing in the moisture and the rich aromatics of hand-ground spices.</p>
                    <div className="mt-8 flex gap-4 flex-wrap">
                        {product.features.map((f, i) => (
                            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                                {f}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.section>

            {/* Freshness Section */}
            <motion.section 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="py-24 bg-white/5 border-y border-white/10"
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                   <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">{product.freshnessSection.title}</h2>
                   <p className="text-xl text-white/70 leading-relaxed">{product.freshnessSection.description}</p>
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
               <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase italic">
                   {product.name}
               </h1>
               <p className="text-3xl font-bold mb-12" style={{ color: product.themeColor }}>{product.buyNowSection.price} <span className="text-sm opacity-60 font-normal">{product.buyNowSection.unit}</span></p>
               
               <button 
                  className="px-12 py-6 text-xl font-black uppercase tracking-widest text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
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
