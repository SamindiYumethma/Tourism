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
                <span className="title-accent">Sri Lankan</span> Wildlife
              </h1>
              <p className="spices-subtitle animate-fade-in-delay">
                 Safari through jungles, lakes, and wild heartlands
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
                    Venture into Sri Lanka’s untamed wilderness, where leopards prowl through shadowed forests and elephants gather beneath ancient trees. Each safari unveils a new rhythm of life, echoing through misty lakes and golden savannahs.
                  </p>
                  <p>
                    From the leopard-rich terrain of Yala to the elephant herds of Udawalawe, Sri Lanka’s national parks offer intimate encounters with nature’s finest. Whether you seek birdsong in Kumana or sloth bears in Wilpattu, the island’s wild soul awaits.
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
                   <h2 className="section-title">Explore Sri Lankan Wild-life</h2>
                   <p className="section-subtitle">
                     Discover iconic animals and the parks they call home
                   </p>
                 </div>
               </ScrollAnimation>
     
               <div className="row">
                 {[
                   { image: "/assets/images/wildlifeImg02.jpg", title: "", description: "" },
                   { image: "/assets/images/wildlifeImg03.jpg", title: "", description: "" },
                   { image: "/assets/images/wildlifeImg01.jpg", title: "", description: "" }
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
