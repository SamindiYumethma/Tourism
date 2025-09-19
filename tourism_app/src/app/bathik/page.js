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
                <span className="title-accent">Sri Lankan</span> Batik
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                 A canvas of tradition painted in wax and dye
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
                    Sri Lankan Batik is more than fabric—it's a living art form. Each piece is handcrafted using wax-resist dyeing techniques, blending ancient tradition with modern flair.
                  </p>
                  <p>
                    From flowing sarongs to wall hangings, Batik designs reflect the island’s soul—floral motifs, mythical creatures, and vibrant geometric patterns. Whether worn or displayed, Batik tells stories of heritage, creativity, and cultural pride.
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
                   <h2 className="section-title">Explore Sri Lankan Batik</h2>
                   <p className="section-subtitle">
                    Discover the artistry, colors, and stories woven into every thread
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/batikImg01.jpg", title: "", description: "" },
                   { image: "/assets/images/batikImg02.jpg", title: "", description: "" },
                   { image: "/assets/images/batikImg03.jpg", title: "", description: "" }
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
