'use client';

import ScrollAnimation from "../components/ScrollAnimation";

export default function Tours() {
  return (
    <div className="tours-page">
      <section className="tours-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="tours-title animate-fade-in">
                <span className="title-accent">Discover</span> Our Tours
              </h1>
              <p className="tours-subtitle animate-fade-in-delay">
                Carefully curated experiences across Sri Lanka
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="tours-content">
        <div className="container">
          <ScrollAnimation>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="tours-description animate-fade-in">
                  <p className="lead">
                    Embark on unforgettable journeys through the heart of Sri Lanka. 
                    Our carefully crafted tours combine authentic experiences with 
                    comfortable travel, ensuring you discover the true essence of 
                    this beautiful island nation.
                  </p>
                  
                  <p>
                    From ancient cultural sites to pristine beaches, from misty 
                    mountains to wildlife safaris, our tours offer something for 
                    every type of traveler. Whether you're seeking adventure, 
                    relaxation, or cultural immersion, we have the perfect tour 
                    for you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <div className="tour-card">
                  <div className="tour-image-container">
                    <img src="/assets/images/homePageImg03.jpg" alt="Cultural Tour" className="tour-image" />
                    <div className="tour-overlay">
                      <div className="tour-info">
                        <h3>Cultural Heritage</h3>
                        <p>Ancient temples and historical sites</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <div className="tour-card">
                  <div className="tour-image-container">
                    <img src="/assets/images/homePageImg06.jpg" alt="Adventure Tour" className="tour-image" />
                    <div className="tour-overlay">
                      <div className="tour-info">
                        <h3>Adventure & Nature</h3>
                        <p>Wildlife safaris and outdoor activities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <div className="tour-card">
                  <div className="tour-image-container">
                    <img src="/assets/images/homePageImg02.jpg" alt="Beach Tour" className="tour-image" />
                    <div className="tour-overlay">
                      <div className="tour-info">
                        <h3>Beach & Relaxation</h3>
                        <p>Pristine beaches and coastal experiences</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 