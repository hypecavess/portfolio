"use client";

import React from "react";

export default function HoverText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string 
}) {
  return (
    <span className={`relative inline-block overflow-hidden group cursor-pointer ${className}`}>
      <span className="flex">
        {text.split("").map((char, i) => (
          <span 
            key={i}
            className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 flex">
        {text.split("").map((char, i) => (
          <span 
            key={i}
            className="block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
