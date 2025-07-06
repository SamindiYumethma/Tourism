'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background" ref={heroRef}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title animate-fade-in">
                <span className="hero-text-main">Welcome to</span>
                <span className="hero-text-brand">
                  <span className="blissful-text">Blissful</span> Lanka
                </span>
                <span className="hero-text-subtitle">Where Adventure Meets Serenity</span>
              </h1>
              
              <p className="hero-description animate-fade-in-delay">
                Step into a tropical paradise where the scent of jasmine fills the air 
                and ancient temples whisper stories of a proud past.
              </p>
              
              <div className="hero-buttons animate-fade-in-delay-2">
                <button className="btn btn-primary btn-lg hero-btn">
                  <span>Explore Tours</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button className="btn btn-outline-light btn-lg hero-btn">
                  <span>Learn More</span>
                  <i className="fas fa-info-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
} 