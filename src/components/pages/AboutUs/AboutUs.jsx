import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  // Function to open Tawk.to chat
  const openChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      // Fallback: Open chat in new tab if Tawk.to is not loaded
      window.open("https://tawk.to/chat/your-tawk-to-id/default", "_blank");
    }
  };

  // Load Tawk.to script
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
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="gradient-text">Digitoba</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Team Built with Expertise, Passion, and Innovation
          </motion.p>
        </div>
        <div className="hero-background">
          <div className="floating-shapes shape-1"></div>
          <div className="floating-shapes shape-2"></div>
          <div className="floating-shapes shape-3"></div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Journey</h2>
              <p>
                Digitoba was founded in 2021 by a team of passionate technology
                experts with diverse backgrounds in software development,
                digital marketing, and user experience design. Having worked
                with industry leaders and witnessed the challenges faced by
                businesses in the digital transformation era, we recognized a
                need for comprehensive, affordable digital solutions.
              </p>
              <p>
                We combine cutting-edge digital strategies with innovative
                technological solutions to elevate brands in the ever-evolving
                online landscape. Our team specializes in web development,
                mobile applications, digital marketing, and custom software
                solutions tailored to our clients' unique business objectives.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/group.png"
                alt="Digitoba Team"
                onError={(e) => {
                  e.target.src = "/danial-igdery-FCHlYvR5gJI-unsplash.jpg";
                }}
              />
              <div className="image-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>65+</h3>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>40+</h3>
              <p>Team Members</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>50+</h3>
              <p>Happy Clients</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>15+</h3>
              <p>Technologies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="process-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How We Do It?
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Helping Others Succeed
          </motion.p>

          <div className="process-grid-about">
            <motion.div
              className="process-item-about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="process-number-about">1</div>
              <h3>Brainstorming and Strategy Development</h3>
              <p>
                We begin by understanding your vision and crafting a
                comprehensive strategy tailored to your business goals.
              </p>
            </motion.div>

            <motion.div
              className="process-item-about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="process-number-about">2</div>
              <h3>Innovative Digital Marketing</h3>
              <p>
                Our data-driven marketing strategies maximize visibility,
                engagement, and conversion rates.
              </p>
            </motion.div>

            <motion.div
              className="process-item-about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="process-number-about">3</div>
              <h3>Custom Software Development</h3>
              <p>
                We build visually stunning, user-friendly digital solutions that
                integrate seamlessly with your business.
              </p>
            </motion.div>

            <motion.div
              className="process-item-about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="process-number-about">4</div>
              <h3>Collaboration and Transparency</h3>
              <p>
                We maintain open communication throughout the process, ensuring
                you're involved at every stage.
              </p>
            </motion.div>

            <motion.div
              className="process-item-about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="process-number-about">5</div>
              <h3>Minimizing Cost</h3>
              <p>
                We optimize resources and processes to deliver maximum value
                while minimizing expenses.
              </p>
            </motion.div>

            <motion.div
              className="process-item-about"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="process-number-about">6</div>
              <h3>Continuous Optimization and Support</h3>
              <p>
                Our relationship continues after delivery with ongoing support
                and optimization services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Work Culture */}
      <section className="mission-vision-culture">
        <div className="container">
          {/* Mission Section - Left content, Right image */}
          <div className="mvc-item mission">
            <motion.div
              className="mvc-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Mission</h2>
              <p>
                At Digitoba, our mission is to empower businesses by providing
                innovative & result-driven digital marketing and software
                development solutions. By combining data-driven insights,
                creative solutions, & advanced software technologies, we aim to
                help businesses scale effectively while ensuring a seamless &
                future-proof online presence.
              </p>
              <p>
                We believe in continuous innovation, excellence, & client
                satisfaction—always putting your business at the forefront of
                our solutions. Let's build something great together!
              </p>
            </motion.div>
            <motion.div
              className="mvc-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/group2.jpg"
                alt="Our Mission"
                onError={(e) => {
                  e.target.src = "/IMG-20250822-WA0005.jpg";
                }}
              />
              <div className="image-overlay"></div>
            </motion.div>
          </div>

          {/* Vision Section - Left image, Right content */}
          <div className="mvc-item vision">
            <motion.div
              className="mvc-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/vision.jpg"
                alt="Our Vision"
                onError={(e) => {
                  e.target.src = "/IMG-20250822-WA0004.jpg";
                }}
              />
              <div className="image-overlay"></div>
            </motion.div>
            <motion.div
              className="mvc-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Vision</h2>
              <p>
                Our purpose is not just to offer services, but to build
                long-lasting relationships with our clients. We work closely
                with you, understand your challenges, and continuously adapt our
                strategies to ensure sustained success.
              </p>
              <p>
                With a focus on results, innovation, and client satisfaction, we
                aim to be the trusted partner that businesses turn to for
                ongoing growth and development. Through our dedication to
                excellence, we help small and medium-sized businesses unlock
                their full potential and achieve remarkable success in the
                digital age.
              </p>
            </motion.div>
          </div>

          {/* Work Culture Section - Left content, Right image */}
          <div className="mvc-item culture">
            <motion.div
              className="mvc-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Work Culture</h2>
              <p>
                At Digitoba, we foster a collaborative and innovative work
                environment where creativity thrives. Our team is built on
                mutual respect, transparency, and a shared passion for
                technology.
              </p>
              <p>
                We believe in continuous learning and growth, encouraging our
                team members to expand their skills and stay ahead of industry
                trends. Our flat hierarchy promotes open communication, allowing
                every voice to be heard and every idea to be considered.
              </p>
              <p>
                We balance hard work with fun team-building activities, ensuring
                a positive and motivating atmosphere that drives excellence in
                everything we do.
              </p>
            </motion.div>
            <motion.div
              className="mvc-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/work-culture.jpg"
                alt="Our Work Culture"
                onError={(e) => {
                  e.target.src = "/danial-igdery-FCHlYvR5gJI-unsplash.jpg";
                }}
              />
              <div className="image-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      {/* <section className="team-showcase">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Leadership Team
          </motion.h2>
          <div className="team-grid">
            <motion.div
              className="team-member"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="member-image">
                <img src="/IMG-20250822-WA0005.jpg" alt="Team Member" />
              </div>
              <h3>Cristian Fortyoung</h3>
              <p>Lead Developer</p>
            </motion.div>

            <motion.div
              className="team-member"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="member-image">
                <img src="/IMG-20250822-WA0004.jpg" alt="Team Member" />
              </div>
              <h3>Alex Hunter</h3>
              <p>Creative Director</p>
            </motion.div>

            <motion.div
              className="team-member"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="member-image">
                <div className="placeholder-member">
                  <span>MJ</span>
                </div>
              </div>
              <h3>Mike Johnson</h3>
              <p>Project Manager</p>
            </motion.div>

            <motion.div
              className="team-member"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="member-image">
                <div className="placeholder-member">
                  <span>SW</span>
                </div>
              </div>
              <h3>Sarah Williams</h3>
              <p>Digital Marketing Specialist</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's discuss how Digitoba can help your business grow</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
              onClick={openChat}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
