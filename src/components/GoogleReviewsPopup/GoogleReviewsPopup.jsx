import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GoogleReviewsPopup.css";

const GoogleReviewsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const reviews = [
    {
      id: 1,
      name: "Emily Chen",
      initials: "EC",
      date: "12 weeks ago",
      rating: 5,
      content:
        "Digitoba transformed our online presence! Their website design services are exceptional.",
      location: "Toronto, ON",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      initials: "MJ",
      date: "9 months ago",
      rating: 5,
      content:
        "Outstanding SEO results! Our organic traffic grew by 200% in just 3 months.",
      location: "Vancouver, BC",
    },
    {
      id: 3,
      name: "Sophie Tremblay",
      initials: "ST",
      date: "11 months ago",
      rating: 5,
      content:
        "The mobile app developed by Digitoba exceeded our expectations. Highly recommend!",
      location: "Montreal, QC",
    },
    {
      id: 4,
      name: "David Wilson",
      initials: "DW",
      date: "2 years ago",
      rating: 5,
      content:
        "Digitoba's cloud solutions have streamlined our operations significantly.",
      location: "Calgary, AB",
    },
    {
      id: 5,
      name: "Lisa Zhang",
      initials: "LZ",
      date: "2 years ago",
      rating: 5,
      content:
        "Incredible UI/UX design work! Our customers love the new interface.",
      location: "Ottawa, ON",
    },
    {
      id: 6,
      name: "James O'Reilly",
      initials: "JO",
      date: "3 years ago",
      rating: 5,
      content:
        "The cybersecurity services provided by Digitoba have given us peace of mind.",
      location: "Halifax, NS",
    },
    {
      id: 7,
      name: "Sarah Patel",
      initials: "SP",
      date: "4 years ago",
      rating: 5,
      content:
        "Excellent service and support. Would definitely work with them again.",
      location: "Winnipeg, MB",
    },
    {
      id: 8,
      name: "Michael Brown",
      initials: "MB",
      date: "2 years ago",
      rating: 5,
      content: "Professional team that delivered beyond our expectations.",
      location: "Edmonton, AB",
    },
    {
      id: 9,
      name: "Jennifer Lee",
      initials: "JL",
      date: "3 years ago",
      rating: 5,
      content:
        "Our e-commerce site has seen a 50% increase in sales since the redesign.",
      location: "Victoria, BC",
    },
    {
      id: 10,
      name: "Robert Martin",
      initials: "RM",
      date: "4 years ago",
      rating: 5,
      content:
        "Reliable and knowledgeable team. Highly recommend their services.",
      location: "Quebec City, QC",
    },
    {
      id: 11,
      name: "Amanda Wilson",
      initials: "AW",
      date: "2 years ago",
      rating: 5,
      content: "Exceptional digital marketing strategy that doubled our leads.",
      location: "Toronto, ON",
    },
    {
      id: 12,
      name: "Thomas Kim",
      initials: "TK",
      date: "3 years ago",
      rating: 5,
      content:
        "Their data analytics services provided insights we never would have discovered.",
      location: "Vancouver, BC",
    },
    {
      id: 13,
      name: "Natalie Roy",
      initials: "NR",
      date: "4 years ago",
      rating: 5,
      content:
        "Transformed our outdated website into a modern, responsive masterpiece.",
      location: "Montreal, QC",
    },
    {
      id: 14,
      name: "Daniel Scott",
      initials: "DS",
      date: "2 years ago",
      rating: 5,
      content:
        "Quick response time and excellent customer service throughout our project.",
      location: "Calgary, AB",
    },
    {
      id: 15,
      name: "Olivia Green",
      initials: "OG",
      date: "3 years ago",
      rating: 5,
      content:
        "Implemented a CRM system that revolutionized our customer management.",
      location: "Ottawa, ON",
    },
    {
      id: 16,
      name: "William Taylor",
      initials: "WT",
      date: "4 years ago",
      rating: 5,
      content:
        "Their team is innovative, professional, and delivers on promises.",
      location: "Halifax, NS",
    },
    {
      id: 17,
      name: "Sophia Martinez",
      initials: "SM",
      date: "2 years ago",
      rating: 5,
      content:
        "Created a stunning brand identity that perfectly represents our company.",
      location: "Winnipeg, MB",
    },
    {
      id: 18,
      name: "Christopher Lee",
      initials: "CL",
      date: "3 years ago",
      rating: 5,
      content:
        "Exceptional value for the investment. ROI was evident within months.",
      location: "Edmonton, AB",
    },
    {
      id: 19,
      name: "Emma Wilson",
      initials: "EW",
      date: "4 years ago",
      rating: 5,
      content: "Streamlined our workflow with custom software solutions.",
      location: "Victoria, BC",
    },
    {
      id: 20,
      name: "Matthew Davis",
      initials: "MD",
      date: "2 years ago",
      rating: 5,
      content:
        "Their social media management increased our engagement by 300%.",
      location: "Quebec City, QC",
    },
    {
      id: 21,
      name: "Jessica Anderson",
      initials: "JA",
      date: "3 years ago",
      rating: 5,
      content: "Professional, timely, and exceeded all our expectations.",
      location: "Toronto, ON",
    },
    {
      id: 22,
      name: "Andrew Thompson",
      initials: "AT",
      date: "4 years ago",
      rating: 5,
      content:
        "Developed an e-commerce platform that doubled our online sales.",
      location: "Vancouver, BC",
    },
    {
      id: 23,
      name: "Mia Roberts",
      initials: "MR",
      date: "2 years ago",
      rating: 5,
      content:
        "Their content strategy significantly improved our search rankings.",
      location: "Montreal, QC",
    },
    {
      id: 24,
      name: "David Clark",
      initials: "DC",
      date: "3 years ago",
      rating: 5,
      content:
        "Implemented automation that saved us 20 hours of work per week.",
      location: "Calgary, AB",
    },
    {
      id: 25,
      name: "Chloe White",
      initials: "CW",
      date: "4 years ago",
      rating: 5,
      content:
        "Created a user experience that our customers consistently praise.",
      location: "Ottawa, ON",
    },
    {
      id: 26,
      name: "Ryan Harris",
      initials: "RH",
      date: "2 years ago",
      rating: 5,
      content:
        "Their technical expertise solved problems we'd been struggling with for years.",
      location: "Halifax, NS",
    },
    {
      id: 27,
      name: "Lily Martin",
      initials: "LM",
      date: "3 years ago",
      rating: 5,
      content:
        "Delivered our project ahead of schedule with exceptional quality.",
      location: "Winnipeg, MB",
    },
    {
      id: 28,
      name: "Nicholas Young",
      initials: "NY",
      date: "4 years ago",
      rating: 5,
      content:
        "Their team communicates clearly and delivers exactly what was promised.",
      location: "Edmonton, AB",
    },
    {
      id: 29,
      name: "Grace Walker",
      initials: "GW",
      date: "2 years ago",
      rating: 5,
      content:
        "Transformed our digital presence with a comprehensive strategy.",
      location: "Victoria, BC",
    },
    {
      id: 30,
      name: "Kevin King",
      initials: "KK",
      date: "3 years ago",
      rating: 5,
      content:
        "Their analytics implementation provided insights we never had before.",
      location: "Quebec City, QC",
    },
    {
      id: 31,
      name: "Hannah Hall",
      initials: "HH",
      date: "4 years ago",
      rating: 5,
      content:
        "Exceptional attention to detail in every aspect of our project.",
      location: "Toronto, ON",
    },
    {
      id: 32,
      name: "Jacob Allen",
      initials: "JA",
      date: "2 years ago",
      rating: 5,
      content:
        "Developed a mobile app that our customers find intuitive and valuable.",
      location: "Vancouver, BC",
    },
    {
      id: 33,
      name: "Zoe Wright",
      initials: "ZW",
      date: "3 years ago",
      rating: 5,
      content:
        "Their SEO strategy placed us on the first page for all our key terms.",
      location: "Montreal, QC",
    },
    {
      id: 34,
      name: "Tyler Scott",
      initials: "TS",
      date: "4 years ago",
      rating: 5,
      content: "Provided excellent training and support after implementation.",
      location: "Calgary, AB",
    },
    {
      id: 35,
      name: "Ella Green",
      initials: "EG",
      date: "2 years ago",
      rating: 5,
      content:
        "Their team is responsive, professional, and truly cares about client success.",
      location: "Ottawa, ON",
    },
    {
      id: 36,
      name: "Brandon Baker",
      initials: "BB",
      date: "3 years ago",
      rating: 5,
      content:
        "Implemented security measures that protected us from potential threats.",
      location: "Halifax, NS",
    },
    {
      id: 37,
      name: "Ava Nelson",
      initials: "AN",
      date: "4 years ago",
      rating: 5,
      content:
        "Created a digital strategy that aligned perfectly with our business goals.",
      location: "Winnipeg, MB",
    },
    {
      id: 38,
      name: "Justin Carter",
      initials: "JC",
      date: "2 years ago",
      rating: 5,
      content: "Their team went above and beyond to ensure our satisfaction.",
      location: "Edmonton, AB",
    },
    {
      id: 39,
      name: "Samantha Mitchell",
      initials: "SM",
      date: "3 years ago",
      rating: 5,
      content:
        "Developed a custom solution that perfectly addressed our unique needs.",
      location: "Victoria, BC",
    },
    {
      id: 40,
      name: "Logan Perez",
      initials: "LP",
      date: "4 years ago",
      rating: 5,
      content:
        "Their expertise in digital transformation was evident throughout the project.",
      location: "Quebec City, QC",
    },
    {
      id: 41,
      name: "Anna Roberts",
      initials: "AR",
      date: "2 years ago",
      rating: 5,
      content:
        "Improved our website performance and loading times significantly.",
      location: "Toronto, ON",
    },
    {
      id: 42,
      name: "Cameron Turner",
      initials: "CT",
      date: "3 years ago",
      rating: 5,
      content:
        "Their team is knowledgeable, professional, and delivers quality work.",
      location: "Vancouver, BC",
    },
    {
      id: 43,
      name: "Leah Phillips",
      initials: "LP",
      date: "4 years ago",
      rating: 5,
      content: "Created an intuitive user interface that our customers love.",
      location: "Montreal, QC",
    },
    {
      id: 44,
      name: "Dylan Campbell",
      initials: "DC",
      date: "2 years ago",
      rating: 5,
      content:
        "Their data visualization tools made complex information easily understandable.",
      location: "Calgary, AB",
    },
    {
      id: 45,
      name: "Maya Evans",
      initials: "ME",
      date: "3 years ago",
      rating: 5,
      content:
        "Implemented a CRM system that transformed our customer relationships.",
      location: "Ottawa, ON",
    },
    {
      id: 46,
      name: "Nathan Reed",
      initials: "NR",
      date: "4 years ago",
      rating: 5,
      content: "Their team is innovative and always ahead of industry trends.",
      location: "Halifax, NS",
    },
    {
      id: 47,
      name: "Evelyn Cook",
      initials: "EC",
      date: "2 years ago",
      rating: 5,
      content:
        "Developed a comprehensive digital marketing strategy with measurable results.",
      location: "Winnipeg, MB",
    },
    {
      id: 48,
      name: "Christian Murphy",
      initials: "CM",
      date: "3 years ago",
      rating: 5,
      content:
        "Their technical support team is responsive and incredibly helpful.",
      location: "Edmonton, AB",
    },
    {
      id: 49,
      name: "Hailey Rivera",
      initials: "HR",
      date: "4 years ago",
      rating: 5,
      content:
        "Created a brand identity that perfectly captures our company's essence.",
      location: "Victoria, BC",
    },
    {
      id: 50,
      name: "Aaron Cooper",
      initials: "AC",
      date: "2 years ago",
      rating: 5,
      content:
        "Their analytics implementation provided actionable insights for growth.",
      location: "Quebec City, QC",
    },
    {
      id: 51,
      name: "Avery Brooks",
      initials: "AB",
      date: "3 years ago",
      rating: 5,
      content: "Streamlined our operations with custom software solutions.",
      location: "Toronto, ON",
    },
    {
      id: 52,
      name: "Jordan Bennett",
      initials: "JB",
      date: "4 years ago",
      rating: 5,
      content:
        "Their team understands business needs and delivers practical solutions.",
      location: "Vancouver, BC",
    },
    {
      id: 53,
      name: "Nevaeh Wood",
      initials: "NW",
      date: "2 years ago",
      rating: 5,
      content:
        "Created a responsive website that works perfectly on all devices.",
      location: "Montreal, QC",
    },
    {
      id: 54,
      name: "Caleb Richardson",
      initials: "CR",
      date: "3 years ago",
      rating: 5,
      content:
        "Their cybersecurity measures have protected our business from threats.",
      location: "Calgary, AB",
    },
    {
      id: 55,
      name: "Ellie Howard",
      initials: "EH",
      date: "4 years ago",
      rating: 5,
      content:
        "Developed an e-commerce platform that exceeded our expectations.",
      location: "Ottawa, ON",
    },
    {
      id: 56,
      name: "Lucas Ward",
      initials: "LW",
      date: "2 years ago",
      rating: 5,
      content:
        "Their team is professional, knowledgeable, and delivers quality work.",
      location: "Halifax, NS",
    },
    {
      id: 57,
      name: "Aria Cox",
      initials: "AC",
      date: "3 years ago",
      rating: 5,
      content:
        "Implemented automation that saved us countless hours of manual work.",
      location: "Winnipeg, MB",
    },
    {
      id: 58,
      name: "Evan Diaz",
      initials: "ED",
      date: "4 years ago",
      rating: 5,
      content:
        "Their digital strategy transformed our online presence and engagement.",
      location: "Edmonton, AB",
    },
    {
      id: 59,
      name: "Scarlett Foster",
      initials: "SF",
      date: "2 years ago",
      rating: 5,
      content:
        "Created a user experience that keeps our customers coming back.",
      location: "Victoria, BC",
    },
    {
      id: 60,
      name: "Gavin Gray",
      initials: "GG",
      date: "3 years ago",
      rating: 5,
      content: "Their team provided excellent training and ongoing support.",
      location: "Quebec City, QC",
    },
    {
      id: 61,
      name: "Lillian James",
      initials: "LJ",
      date: "4 years ago",
      rating: 5,
      content:
        "Developed a mobile app that our users find intuitive and valuable.",
      location: "Toronto, ON",
    },
    {
      id: 62,
      name: "Isaac Watson",
      initials: "IW",
      date: "2 years ago",
      rating: 5,
      content:
        "Their SEO strategy significantly improved our search engine rankings.",
      location: "Vancouver, BC",
    },
    {
      id: 63,
      name: "Addison Brooks",
      initials: "AB",
      date: "3 years ago",
      rating: 5,
      content:
        "Implemented a CRM system that revolutionized our customer management.",
      location: "Montreal, QC",
    },
    {
      id: 64,
      name: "Leo Sanders",
      initials: "LS",
      date: "4 years ago",
      rating: 5,
      content:
        "Their team is innovative and always delivers cutting-edge solutions.",
      location: "Calgary, AB",
    },
    {
      id: 65,
      name: "Hazel Price",
      initials: "HP",
      date: "2 years ago",
      rating: 5,
      content: "Created a digital marketing strategy with measurable ROI.",
      location: "Ottawa, ON",
    },
    {
      id: 66,
      name: "Owen Bryant",
      initials: "OB",
      date: "3 years ago",
      rating: 5,
      content: "Their technical expertise solved complex problems efficiently.",
      location: "Halifax, NS",
    },
    {
      id: 67,
      name: "Luna Russell",
      initials: "LR",
      date: "4 years ago",
      rating: 5,
      content: "Developed a comprehensive digital transformation strategy.",
      location: "Winnipeg, MB",
    },
    {
      id: 68,
      name: "Muhammad Griffin",
      initials: "MG",
      date: "2 years ago",
      rating: 5,
      content: "Their team communicates clearly and delivers on promises.",
      location: "Edmonton, AB",
    },
    {
      id: 69,
      name: "Stella West",
      initials: "SW",
      date: "3 years ago",
      rating: 5,
      content:
        "Created a brand identity that resonates with our target audience.",
      location: "Victoria, BC",
    },
    {
      id: 70,
      name: "Carter Bishop",
      initials: "CB",
      date: "4 years ago",
      rating: 5,
      content:
        "Their analytics implementation provided valuable business insights.",
      location: "Quebec City, QC",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -100, // This moves from left to right
      rotate: -5, // Reverse the rotation direction
    },
    visible: {
      opacity: 1,
      x: 0, // This is the final position
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      x: -100, // This exits to the left
      rotate: -5, // Reverse the rotation direction
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="google-reviews-popup"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* First Div - Header with Logo, Rating */}
          <motion.div className="popup-header">
            <div className="header-content">
              <div className="logo-container">
                <motion.div
                  className="google-logo"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </motion.div>
                <div className="header-text">
                  <h3>Google Reviews</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="rating-text">5.0 </span> &nbsp; ★★★★★
                    </div>
                  </div>
                </div>
                <motion.button
                  className="close-btn"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
                <div className="pulse-dot"></div>
              </div>
            </div>
          </motion.div>

          {/* Second Div - Content */}
          <div className="popup-content">
            {isExpanded ? (
              <motion.div
                className="expanded-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="review">
                    <div className="reviewer">
                      <div className="reviewer-avatar">{review.initials}</div>
                      <div className="reviewer-info">
                        <h4>{review.name}</h4>
                        <span className="review-location">
                          {review.location}
                        </span>
                      </div>
                    </div>
                    <div className="stars-small">★★★★★</div>
                    <p>{review.content}</p>
                    <span className="review-date">{review.date}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="collapsed-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rating-summary">
                  <p>
                    We're rated <strong>5.0</strong> on Google
                  </p>
                  <div className="stars">★★★★★</div>
                  <p>Based on 270+ reviews</p>
                </div>
                <div className="review-highlights">
                  <div className="highlight">
                    <span className="highlight-emoji">🚀</span>
                    <span>Exceptional service</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-emoji">💯</span>
                    <span>270+ five-star reviews</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <motion.div
            className="popup-footer"
            onClick={toggleExpand}
            whileHover={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? "Show less" : "See all 270 reviews"}
            <motion.span
              className="expand-arrow"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoogleReviewsPopup;
