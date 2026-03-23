"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Product } from "../data/products";

interface Props {
  product: Product;
  scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: Props) {
  // Enhanced transition timings for a more "snappy" feels
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [100, 0, 0, -100]);

  // Section 2: 0.25 to 0.40 fades in, 0.40 to 0.50 fades out
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.50], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.50], [100, 0, 0, -100]);

  // Section 3: 0.50 to 0.65 fades in, 0.65 to 0.75 fades out
  const opacity3 = useTransform(scrollYProgress, [0.50, 0.60, 0.70, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.50, 0.60, 0.70, 0.75], [100, 0, 0, -100]);

  // Section 4: 0.75 to 0.9 fades in, 0.9 to 1 fades out
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [100, 0, 0, -100]);

  const sections = [
    { opacity: opacity1, y: y1, content: product.section1 },
    { opacity: opacity2, y: y2, content: product.section2 },
    { opacity: opacity3, y: y3, content: product.section3 },
    { opacity: opacity4, y: y4, content: product.section4 },
  ];

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            style={{ opacity: section.opacity, y: section.y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                className="mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/60"
            >
                {product.slogan}
            </motion.p>
            <h2 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-2xl italic">
              {section.content.title}
            </h2>
            {section.content.subtitle && (
              <p className="mt-8 text-xl md:text-3xl font-medium tracking-tight text-white/90 max-w-2xl drop-shadow-xl bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 italic">
                {section.content.subtitle}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
