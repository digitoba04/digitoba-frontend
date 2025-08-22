import React, { useEffect, useState } from "react";
import servicesData from "../../data/servicesData.json";
import * as FaIcons from "react-icons/fa";
import {
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";

// Tech stack icons for different services
const techStackIcons = {
  "web-design": [
    { icon: "FaHtml5", name: "HTML5", color: "#E34F26" },
    { icon: "FaCss3Alt", name: "CSS3", color: "#1572B6" },
    { icon: "FaJs", name: "JavaScript", color: "#F7DF1E" },
    { icon: "FaReact", name: "React", color: "#61DAFB" },
    { icon: "FaNodeJs", name: "Node.js", color: "#339933" },
    { icon: "FaWordpress", name: "WordPress", color: "#21759B" },
  ],
  "app-development": [
    { icon: "FaReact", name: "React Native", color: "#61DAFB" },
    { icon: "FaAndroid", name: "Android", color: "#3DDC84" },
    { icon: "FaApple", name: "iOS", color: "#000000" },
    { icon: "FaFlutter", name: "Flutter", color: "#02569B" },
  ],
  "ai-agents": [
    { icon: "FaRobot", name: "AI", color: "#FF6B6B" },
    { icon: "FaBrain", name: "Machine Learning", color: "#4834D4" },
    { icon: "FaPython", name: "Python", color: "#3776AB" },
    { icon: "FaDatabase", name: "NLP", color: "#336791" },
  ],
  seo: [
    { icon: "FaSearch", name: "SEO", color: "#34A853" },
    { icon: "FaGoogle", name: "Google Analytics", color: "#4285F4" },
    { icon: "FaChartLine", name: "Analytics", color: "#FF6D00" },
    { icon: "FaLink", name: "Backlinks", color: "#6200EA" },
  ],
  "social-media": [
    { icon: "FaFacebook", name: "Facebook", color: "#1877F2" },
    { icon: "FaInstagram", name: "Instagram", color: "#E4405F" },
    { icon: "FaTwitter", name: "Twitter", color: "#1DA1F2" },
    { icon: "FaYoutube", name: "YouTube", color: "#FF0000" },
  ],
};

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [notification, setNotification] = useState({ show: false, name: "" });
  const [detailedView, setDetailedView] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  // Use the services from the JSON file
  const services = servicesData.services;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setActiveSection(hash);
      if (hash) {
        const targetSection = document.getElementById(hash);
        if (targetSection) {
          setTimeout(() => {
            targetSection.scrollIntoView({ behavior: "smooth" });
            const sectionTitle = targetSection.querySelector("h2")?.textContent;
            if (sectionTitle) {
              setNotification({ show: true, name: sectionTitle });
              setTimeout(
                () => setNotification({ show: false, name: "" }),
                3000
              );
            }
          }, 100);
        }
      }
    };

    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const servicesNav = [
    { id: "web-design", label: "Web Design" },
    { id: "app-development", label: "App Development" },
    { id: "ai-agents", label: "AI Agents" },
    { id: "seo", label: "SEO Optimization" },
    { id: "social-media", label: "Social Media" },
  ];

  const clearFilter = () => {
    window.location.hash = "";
    setActiveSection("");
    setDetailedView(false);
    setSelectedService(null);
  };

  const handleLearnMore = (service) => {
    setDetailedView(true);
    setSelectedService(service);
    window.location.hash = service.id;
  };

  const handleBackToList = () => {
    setDetailedView(false);
    setSelectedService(null);
    window.location.hash = "";
  };

  const handleContactClick = () => {
    // Redirect to contact page
    navigate("/contact-us");

    // Open Tawk.to chat after a short delay to ensure page loads
    setTimeout(() => {
      if (window.Tawk_API && window.Tawk_API.maximize) {
        window.Tawk_API.maximize();
      }
    }, 1000);
  };

  // Check if we're showing a filtered view
  const isFilteredView =
    activeSection && services.some((s) => s.id === activeSection);

  return (
    <div className="services-container">
      <header className="services-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive digital solutions to grow your business
        </motion.p>

        <motion.div
          className="header-decoration"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </motion.div>
      </header>

      <div className="services-nav">
        {servicesNav.map((nav) => (
          <motion.a
            key={nav.id}
            href={`#${nav.id}`}
            className={`service-nav-item ${
              activeSection === nav.id ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = nav.id;
              setDetailedView(true);
              const service = services.find((s) => s.id === nav.id);
              if (service) setSelectedService(service);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {nav.label}
          </motion.a>
        ))}
      </div>

      {detailedView && selectedService ? (
        // Detailed view for a single service
        <div className="service-detail-view">
          <div id={selectedService.id} className="service-detail-section">
            <div className="service-hero">
              <motion.div
                className="service-hero-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {React.createElement(
                  FaIcons[selectedService.icon] || FaIcons.FaLaptopCode
                )}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {selectedService.title}
              </motion.h2>
              <motion.p
                className="service-detail-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {selectedService.detailedDesc}
              </motion.p>
            </div>

            <motion.div
              className="tech-stack-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Tech Stack & Tools</h3>
              <div className="tech-stack-grid">
                {techStackIcons[selectedService.id]?.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div
                      className="tech-icon"
                      style={{
                        backgroundColor: `${tech.color}20`,
                        color: tech.color,
                      }}
                    >
                      {React.createElement(
                        FaIcons[tech.icon] || FaIcons.FaQuestion
                      )}
                    </div>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="service-detail-content">
              <motion.div
                className="detail-column"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3>What We Offer</h3>
                <ul className="service-features detailed">
                  {selectedService.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + 0.7 }}
                    >
                      <FaCheckCircle /> {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="detail-column"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3>Our Process</h3>
                <ol className="service-process">
                  {selectedService.process.map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + 0.9 }}
                    >
                      <span className="process-number">{idx + 1}</span>
                      <span className="process-text">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                className="detail-column"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h3>Benefits</h3>
                <ul className="service-benefits">
                  {selectedService.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + 1.1 }}
                    >
                      <FaStar /> {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Centered CTA Section */}
            <motion.div
              className="cta-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h3>Ready to get started?</h3>
              <p>
                Contact us today to discuss how we can help with your{" "}
                {selectedService.title} needs.
              </p>
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
              >
                Contact Us <FaArrowRight />
              </motion.button>
            </motion.div>

            <div className="back-to-list">
              <motion.button
                onClick={handleBackToList}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft /> Back to All Services
              </motion.button>
            </div>
          </div>
        </div>
      ) : (
        // Horizontal list view for all services
        <div className="services-horizontal-list">
          {services.map((service, index) => (
            <motion.div
              className="service-item service-section"
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-item-content">
                <motion.div
                  className="service-item-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {React.createElement(
                    FaIcons[service.icon] || FaIcons.FaLaptopCode
                  )}
                </motion.div>

                <div className="service-item-text">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle /> {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="more-features">
                        + {service.features.length - 3} more
                      </li>
                    )}
                  </ul>

                  {/* Tech stack preview */}
                  <div className="tech-stack-preview">
                    {techStackIcons[service.id]
                      ?.slice(0, 4)
                      .map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="tech-preview-icon"
                          style={{ color: tech.color }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          whileHover={{ y: -3 }}
                        >
                          {React.createElement(
                            FaIcons[tech.icon] || FaIcons.FaQuestion
                          )}
                        </motion.span>
                      ))}
                  </div>
                </div>
                <div className="service-item-action">
                  <motion.button
                    className="learn-more-btn"
                    onClick={() => handleLearnMore(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more <FaArrowRight />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {showBackToTop && (
        <motion.a
          href="#"
          className="back-to-top visible"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
            setDetailedView(false);
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowUp />
        </motion.a>
      )}

      <div className={`notification ${notification.show ? "show" : ""}`}>
        Viewing <span>{notification.name}</span>
      </div>
    </div>
  );
};

export default ServicesPage;
