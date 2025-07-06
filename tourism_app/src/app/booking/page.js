'use client';

import ScrollAnimation from "../components/ScrollAnimation";

export default function Booking() {
  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="booking-title animate-fade-in">
                <span className="title-accent">Book</span> Your Adventure
              </h1>
              <p className="booking-subtitle animate-fade-in-delay">
                Ready to experience the magic of Sri Lanka?
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <ScrollAnimation>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="booking-description animate-fade-in">
                  <p className="lead">
                    Start your journey to paradise with our easy booking process. 
                    Choose your preferred dates, select your dream tour, and let 
                    us handle the rest. Our team is here to ensure your Sri Lanka 
                    adventure is nothing short of extraordinary.
                  </p>
                  
                  <p>
                    Whether you're planning a romantic getaway, a family vacation, 
                    or a solo adventure, we have the perfect package for you. 
                    Contact our travel experts to customize your experience and 
                    create memories that will last a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <ScrollAnimation>
                <div className="booking-card">
                  <div className="booking-card-content">
                    <h3>Contact Our Experts</h3>
                    <p>Get personalized assistance with your booking</p>
                    <button className="btn btn-primary">Get in Touch</button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-6 mb-4">
              <ScrollAnimation>
                <div className="booking-card">
                  <div className="booking-card-content">
                    <h3>Custom Packages</h3>
                    <p>Create your own unique Sri Lanka experience</p>
                    <button className="btn btn-outline-primary">Learn More</button>
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