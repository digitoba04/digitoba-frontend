import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    businessName: "",
    description: "",
  });

  const [currentTime, setCurrentTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available time slots
  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];

  // Update Canadian time
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "America/Toronto",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const formatter = new Intl.DateTimeFormat("en-CA", options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedDate, selectedTime });
    setIsSubmitted(true);
  };

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Previous month days
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`prev-${i}`} className="calendar-day empty"></div>);
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDate.getDate();
      days.push(
        <motion.div
          key={i}
          className={`calendar-day ${isSelected ? "selected" : ""}`}
          onClick={() => setSelectedDate(new Date(year, month, i))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {i}
        </motion.div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format date for display
  const formatDate = (date) => {
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="contact-page">
      {/* Animated Background Elements */}
      <div className="tech-background">
        <div className="tech-grid"></div>
        <div className="tech-orb orb-1"></div>
        <div className="tech-orb orb-2"></div>
        <div className="tech-orb orb-3"></div>
        <div className="tech-line line-1"></div>
        <div className="tech-line line-2"></div>
        <div className="tech-line line-3"></div>
      </div>

      {/* Header Section */}
      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1 className="main-title">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="subtitle">
            Ready to transform your digital presence? Let's discuss your
            project.
          </p>
          <div className="canada-time">
            <span className="time-icon">⏰</span>
            <span className="time-label">Canada Time:</span>
            <span className="current-time">{currentTime}</span>
          </div>
        </div>
      </motion.header>

      <div className="container main-container">
        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Calendar & Booking */}
          <motion.div className="calendar-section" variants={itemVariants}>
            <div className="calendar-card">
              <h3>Schedule a Meeting</h3>
              <div className="calendar-header">
                <motion.button
                  className="nav-button"
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() - 1,
                        1
                      )
                    )
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &lt;
                </motion.button>
                <h4>
                  {monthNames[selectedDate.getMonth()]}{" "}
                  {selectedDate.getFullYear()}
                </h4>
                <motion.button
                  className="nav-button"
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() + 1,
                        1
                      )
                    )
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &gt;
                </motion.button>
              </div>

              <div className="calendar-weekdays">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>

              <div className="calendar-days">{generateCalendarDays()}</div>

              <div className="time-slots">
                <h4>Available Time Slots</h4>
                <div className="time-buttons">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      className={`time-btn ${
                        selectedTime === time ? "selected" : ""
                      }`}
                      onClick={() => setSelectedTime(time)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Contact Form */}
          <motion.div className="form-section" variants={itemVariants}>
            <div className="form-card">
              <h2>Project Inquiry</h2>
              <p>Tell us about your project requirements</p>

              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">
                    <motion.svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you within 24 hours.
                  </p>
                  <motion.button
                    className="back-to-form-btn"
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email Address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Business Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Business Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      rows="4"
                      required
                    />
                  </div>

                  {/* Booking Overview inside the form */}
                  {selectedDate && selectedTime && (
                    <motion.div
                      className="booking-overview-form"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3>Booking Overview</h3>
                      <div className="booking-details-form">
                        <div className="booking-detail-item">
                          <span className="detail-label">Location:</span>
                          <span className="detail-value">Online Meeting</span>
                        </div>
                        <div className="booking-detail-item">
                          <span className="detail-label">Service:</span>
                          <span className="detail-value">Consultation</span>
                        </div>
                        <div className="booking-detail-item">
                          <span className="detail-label">Duration:</span>
                          <span className="detail-value">30 minutes</span>
                        </div>
                        <div className="booking-detail-item">
                          <span className="detail-label">Date & Time:</span>
                          <span className="detail-value">
                            {formatDate(selectedDate)} {selectedTime}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Info & Map */}
          <motion.div className="info-section" variants={itemVariants}>
            <div className="info-card">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (929) 256-2834</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>digitoba938@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-details">
                  <h4>Website</h4>
                  <p>www.digitoba.ca</p>
                </div>
              </div>

              <div className="stats">
                <p className="views-count">64 total views today</p>
              </div>
            </div>

            <div className="offices-card">
              <h3>Our Offices</h3>
              <p>Visit one of our offices around the world</p>

              <div className="office-location">
                <h4>Canada Office</h4>
                <p>1122 4 St SW 710, Calgary, AB T2R 1M1, Canada</p>
              </div>

              <div className="office-location">
                <h4>India Office</h4>
                <p>
                  7/1C, Miajan Ostagar Lane, Park Circus, Kolkata, West Bengal
                  700017
                </p>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.560121086766!2d88.36302557588749!3d22.535366979526035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b7bbef43d7%3A0x4474b6d248b72e2c!2sPark%20Circus%2C%20Beniapukur%2C%20Kolkata%2C%20West%20Bengal%20700017!5e0!3m2!1sen!2sin!4v1724249273228!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Digitoba India Office Location"
                ></iframe>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Digitoba transformed our online presence completely. Their
                  team delivered beyond our expectations with innovative
                  solutions."
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Sophia Martinez</span>
                  <span className="author-role">Customer since 2022</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
