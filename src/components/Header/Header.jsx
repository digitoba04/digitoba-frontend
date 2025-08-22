import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleRequestDemo = () => {
    closeMobileMenu();
    navigate("/request-demo");
  };

  const handleContactPage = () => {
    closeMobileMenu();
    navigate("/contact-us");
  };

  const handleAboutUS = () => {
    closeMobileMenu();
    navigate("/about-us");
  };

  const handleCareerPage = () => {
    closeMobileMenu();
    navigate("/careers");
  };

  const handleServicesPage = () => {
    closeMobileMenu();
    navigate("/services");
  };

  const handlePortfolioPage = () => {
    closeMobileMenu();
    navigate("/portfolio");
  };

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Buisness Automation",
    "AI Agent Development",
    "Cyber Security Services",
    "Digital Marketing",
    "Brand Strategy",
    "SEO Optimization",
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <motion.a
          href="/"
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="Digitoba Logo" className="logo-image" />
          Digi<span>toba</span>
        </motion.a>

        <div
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <motion.i
            className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="" onClick={handleAboutUS}>
              About
            </a>
          </motion.li>

          <motion.li
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="services-item"
          >
            <a href="" onClick={handleServicesPage}>
              Services <i className="fas fa-chevron-down"></i>
            </a>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  className="services-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((service, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="service-link"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        x: 5,
                        color: "#9c47e6",
                      }}
                    >
                      <i className="fas fa-arrow-right"></i> {service}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="" onClick={handlePortfolioPage}>
              Portfolio
            </a>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="" onClick={handleCareerPage}>
              Careers
            </a>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="" onClick={handleContactPage}>
              Contact
            </a>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
              className="request-demo-btn"
              onClick={handleRequestDemo}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(138, 43, 226, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Request Demo
              <motion.span
                className="btn-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <i className="fas fa-arrow-right"></i>
              </motion.span>
            </motion.button>
          </motion.li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
