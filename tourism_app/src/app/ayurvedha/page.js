'use client';

import ScrollAnimation from "../components/ScrollAnimation";

export default function Gems() {
  return (
    <div className="spices-page">
      <section className="spices-hero">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="spices-title animate-fade-in">
                <span className="title-accent">Sri Lankan</span> Ayurveda
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                Island wisdom wrapped in herbs, rituals, and renewal
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
                    Rooted in 3,000 years of healing practice, Sri Lankan Ayurveda is a holistic tradition where nature, spirit, and balance converge.
                  </p>
                  <p>
                    From steaming herbal baths to rhythmic oil massages, every treatment is tailored to the body’s inner rhythm and elemental energies. Herbs like neem, gotukola, and cinnamon infuse remedies with island purity—bringing harmony to mind, body, and soul. Whether in a misty forest retreat or a coastal wellness villa, Ayurveda here is not just medicine—it’s an embrace of earth and essence.
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
                   <h2 className="section-title">Explore Ayurvedic Rituals</h2>
                   <p className="section-subtitle">
                     Ancient treatments for modern serenity
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/ayurveda01.jpg", title: "", description: "" },
                   { image: "/assets/images/ayurveda02.jpg", title: "", description: "" },
                   { image: "/assets/images/ayurveda03.jpg", title: "", description: "" }
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
