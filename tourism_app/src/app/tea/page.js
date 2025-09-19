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
                <span className="title-accent">Sri Lankan</span> Tea
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                 Sip the golden soul of Sri Lanka’s highlands
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
                    Grown in the misty highlands and nurtured by tropical sunshine, Ceylon tea is Sri Lanka’s most iconic brew. Its vibrant flavor and golden hue have enchanted tea lovers around the world for generations.
                  </p>
                  <p>
                    From the brisk citrusy notes of Nuwara Eliya to the smooth richness of Hatton, each region offers a unique taste profile. Whether enjoyed black, with milk, or infused with spices, every cup tells a story of tradition, craftsmanship, and nature’s bounty.
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
                   <h2 className="section-title">Explore Sri Lankan Tea</h2>
                   <p className="section-subtitle">
                     Discover the estates and flavors that define Sri Lanka’s golden brew
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/teaImg02.jpg", title: "", description: "" },
                   { image: "/assets/images/teaImg01.jpg", title: "", description: "" },
                   { image: "/assets/images/teaImg03.jpg", title: "", description: "" }
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
