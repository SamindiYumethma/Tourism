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
                <span className="title-accent">Sri Lankan</span> Gems & Jewellery
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                Where beauty is forged from earth and tradition
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
                    Dive into the legacy of Sri Lanka’s gemstone heritage, famed for its radiant sapphires, moonstones, and intricate craftsmanship. For centuries, the island has dazzled traders and royalty with treasures mined from sacred soil and polished by master artisans.
                  </p>
                  <p>
                    From vibrant jewelry markets in Colombo to ancient gem pits in Ratnapura, every sparkle holds a tale of nature, patience, and skilled hands. Whether you're admiring handcrafted bangles or learning about gem-cutting traditions, Sri Lanka’s jewellery artistry offers timeless elegance wrapped in cultural richness.
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
                   <h2 className="section-title">Explore Sri Lankan Gems</h2>
                   <p className="section-subtitle">
                     Discover the radiant beauty of Sri Lankan gems
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/gemsImg01.jpg", title: "", description: "" },
                   { image: "/assets/images/gemsImg03.jpg", title: "", description: "" },
                   { image: "/assets/images/gemsImg02.jpg", title: "", description: "" }
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
