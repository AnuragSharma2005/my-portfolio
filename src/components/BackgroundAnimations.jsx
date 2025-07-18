// src/components/AnimatedBackground.jsx
import React from "react";

const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Big soft white glowing orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 -left-40 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-white/15 rounded-full blur-2xl animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-ping" />
      <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse delay-500" />

      {/* ✨ Floating shiny boxes */}
      <div className="absolute top-20 right-1/4 w-4 h-4 bg-white/30 rotate-45 animate-spin-slow blur-sm" />
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/25 rotate-12 animate-bounce delay-700 blur-sm" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/40 animate-pulse delay-300 blur" />
      <div className="absolute top-1/4 left-1/5 w-5 h-5 bg-white/20 rounded blur animate-float delay-200" />
      <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-white/15 rotate-45 animate-spin-slow delay-1500 blur-md" />

      {/* ✨ Extra shiny floating boxes */}
      <div className="absolute top-[15%] left-[20%] w-5 h-5 bg-white/25 rotate-45 animate-float blur-sm" />
      <div className="absolute bottom-[10%] right-[15%] w-7 h-7 bg-white/20 rounded animate-ping blur" />
      <div className="absolute top-[60%] left-[10%] w-6 h-6 bg-white/30 animate-bounce rotate-12 blur-sm" />
      <div className="absolute bottom-[70%] right-[25%] w-4 h-4 bg-white/25 animate-spin-slow blur" />
      <div className="absolute top-[40%] left-[50%] w-6 h-6 bg-white/20 rounded-full animate-float blur-sm" />

      {/* Soft animated lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-right" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent animate-slide-left" />

      {/* Tiny particles (dots) */}
      <div className="absolute top-1/5 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-particle" />
      <div className="absolute bottom-1/5 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-particle delay-600" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-particle delay-1000" />
    </div>
  );
};

export default BackgroundAnimations;
