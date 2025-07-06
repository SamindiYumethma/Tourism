'use client';

import ScrollAnimation from "../components/ScrollAnimation";

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
                    At Blissful Lanka, we believe that travel should be more than 
                    just visiting places—it should be about creating meaningful 
                    connections and unforgettable experiences. Our passion for Sri 
                    Lanka drives us to share the island's authentic beauty with 
                    travelers from around the world.
                  </p>
                  
                  <p>
                    Founded by local experts with deep knowledge of Sri Lanka's 
                    culture, history, and hidden gems, we specialize in crafting 
                    personalized journeys that go beyond the typical tourist 
                    experience. From ancient temples to pristine beaches, from 
                    misty mountains to wildlife encounters, we ensure every moment 
                    of your journey is filled with wonder and discovery.
                  </p>
                  
                  <p>
                    Our commitment to sustainable tourism and authentic experiences 
                    means you'll not only see the beauty of Sri Lanka but also 
                    contribute to preserving its natural and cultural heritage for 
                    future generations.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
} 