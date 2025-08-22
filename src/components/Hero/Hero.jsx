import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const words = [
    "Digital Experiences",
    "Websites",
    "Apps",
    "Businesses",
    "Automations",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 18 },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  // ✅ Variants for services (moved OUTSIDE useEffect)
  const servicesContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each child
      },
    },
  };

  const fromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fromBottom = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fromTop = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ Typewriter effect
  useEffect(() => {
    let typingSpeed = 300;
    if (isDeleting) typingSpeed = 200;

    const handleTyping = () => {
      const fullWord = words[wordIndex];

      if (!isDeleting) {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        if (currentWord === fullWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentWord(fullWord.substring(0, currentWord.length - 1));
        if (currentWord === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex, words]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="container">
        <div className="hero-content">
          <h1>
            Transforming Ideas Into{" "}
            <span className="typewriter">{currentWord}</span>
            <span className="cursor">|</span>
          </h1>
          <p>
            We are a creative digital agency focused on growing brands online
            through innovative web solutions, stunning designs, and
            result-driven strategies.
          </p>
          <a href="#contact" className="btn hero-btn">
            Get Started
          </a>
        </div>
      </div>

      <div className="hero-section">
        <motion.div
          className="digitoba-ad"
          style={{ backgroundImage: "url('/girl.png')" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="overlay"></div>

          <motion.div
            className="title"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15, // letters appear one after another
                },
              },
            }}
          >
            {"DIGITOBA".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, rotate: -15, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  },
                }}
                animate={{
                  y: [0, -8, 0], // 👈 bounce up & down
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  delay: index * 0.15, // 👈 creates wave effect
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.3,
                  color: "#ff008c",
                  textShadow: "0px 0px 8px rgba(255,0,140,0.8)",
                }}
                style={{
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  marginRight: "2px",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* ✅ Services stagger in different directions */}
          <motion.div
            className="services"
            variants={servicesContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fromLeft}>AUTOMATION</motion.div>
            <motion.div variants={fromRight}>CYBER SECURITY</motion.div>
            <motion.div variants={fromBottom}>WEB DESIGNING</motion.div>
            <motion.div variants={fromTop}>DIGITAL MARKETING</motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-image">
        {/* Placeholder for an image or illustration */}
      </div>
    </section>
  );
};

export default Hero;
