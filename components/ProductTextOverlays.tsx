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
            style={{ 
                opacity: section.opacity, 
                y: section.y,
                padding: idx === 0 ? "120px 24px" : "120px 24px"
            }}
            className={`absolute inset-0 flex flex-col ${
              idx === 0 
              ? "!justify-between !items-start !text-left" 
              : "!justify-center !items-center !text-center"
            }`}
          >
            <div className={`flex flex-col ${idx === 0 ? "items-start" : "items-center"} max-w-[700px] ${idx !== 0 ? "mx-auto gap-6" : ""}`}>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    className="mb-6 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] !text-[#FDE68A]/80"
                >
                    {product.slogan}
                </motion.p>
                <h2 className={`${idx === 0 ? "text-[8vw] md:text-[6vw]" : "text-[48px] md:text-[64px]"} font-black uppercase tracking-tighter leading-[0.8] !text-white drop-shadow-2xl italic`}>
                    {section.content.title}
                </h2>
                
                {section.content.subtitle && (
                  <p className={`font-medium tracking-tight !text-[#FDE68A] drop-shadow-xl italic ${
                    idx === 0 
                    ? "text-lg md:text-xl max-w-lg mt-auto" 
                    : "text-[18px] md:text-[22px] max-w-xl mt-8"
                  }`}>
                    {section.content.subtitle}
                  </p>
                )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
