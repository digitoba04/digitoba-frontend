import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Digitoba?",
      answer:
        "Digitoba is a leading digital transformation agency that specializes in helping businesses leverage technology to grow and thrive in the digital age. We offer comprehensive solutions including web development, mobile apps, digital marketing, and cloud services.",
    },
    {
      question: "Why choose Digitoba?",
      answer:
        "We combine technical expertise with business acumen to deliver solutions that drive real results. Our team of experienced professionals stays ahead of industry trends, ensuring your business gets cutting-edge solutions tailored to your specific needs.",
    },
    {
      question: "What services does Digitoba offer?",
      answer:
        "We offer a wide range of services including custom website development, e-commerce solutions, mobile app development, UI/UX design, SEO optimization, digital marketing strategies, cloud computing solutions, and cybersecurity services.",
    },
    {
      question: "How can Digitoba help my business?",
      answer:
        "We help businesses transform their digital presence, improve operational efficiency, reach more customers online, increase conversion rates, and ultimately grow revenue through our tailored digital solutions and strategies.",
    },
    {
      question: "How can I contact Digitoba?",
      answer:
        "You can reach us through our contact form on this website, email us at info@digitoba.com, call us at +1 (800) 123-4567, or visit our office at 123 Digital Avenue, Toronto, ON.",
    },
    {
      question: "What industries does Digitoba serve?",
      answer:
        "We serve a diverse range of industries including retail, healthcare, finance, education, real estate, hospitality, and technology. Our solutions are tailored to meet the specific needs of each industry we work with.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1.5L8 8.5L1 1.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Interested in partnering with Digitoba?</h3>
          <p>
            Let's discuss how we can help transform your business with our
            digital solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
