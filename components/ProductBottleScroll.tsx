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
    const totalImages = 25;

    for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        // Fallback for missing images to just not draw or handle dummy path
        img.src = `${product.folderPath}/${i}.jpg`;
        
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                setImages(loadedImages);
            }
        };
        // Even if some fail, we push them into the array to maintain indexing
        loadedImages.push(img);
    }
  }, [product.folderPath]);

  // Frame calculation using useTransform mapping 0-1 to 0-24
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 24]);

  // Render to Canvas
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Use a resize observer to resize canvas to display window
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        const currentIndex = Math.min(
            24,
            Math.max(0, Math.floor(frameIndex.get()))
        );
        drawFrame(currentIndex);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial setup

    function drawFrame(index: number) {
      if (!ctx || !canvasRef.current || !images[index] || !images[index].complete) return;
      
      const canvas = canvasRef.current;
      const img = images[index];
      
      // Calculate scale to "cover" the canvas while keeping aspect ratio
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    const unsubscribe = frameIndex.onChange((latest) => {
        requestAnimationFrame(() => {
            drawFrame(Math.min(24, Math.max(0, Math.floor(latest))));
        });
    });

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        unsubscribe();
    }
  }, [images, frameIndex]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover" 
        />
    </div>
  );
}
