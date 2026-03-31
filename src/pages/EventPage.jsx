import React, { useEffect } from "react";
import "./EventPage.css";
import FeedbackForm from "../components/Event/FeedbackForm";

const EventPage = () => {
  const upcomingEvents = [];

  const allEvents = [
    
      {
      title: "IDEATHON 2026",
      description:
        "Chance to stand out, not blend in. Limited time, limited spotlight. Unlimited potential.",
      date: "February 18, 2026",
      time: "1:30 PM",
      location: "SBG Hall",
    },
    {
      title: "Online Session on Network Security",
      description:
        "an online session on network security(firewalls) and business operations with Sahil Sharma.",
      date: "February 23, 2026",
      time: "7:00 PM",
      location: "Google Meet",
    },
    {
      title: "Induction Program (Your Dost)",
      description:
        "Session on mental health by Gunjan Parag Patel (Bleeding Yellow at YourDost).",
      date: "September 12, 2025",
      time: "3:30 PM to 4:30 PM",
      location: "SHD Hall",
    },
    
  ];

  // Optional fade-in animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    revealElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="event-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content fade-in">
          <h1>Campus Events</h1>
          <p>
            Discover exciting events, connect with peers, and make memories that
            last a lifetime.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section fade-in">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* All Events */}
      <section className="section fade-in">
        <h2>All Events</h2>
        <div className="event-grid">
          {allEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Idea Submission Form */}
      <section className="section fade-in">
        <h2>💡 Share Your Event Idea</h2>
        <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.2rem", color: "#ffffff65" }}>
          Have an idea for a campus event? Tell us and we might bring it to
          life!
        </p>
        <FeedbackForm />
      </section>

    </div>
  );
};

export default EventPage;
