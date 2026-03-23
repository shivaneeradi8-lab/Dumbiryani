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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? products.length - 1 : prev - 1));
  };

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden w-full">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 1.05 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Scroll sequence container: height 500vh to allow scroll room */}
          <div ref={scrollContainerRef} className="relative h-[500vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <ProductBottleScroll product={product} scrollYProgress={scrollYProgress} />
                <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
            </div>
          </div>

          <div className="relative z-20 bg-black">
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400">
                    {product.detailsSection.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    {product.detailsSection.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gray-900/50 p-6 rounded-2xl border border-white/5">
                        <div className="text-sm text-orange-300 mb-2">{stat.label}</div>
                        <div className="text-2xl font-bold text-white tracking-tight">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual representation card */}
                <div className="bg-gradient-to-tr from-[#8B5E3C] to-[#D4A373] p-1 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="bg-black/40 backdrop-blur-sm p-12 rounded-3xl h-full flex flex-col justify-center items-center text-center">
                       <h3 className="text-3xl font-bold text-white mb-4">Aroma Sealed</h3>
                       <p className="text-orange-100">Handcrafted spices. Authentic dum.</p>
                       <div className="mt-8 flex gap-4 flex-wrap justify-center">
                          {product.features.map((f, i) => (
                              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                                  {f}
                              </span>
                          ))}
                       </div>
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
              className="py-24 bg-gray-900/50 border-y border-white/5"
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                   <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">{product.freshnessSection.title}</h2>
                   <p className="text-xl text-gray-400 leading-relaxed">{product.freshnessSection.description}</p>
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
               <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                   {product.name}
               </h1>
               <p className="text-2xl text-orange-400 mb-12 font-medium">{product.buyNowSection.price} <span className="text-sm text-gray-400">{product.buyNowSection.unit}</span></p>
               
               <button className="px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300">
                   Add to Cart
               </button>
               
               <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
                  <div className="text-left">
                     <h4 className="font-semibold text-white mb-2">Process</h4>
                     <p className="text-sm text-gray-400">{product.buyNowSection.processingParams.join(" • ")}</p>
                  </div>
                  <div className="text-left">
                     <h4 className="font-semibold text-white mb-2">Delivery</h4>
                     <p className="text-sm text-gray-400">{product.buyNowSection.deliveryPromise}</p>
                  </div>
                  <div className="text-left">
                     <h4 className="font-semibold text-white mb-2">Guarantee</h4>
                     <p className="text-sm text-gray-400">{product.buyNowSection.returnPolicy}</p>
                  </div>
               </div>
            </motion.section>

            {/* Next Dish CTA - visible only if more than 1 product */}
            {products.length > 1 && (
                <div className="flex justify-center items-center gap-8 pb-24">
                   <button onClick={handlePrev} className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                      ← Prev
                   </button>
                   <button onClick={handleNext} className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                      Next →
                   </button>
                </div>
            )}
            
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
