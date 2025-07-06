'use client';

import ScrollAnimation from "../components/ScrollAnimation";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="contact-title animate-fade-in">
                <span className="title-accent">Get</span> In Touch
              </h1>
              <p className="contact-subtitle animate-fade-in-delay">
                Ready to start your Sri Lanka adventure?
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <ScrollAnimation>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="contact-description animate-fade-in">
                  <p className="lead">
                    We're here to help you plan the perfect Sri Lanka experience. 
                    Whether you have questions about our tours, need help with 
                    booking, or want to customize your journey, our travel experts 
                    are ready to assist you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <div className="contact-card">
                  <div className="contact-card-content">
                    <i className="fas fa-phone contact-icon"></i>
                    <h3>Call Us</h3>
                    <p>+94 11 234 5678</p>
                    <p>Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <div className="contact-card">
                  <div className="contact-card-content">
                    <i className="fas fa-envelope contact-icon"></i>
                    <h3>Email Us</h3>
                    <p>info@blissfullanka.com</p>
                    <p>We reply within 24 hours</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 mb-4">
              <ScrollAnimation>
                <div className="contact-card">
                  <div className="contact-card-content">
                    <i className="fas fa-map-marker-alt contact-icon"></i>
                    <h3>Visit Us</h3>
                    <p>123 Temple Road, Colombo</p>
                    <p>Sri Lanka</p>
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