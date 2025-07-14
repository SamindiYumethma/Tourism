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
                <span className="title-accent">Sri Lankan</span> Dancing 
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                A rhythmic journey through heritage and grace
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
                    Step into the heartbeat of Sri Lanka, where traditional dance transforms movement into storytelling. From the regal Kandyan dances of the hill country to the spirited Low Country rituals of the southern coast, each step echoes centuries of devotion, artistry, and celebration.
                  </p>
                  <p>
                    Whether it's the graceful swirl of a dancer in a Ves costume or the masked drama of a Kolam performance, Sri Lankan dancing is a living legacy. It’s more than performance—it’s a cultural symphony where rhythm, costume, and emotion unite to honor gods, nature, and community. Let the drums guide you through a timeless island tale.
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
                   <h2 className="section-title">Explore Sri Lankan Dancing</h2>
                   <p className="section-subtitle">
                     Discover rhythm, ritual, and cultural elegance
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/dancingImg02.jpg", title: "", description: "" },
                   { image: "/assets/images/dancingImg01.jpg", title: "", description: "" },
                   { image: "/assets/images/dancingImg03.jpg", title: "", description: "" }
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
