import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHandshake,
  FaUsersCog,
  FaMapMarkedAlt,
  FaGraduationCap,
  FaCoffee,
  FaTrophy,
} from "react-icons/fa";
import "./CareerPage.css";

const iconVariantsCareer = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
  }),
};

const CareerPage = () => {
  const [formDataCareer, setFormDataCareer] = useState({
    name: "",
    countryCode: "+1",
    number: "",
    email: "",
    lastCompany: "",
    experience: "",
    position: "",
    additionalInfo: "",
  });

  const handleChangeCareer = (e) => {
    const { name, value } = e.target;
    setFormDataCareer({
      ...formDataCareer,
      [name]: value,
    });
  };

  const handleSubmitCareer = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formDataCareer);

    alert("Thank you for your application! We will review your information.");

    setFormDataCareer({
      name: "",
      countryCode: "+91",
      number: "",
      email: "",
      lastCompany: "",
      experience: "",
      position: "",
      additionalInfo: "",
    });

    document.getElementById("resume-career").value = "";
  };

  return (
    <div className="career-page-career">
      <div className="career-heading-career">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Career at <span className="gradient-text-career">Digitoba</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="subtitle-career"
        >
          Join our innovative team and shape the future of technology
        </motion.p>
      </div>

      {/* Benefits Grid Section */}
      <section className="benefits-section-career">
        <div className="container-career">
          <motion.h2
            className="section-title-career"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Work With Us
          </motion.h2>
          <div className="benefits-grid-career">
            {[
              {
                icon: <FaBuilding />,
                title: "Modern Workspace",
                text: "Large Beautiful Office with cutting-edge facilities",
              },
              {
                icon: <FaHandshake />,
                title: "Collaborative Culture",
                text: "Work with amazing colleagues in a supportive environment",
              },
              {
                icon: <FaUsersCog />,
                title: "Team Support",
                text: "Get support from the best talent in the industry",
              },
              {
                icon: <FaGraduationCap />,
                title: "Learning Opportunities",
                text: "Continuous learning and professional development programs",
              },
              {
                icon: <FaCoffee />,
                title: "Refreshments",
                text: "Enjoy free lunch, snacks, and premium coffee",
              },
              {
                icon: <FaTrophy />,
                title: "Recognition",
                text: "Performance awards and career growth opportunities",
              },
            ].map((benefit, i) => (
              <motion.div
                className="benefit-card-career"
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={iconVariantsCareer}
                custom={i}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="benefit-icon-career"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-career">
        <div className="container-career about-container-career">
          <motion.div
            className="about-content-career"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              Your Life At{" "}
              <span className="gradient-text-career">Digitoba</span>
            </h2>
            <p>
              At Digitoba we believe in working together and investing in our
              people. With over <strong>500,000 happy clients</strong>, we
              empower dynamic and creative individuals to explore new markets
              while providing innovative products and services.
            </p>
            <p>
              Your role ensures that you grow alongside some of the most
              talented people in the industry — enjoying opportunities,
              recognition, and benefits that shape your professional journey.
            </p>
            <motion.button
              className="learn-more-btn-career"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="about-image-career"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Fallback Image */}
            <img
              src="/about-team.png"
              alt="Life at Digitoba"
              className="about-team-image-career"
              onError={(e) => {
                // If image fails to load, show a placeholder
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzAwQTMzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0Ij5EaWdpdG9iYSBUZWFtPC90ZXh0Pgo8L3N2Zz4=";
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="form-section-career">
        <div className="container-career">
          <motion.h2
            className="section-title-career"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Apply Now
          </motion.h2>
          <motion.form
            className="application-form-career"
            onSubmit={handleSubmitCareer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-row-career">
              <div className="form-group-career">
                <label htmlFor="name-career">Full Name</label>
                <input
                  type="text"
                  id="name-career"
                  name="name"
                  value={formDataCareer.name}
                  onChange={handleChangeCareer}
                  required
                />
              </div>

              <div className="form-group-career phone-input-career">
                <label htmlFor="number-career">Phone Number</label>
                <div className="phone-wrapper-career">
                  <select
                    id="countryCode-career"
                    name="countryCode"
                    value={formDataCareer.countryCode}
                    onChange={handleChangeCareer}
                    required
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>

                  <input
                    type="tel"
                    id="number-career"
                    name="number"
                    value={formDataCareer.number}
                    onChange={(e) => {
                      const digitsOnly = e.target.value.replace(/\D/g, "");
                      handleChangeCareer({
                        target: { name: "number", value: digitsOnly },
                      });
                    }}
                    placeholder="Enter phone number"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{6,15}"
                  />
                </div>
              </div>
            </div>

            <div className="form-row-career">
              <div className="form-group-career">
                <label htmlFor="email-career">Email Address</label>
                <input
                  type="email"
                  id="email-career"
                  name="email"
                  value={formDataCareer.email}
                  onChange={handleChangeCareer}
                  required
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$"
                  title="Email must be a valid address and end with .com"
                />
              </div>

              <div className="form-group-career">
                <label htmlFor="lastCompany-career">
                  Last Company You Worked With
                </label>
                <input
                  type="text"
                  id="lastCompany-career"
                  name="lastCompany"
                  value={formDataCareer.lastCompany}
                  onChange={handleChangeCareer}
                />
              </div>
            </div>

            <div className="form-row-career">
              <div className="form-group-career">
                <label htmlFor="experience-career">Years of Experience</label>
                <select
                  id="experience-career"
                  name="experience"
                  value={formDataCareer.experience}
                  onChange={handleChangeCareer}
                  required
                >
                  <option value="">Select years</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="form-group-career">
                <label htmlFor="position-career">Position Applying For</label>
                <select
                  id="position-career"
                  name="position"
                  value={formDataCareer.position}
                  onChange={handleChangeCareer}
                  required
                >
                  <option value="">Select position</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="QA Engineer">QA Engineer</option>
                </select>
              </div>
            </div>

            <div className="form-group-career">
              <label htmlFor="resume-career">Upload Resume (PDF, DOC)</label>
              <input
                type="file"
                id="resume-career"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="form-group-career">
              <label htmlFor="additionalInfo-career">
                Additional Information
              </label>
              <textarea
                id="additionalInfo-career"
                name="additionalInfo"
                value={formDataCareer.additionalInfo}
                onChange={handleChangeCareer}
                rows="4"
                placeholder="Tell us why you're interested in joining Digitoba..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn-career"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit Application
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
