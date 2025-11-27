'use client';

import ScrollAnimation from "../components/ScrollAnimation";
import Gallery from "../components/Gallery"; 

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="about-title animate-fade-in">
                <span className="title-accent">About</span> Blissful Lanka
              </h1>
              <p className="about-subtitle animate-fade-in-delay">
                Your gateway to Sri Lanka's wonders
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <ScrollAnimation>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="about-description animate-fade-in">
                  <p className="lead">
                    At Blissful Lanka, we believe every journey through Sri Lanka is more than just travel—it’s a story waiting to be lived. With over 20 years of experience in guiding travelers from across the globe, we have proudly welcomed guests from <b>Russia, Germany, Eastern Europe, the United Kingdom, and India,</b> sharing with them the vibrant soul of our island.
                  </p>
                  
                  <p>
                    Our tours are crafted with passion, blending cultural heritage, natural beauty, and authentic local experiences. Whether it’s the regal Kandyan dances, misty highland escapes, golden beaches, or ancient temples, we ensure every step reveals the timeless charm of Sri Lanka.
                  </p>
                  
                  <p>
                   What makes us unique is the personal touch—the photographs you see here are moments I’ve captured myself during tours, reflecting the joy, wonder, and connection that travelers experience with us. Each image is a window into the unforgettable journeys we create.
                  </p>

                  <p>
                    At Blissful Lanka, we don’t just show you places—we help you feel Sri Lanka. From the rhythm of traditional drums to the warmth of local smiles, every detail is carefully woven to make your visit truly blissful.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Gallery/>
    </div>
  );
} 