import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ideaTitle: "",
    ideaDescription: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted idea:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      ideaTitle: "",
      ideaDescription: "",
    });
  };

  return (
    <div className="feedback-form fade-in">
      {submitted ? (
        <p className="thank-you">
          🎉 Thank you for sharing your idea! Our event team will review it soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="idea-form">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Idea Title</label>
          <input
            type="text"
            name="ideaTitle"
            value={formData.ideaTitle}
            onChange={handleChange}
            placeholder="e.g., Tech Quiz Challenge or Art Fusion Fair"
            required
          />

          <label>Describe Your Idea</label>
          <textarea
            name="ideaDescription"
            value={formData.ideaDescription}
            onChange={handleChange}
            placeholder="Tell us more about your event idea..."
            required
          ></textarea>

          <button type="submit">Submit Idea</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
