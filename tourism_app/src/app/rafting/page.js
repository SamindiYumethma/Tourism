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
                <span className="title-accent">Sri Lankan</span> Rafting
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                 Adventure through tropical rivers and rapids
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
                    Splash into Sri Lanka’s wild waters, where rafting thrills are framed by lush jungle canopies and misty river bends. From gentle flows to heart-racing rapids, every moment pulses with tropical energy.
                  </p>
                  <p>
                    Whether you’re navigating the Kelani River in Kitulgala or drifting through lesser-known inland streams, rafting in Sri Lanka is a chance to explore raw nature while feeling every ripple, splash, and surge. It’s more than an adventure—it’s a dance with the rhythm of the island’s hidden waterways.
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
                   <h2 className="section-title">Explore Sri Lankan Rafting</h2>
                   <p className="section-subtitle">
                         Discover adventure across rivers and rainforests
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/raftingImg02.jpg", title: "", description: "" },
                   { image: "/assets/images/raftingImg01.jpg", title: "", description: "" },
                   { image: "/assets/images/raftingImg03.jpg", title: "", description: "" }
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
