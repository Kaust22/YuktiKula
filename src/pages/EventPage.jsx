import React, { useEffect } from "react";
import "./EventPage.css";
import FeedbackForm from "../components/Event/FeedbackForm";

const EventPage = () => {
  const upcomingEvents = [
    {
      title: "Tech Innovation Summit 2025",
      description:
        "Join industry leaders and innovators for a day of groundbreaking tech talks and networking.",
      date: "March 15, 2025",
      time: "9:00 AM",
      location: "Main Auditorium",
    },
    {
      title: "Cultural Fest: Unity in Diversity",
      description:
        "Celebrate diverse cultures through music, dance, food, and art from around the world.",
      date: "March 22, 2025",
      time: "2:00 PM",
      location: "Campus Grounds",
    },
  ];

  const allEvents = [
    ...upcomingEvents,
    {
      title: "Entrepreneurship Workshop",
      description:
        "Learn from successful entrepreneurs about starting and scaling your own business.",
      date: "April 12, 2025",
      time: "3:00 PM",
      location: "Room 305, Business Building",
    },
    {
      title: "Spring Music Concert",
      description:
        "An evening of live performances by talented student musicians and bands.",
      date: "April 18, 2025",
      time: "7:00 PM",
      location: "Campus Theater",
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
