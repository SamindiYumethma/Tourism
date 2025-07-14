'use client';

import ScrollAnimation from "../components/ScrollAnimation";

export default function Spices() {
  return (
    <div className="spices-page">
      <section className="spices-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="spices-title animate-fade-in">
                <span className="title-accent">Sri Lankan</span> Spices
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                The Spice Island of Asia
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="spices-content">
        <div className="container">
          <ScrollAnimation>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="spices-description animate-fade-in">
                  <p className="lead">
                    Welcome to the Spice Island of Asia, where every pinch of seasoning tells a story. 
                    Sri Lanka's tropical climate and fertile soil have gifted the island with a dazzling 
                    array of spices that have enchanted traders, chefs, and explorers for centuries.
                  </p>
                  
                  <p>
                    From the sweet warmth of Ceylon cinnamon, known as "true cinnamon," to the bold kick 
                    of black pepper, Sri Lankan spices are more than ingredients—they're cultural treasures. 
                    Wander through lush spice gardens in Kandy, Matale, or Galle, and discover the secrets 
                    behind cardamom, cloves, turmeric, and nutmeg, each with its own aroma, flavor, and 
                    healing properties.
                  </p>
                  
                  <p>
                    Whether you're savoring a fiery curry, sipping spiced tea, or learning ancient 
                    Ayurvedic traditions, Sri Lankan spices offer a sensory adventure that lingers 
                    long after your journey ends.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="spices-gallery">
        <div className="container">
          <ScrollAnimation>
            <div className="section-header text-center">
              <h2 className="section-title">Explore Sri Lankan Spices</h2>
              <p className="section-subtitle">
                Discover the aromatic world of Sri Lankan spices
              </p>
            </div>
          </ScrollAnimation>

          <div className="row">
            {[
              { image: "/assets/images/spicesImg01.jpg", title: "", description: "" },
              { image: "/assets/images/spicesImg02.jpg", title: "", description: "" },
              { image: "/assets/images/spicesImg03.jpg", title: "", description: "" }
            ].map((spice, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <ScrollAnimation>
                  <div className="spice-card">
                    <div className="spice-image-container">
                      <img src={spice.image} alt={spice.title} className="spice-image" />
                      <div className="spice-overlay">
                        <div className="spice-info">
                          <h3>{spice.title}</h3>
                          <p>{spice.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 