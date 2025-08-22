import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeIframe, setActiveIframe] = useState(null);

  const portfolioItems = [
    {
      title: "Wanderlust - Vacation Rentals",
      category: "Booking Platform, Property Listings, Responsive Design",
      url: "https://wanderlust-80q4.onrender.com/listings",
      description:
        "A modern vacation rental platform featuring unique accommodations worldwide with seamless booking experience.",
      image: "/wanderlust.png",
      color: "#8B5CF6",
    },
    {
      title: "KnowIndiaTravel - Travel Experience",
      category: "Travel Platform, Booking System, UI/UX",
      url: "https://www.knowindiatravel.com/",
      description:
        "A travel platform showcasing India's diverse destinations with trip planning and expert consultation services.",
      image: "/knowindiatravel.png",
      color: "#7C3AED",
    },
    {
      title: "HomeFix - Home Services Platform",
      category: "UI/Design, Development, E-commerce",
      url: "https://homefix-eq0m.onrender.com/",
      description:
        "A comprehensive home services platform connecting experts with homeowners for repair and maintenance services.",
      image: "/homefix.png",
      color: "#6D28D9",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const openSite = (url) => {
    window.open(url, "_blank");
  };

  const toggleIframe = (index) => {
    setActiveIframe(activeIframe === index ? null : index);
  };

  const openChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      window.open("https://tawk.to/chat/your-tawk-to-id/default", "_blank");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/YOUR_TAWK_TO_ID/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio-section-career">
      <div className="portfolio-bg-elements-career">
        <div className="bg-blob-career blob-1-career"></div>
        <div className="bg-blob-career blob-2-career"></div>
        <div className="bg-blob-career blob-3-career"></div>
      </div>

      <div className="container-career">
        <motion.div
          className="section-title-career"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Our <span className="gradient-text-career">Portfolio</span>
          </h2>
          <p>Explore our latest projects and creative solutions</p>
        </motion.div>

        <div className="portfolio-grid-career">
          {portfolioItems.map((item, index) => (
            <motion.div
              className="portfolio-item-career"
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ "--accent-color": item.color }}
            >
              <div className="portfolio-image-container-career">
                <div className="portfolio-img-container-career">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-img-career"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="portfolio-img-fallback-career"
                    style={{ backgroundColor: item.color }}
                  >
                    <span>{item.title.split(" ")[0]}</span>
                  </div>
                </div>

                {activeIframe === index && (
                  <motion.div
                    className="iframe-container-career"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <iframe
                      src={item.url}
                      title={item.title}
                      className="portfolio-iframe-career"
                      loading="lazy"
                    />
                    <div
                      className="iframe-overlay-career"
                      onClick={() => toggleIframe(index)}
                    >
                      <span>Click to close preview</span>
                    </div>
                  </motion.div>
                )}

                <div className="portfolio-overlay-career">
                  <div className="portfolio-actions-career">
                    <motion.button
                      className="preview-btn-career"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleIframe(index)}
                    >
                      Quick Preview
                    </motion.button>
                    <motion.button
                      className="visit-btn-career"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openSite(item.url)}
                    >
                      Visit Site
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="portfolio-content-career">
                <h3>{item.title}</h3>
                <p className="portfolio-category-career">{item.category}</p>
                <p className="portfolio-description-career">
                  {item.description}
                </p>

                <motion.button
                  className="visit-site-btn-career"
                  whileHover={{ scale: 1.02, backgroundColor: item.color }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openSite(item.url)}
                >
                  Visit Website
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3H21V9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="portfolio-cta-career"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to start your project?</h3>
          <p>Let's create something amazing together</p>
          <motion.button
            className="cta-btn-career"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(138, 43, 226, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={openChat}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
