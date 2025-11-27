'use client';

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const images = [
  "/assets/images/gallery1.jpg",
  "/assets/images/gallery2.jpg",
  "/assets/images/gallery3.jpg",
  "/assets/images/gallery4.jpg",
  "/assets/images/gallery5.jpg",
  "/assets/images/gallery6.jpg",
  "/assets/images/gallery7.jpg",
  "/assets/images/gallery8.jpg",
  "/assets/images/gallery9.jpg",
  "/assets/images/gallery10.jpg",
  "/assets/images/gallery11.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <ScrollAnimation>
          <h2 className="text-center mb-4 animate-fade-in">Captured Moments</h2>
          <div className="row">
            {images.map((src, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="gallery-item animate-fade-in-delay">
                  <Image
                    src={src}
                    alt={`Tour photo ${index + 1}`}
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* ✅ Scoped CSS inside the component */}
      <style jsx>{`
        .gallery-item {
          width: 100%;
          height: 250px;       /* fixed height for all images */
          overflow: hidden;    /* crop anything outside */
          position: relative;  /* required for Image with fill */
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;   /* crop to fit the box */
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
