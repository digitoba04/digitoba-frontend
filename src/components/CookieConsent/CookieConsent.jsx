import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsAccepted(true);
    }
  }, []);

  const acceptAllCookies = () => {
    // Set cookie acceptance in localStorage
    localStorage.setItem("cookiesAccepted", "true");
    setIsAccepted(true);
    setIsVisible(false);

    // Here you would typically set your actual cookies
    console.log("All cookies accepted");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (isAccepted) {
    return null; // Don't render anything if cookies are already accepted
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="cookie-consent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
        >
          <div className="cookie-content">
            <div className="cookie-header">
              <motion.div
                className="cookie-icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                🍪
              </motion.div>
              <h3>We use cookies</h3>
              <motion.button
                className="close-btn"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </p>
            <div className="cookie-buttons">
              <motion.button
                className="accept-all-btn"
                onClick={acceptAllCookies}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Accept All Cookies
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
