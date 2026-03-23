"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Product } from "../data/products";

interface Props {
  product: Product;
  scrollYProgress: any;
}

export default function ProductBottleScroll({ product, scrollYProgress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload Images
  useEffect(() => {
    let loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalImages = 30;

    for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        img.src = `${product.folderPath}/${i}.jpg`;
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                setImages(loadedImages);
            }
        };
        loadedImages.push(img);
    }
  }, [product.folderPath]);

  // Frame calculation using useTransform mapping 0-1 to 0-29
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 29]);

  // Background text parallax/opacity effect
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.15, 0.15, 0.1]);
  const bgTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Render to Canvas
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvasRef.current) {
        // Set higher resolution for retina displays
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        
        const currentIndex = Math.min(
            29,
            Math.max(0, Math.floor(frameIndex.get()))
        );
        drawFrame(currentIndex);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function drawFrame(index: number) {
      if (!ctx || !canvasRef.current || !images[index] || !images[index].complete) return;
      
      const canvas = canvasRef.current;
      const img = images[index];
      
      const cw = canvas.width / (window.devicePixelRatio || 1);
      const ch = canvas.height / (window.devicePixelRatio || 1);

      const scale = Math.max(cw / img.width, ch / img.height) * 0.8; // Slightly smaller to reveal bg text
      const x = (cw / 2) - (img.width / 2) * scale;
      const y = (ch / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    const unsubscribe = frameIndex.onChange((latest) => {
        requestAnimationFrame(() => {
            drawFrame(Math.min(29, Math.max(0, Math.floor(latest))));
        });
    });

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        unsubscribe();
    }
  }, [images, frameIndex]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        {/* Large Background Text - The "Brand" Layer */}
        <motion.div 
            style={{ 
                opacity: bgTextOpacity, 
                scale: bgTextScale,
                color: product.bgTextColor 
            }}
            className="absolute inset-0 flex items-center justify-center z-0 select-none"
        >
            <h1 className="text-[35vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter opacity-30 select-none">
                {product.name.split(' ')[0]}
            </h1>
        </motion.div>

        {/* The Product Canvas - The "Object" Layer */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
            <canvas 
                ref={canvasRef} 
                className="w-full h-full object-contain" 
                style={{ 
                    width: '100vw', 
                    height: '100vh',
                    imageRendering: 'auto' // Best balance for high-res sequences
                }}
            />
        </div>
    </div>
  );
}
