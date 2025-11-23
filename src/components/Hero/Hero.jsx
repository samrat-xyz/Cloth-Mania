"use client";

import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-screen bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage:
          "url('https://www.cnet.com/a/img/resize/24dc15a9b2440836efab10b370a09886d6c0ccce/hub/2022/01/20/9401453e-a9a1-4fd6-a1e1-419b8b8fbc88/mens-hero.jpg?auto=webp&fit=crop&height=900&width=1200')",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

      <div className="hero-content text-neutral-content text-left relative z-10 max-w-3xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="text-white">
          <p className="text-sm sm:text-base md:text-lg tracking-widest text-primary font-semibold uppercase">
            Cloth Mania
          </p>

          <h1 className="mt-2 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug">
            Discover Your <span className="text-primary">Style</span><br />
            Upgrade Your Wardrobe
          </h1>

          <p className="mb-8 text-sm sm:text-base md:text-lg opacity-90">
            Explore our premium men's & women's fashion collection.  
            Trendy, stylish, and crafted for comfort.  
            Shop the newest arrivals today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg w-full sm:w-auto">
              Shop Now
            </button>

            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg w-full sm:w-auto">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
