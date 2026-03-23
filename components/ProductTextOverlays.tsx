"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Product } from "../data/products";

interface Props {
  product: Product;
  scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: Props) {
  // Fade in and out mappings for the 4 sections
  // Section 1: 0 to 0.15 fades in, 0.15 to 0.25 fades out
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [50, 0, 0, -50]);

  // Section 2: 0.25 to 0.40 fades in, 0.40 to 0.50 fades out
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.50], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.50], [50, 0, 0, -50]);

  // Section 3: 0.50 to 0.65 fades in, 0.65 to 0.75 fades out
  const opacity3 = useTransform(scrollYProgress, [0.50, 0.60, 0.70, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.50, 0.60, 0.70, 0.75], [50, 0, 0, -50]);

  // Section 4: 0.75 to 0.9 fades in, 0.9 to 1 fades out
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [50, 0, 0, -50]);

  const sections = [
    { opacity: opacity1, y: y1, content: product.section1 },
    { opacity: opacity2, y: y2, content: product.section2 },
    { opacity: opacity3, y: y3, content: product.section3 },
    { opacity: opacity4, y: y4, content: product.section4 },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            style={{ opacity: section.opacity, y: section.y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl">
              {section.content.title}
            </h2>
            {section.content.subtitle && (
              <p className="text-xl md:text-3xl text-orange-100 font-medium max-w-3xl drop-shadow-xl">
                {section.content.subtitle}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
