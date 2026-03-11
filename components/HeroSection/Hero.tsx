
"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";
import { useHero } from "./useHero";

export const Hero = () => {
  return (
    <div className="relative h-full p-28 bg-slate-950 flex justify-center overflow-hidden z-0">
      <BackgroundCellCore />
      <div className="relative z-50 mt-10 pointer-events-none select-none text-center">
        <h1 className="sm:text-lg md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
          Hello, I am Bhavisha Nayi
          <p className="text-orange-400 md:text-2xl lg:text-4xl leading-relaxed mt-2 p-2" >React.js Developer | Building High-Performance Web Applications</p>
        </h1>
        <p className="text-gray-500 md:text-lg lg:text-lg mt-1 p-2">Software Developer with 3+ years of experience building scalable React applications, REST APIs, and modern UI systems.
          I focus on performance, maintainability, and clean architecture.</p>
      </div>
    </div>
  );
};

const BackgroundCellCore = () => {

  const {
    mousePosition,
    heroRef,
    handleMouseMove,
    size
  } = useHero();

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0"
    >
      <div className="absolute h-[20rem] inset-y-0  overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
            ${size / 4}px circle at center,
           white, transparent
          )`,
            WebkitMaskImage: `radial-gradient(
          ${size / 4}px circle at center,
          white, transparent
        )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2
              }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const Pattern = ({
  className,
  cellClassName,
}: {
  className?: string;
  cellClassName?: string;
}) => {
  const {
    matrix,
    clickCell,
    setClickedCell,
    controls
  } = useHero();

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {

            clickCell(rowIdx, colIdx)

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(14,165,233,0.3)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};


