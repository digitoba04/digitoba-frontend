import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Countries and categories for dropdowns
  const countries = [
    "Select your country...",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "Other",
  ];

  const categories = [
    "Select Category",
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
    "SEO Services",
    "Mobile App Development",
    "Branding",
    "Consultation",
    "Other",
  ];

  // Sample reviews data
  const reviews = [
    {
      name: "Emily Chen",
      location: "Toronto, Canada",
      rating: 5,
      content:
        "Digitoba transformed our online presence! Their website design services are exceptional.",
      avatar: "EC",
    },
    {
      name: "Marcus Johnson",
      location: "Vancouver, Canada",
      rating: 5,
      content:
        "Outstanding SEO results! Our organic traffic grew by 200% in just 3 months.",
      avatar: "MJ",
    },
    {
      name: "Sophie Tremblay",
      location: "Montreal, Canada",
      rating: 5,
      content:
        "The mobile app developed by Digitoba exceeded our expectations. Highly recommend!",
      avatar: "ST",
    },
    {
      name: "David Wilson",
      location: "Calgary, Canada",
      rating: 5,
      content:
        "Digitoba's cloud solutions have streamlined our operations significantly.",
      avatar: "DW",
    },
    {
      name: "Lisa Zhang",
      location: "Ottawa, Canada",
      rating: 5,
      content:
        "Incredible UI/UX design work! Our customers love the new interface.",
      avatar: "LZ",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.country || formData.country === "Select your country...")
      newErrors.country = "Please select your country";
    if (!formData.category || formData.category === "Select Category")
      newErrors.category = "Please select a category";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        category: "",
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="contact-section">
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-circle circle-4"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h1 className="main-title">Any Questions Rising?</h1>
          <h2 className="subtitle">We are All Here.</h2>
          <p className="intro-text">
            Whether you have a question, need assistance, or want to start a new
            project, our team is here to help.
          </p>
          <div className="header-divider"></div>
        </div>

        <div className="contact-container">
          <div className="form-section">
            <div className="form-header">
              <h3>Fill The Form Out!</h3>
            </div>

            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
                <button
                  className="back-to-form-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "error" : ""}
                      placeholder="Jane"
                    />
                    {errors.firstName && (
                      <span className="error-text">{errors.firstName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "error" : ""}
                      placeholder="Smith"
                    />
                    {errors.lastName && (
                      <span className="error-text">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">How can we reach you? *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    placeholder="jane@gmail.com"
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Where Are you from? *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={errors.country ? "error" : ""}
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <span className="error-text">{errors.country}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">
                      Which field are you interested in? *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={errors.category ? "error" : ""}
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <span className="error-text">{errors.category}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message? *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    placeholder="Type your message..."
                    rows="4"
                  />
                  {errors.message && (
                    <span className="error-text">{errors.message}</span>
                  )}
                </div>

                <button type="submit" className="submit-btn">
                  Submit Now
                </button>
              </form>
            )}
          </div>

          <div className="reviews-section">
            <div className="reviews-card">
              <div className="reviews-header">
                <h3>Customer Reviews</h3>
                <div className="rating-badge">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">5.0 from 270+ reviews</span>
                </div>
              </div>

              <div className="reviews-carousel">
                <div className="review-content">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {reviews[currentReviewIndex].avatar}
                    </div>
                    <div className="reviewer-details">
                      <h4>{reviews[currentReviewIndex].name}</h4>
                      <p className="review-location">
                        {reviews[currentReviewIndex].location}
                      </p>
                    </div>
                  </div>
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">
                    "{reviews[currentReviewIndex].content}"
                  </p>
                </div>

                <div className="carousel-controls">
                  <button className="carousel-btn" onClick={prevReview}>
                    &lt;
                  </button>
                  <div className="carousel-indicators">
                    {reviews.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${
                          index === currentReviewIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentReviewIndex(index)}
                      ></span>
                    ))}
                  </div>
                  <button className="carousel-btn" onClick={nextReview}>
                    &gt;
                  </button>
                </div>
              </div>

              <div className="reviews-footer">
                <p>All reviews from verified Canadian customers</p>
                <div className="google-badge">
                  <span className="google-icon">G</span>
                  <span>Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
