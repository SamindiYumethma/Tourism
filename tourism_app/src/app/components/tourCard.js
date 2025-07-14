'use client';
import ScrollAnimation from "./ScrollAnimation";

// components/TourCard.js
export default function TourCard({ title, description, pdfUrl }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 tour-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {pdfUrl && (
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-primary mt-3"
            >
              View PDF for more info
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
