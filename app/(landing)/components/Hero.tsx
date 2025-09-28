"use client";

import Cta from "./Cta";
import "../styles/hero.css"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background slika */}
      <Image src="/fitness-hero.jpg" alt="Fitness Hero" width={1920} height={1080} className="object-cover w-full h-full"/>

      {/* Overlay za kontrast */}
      <div className="hero-overlay">
        <h1 className="hero-title">
          Your Motion. Your Progress.
        </h1>
        <p className="hero-subtitle">
          Join DVeb Motion™ and reach your fitness goals faster.
        </p>
        <Cta />
      </div>
    </section>
  );
}
