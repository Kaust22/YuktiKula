import React, { useState, useEffect } from "react";
import "../components/gallery/gallery.css";

const events = [
  {
    id: 1,
    name: "GENERATIVE AI",
    cover: "/images/generativeAI/cover.webp",
    images: Array.from({ length: 21 }, (_, i) => `/images/generativeAI/${i + 1}.png`),
  },
  {
    id: 2,
    name: "DATA ANALYSIS BOOTCAMP",
    cover: "/images/dataAnalysis/cover.webp",
    images: Array.from({ length: 24 }, (_, i) => `/images/dataAnalysis/${i + 1}.png`),
  },
  {
    id: 3,
    name: "YOUR DOST",
    cover: "/images/yourDost/cover.webp",
    images: Array.from({ length: 12 }, (_, i) => `/images/yourDost/${i + 1}.png`),
  },
  {
    id: 4,
    name: "ADHYAAY",
    cover: "/images/Adhyaay/cover.webp",
    images: Array.from({ length: 24 }, (_, i) => `/images/Adhyaay/${i + 1}.png`),
  },
  {
    id: 5,
    name: "ECHO VERSE",
    cover: "/images/EchoVerse/cover.webp",
    images: Array.from({ length: 4 }, (_, i) => `/images/EchoVerse/${i + 1}.png`),
  },
  // {
  //   id: 6,
  //   name: "CLOUD COMPUTING SESSION",
  //   cover: "/images/CloudComputing/cover.webp",
  //   images: Array.from({ length: 7 }, (_, i) => `/images/CloudComputing/${i + 1}.png`),
  // },
  // {
  //   id: 7,
  //   name: "TEACHER'S DAY 2025",
  //   cover: "/images/teachersDay/cover.webp",
  //   images: Array.from({ length: 9 }, (_, i) => `/images/teachersDay/${i + 1}.png`),
  // },
  // {
  //   id: 8,
  //   name: "INTERNATIONAL WOMEN'S DAY",
  //   cover: "/images/WomensDay/cover.webp",
  //   images: Array.from({ length: 6 }, (_, i) => `/images/WomensDay/${i + 1}.png`),
  // },
  {
    id: 9,
    name: "IDEATHON",
    cover: "/images/Ideathon/cover.jpeg",
    images: Array.from({ length: 24 }, (_, i) => `/images/Ideathon/${i + 1}.png`),
  },
];

export default function Gallery() {
  const [popupEvent, setPopupEvent] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closePopup = () => setPopupEvent(null);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    if (popupEvent && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  };

  const showNext = () => {
    if (popupEvent && lightboxIndex < popupEvent.images.length - 1)
      setLightboxIndex(lightboxIndex + 1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">
          <img src="\public\images\Yuktikula-logo.png" alt="Yuktikula" className="logo" />
          Yuktikula Club Gallery
          {/* <span className="highlight">Gallery</span> */}
        </h1>
        <p className="gallery-subtitle">
          Event Memories & Highlights — Department of CSE (DS)
        </p>
      </header>

      <div className="cards-container">
        {events.map((event) => (
          <div
            key={event.id}
            className="card"
            onClick={() => setPopupEvent(event)}
          >
            <div className="card-image">
              <img src={event.cover} alt={event.name} />
              <div className="card-gradient" />
              <div className="card-label">{event.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupEvent && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-wrapper" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <h2>{popupEvent.name}</h2>

            <div className="popup-scroll-box">
              <div className="popup-grid">
                {popupEvent.images.map((img, i) => (
                  <div key={i} className="popup-card" onClick={() => setLightboxIndex(i)}>
                    <img src={img} alt={`${popupEvent.name} ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {popupEvent && lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
            &#10094;
          </button>
          <img
            src={popupEvent.images[lightboxIndex]}
            alt="Large view"
            className="lightbox-img"
          />
          <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); showNext(); }}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
