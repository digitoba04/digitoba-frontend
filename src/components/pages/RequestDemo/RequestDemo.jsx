import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./RequestDemo.css";

const RequestDemo = () => {
  // Array of random math questions for captcha
  const captchaQuestions = [
    { question: "What is 5 + 9?", answer: "14" },
    { question: "What is 12 - 4?", answer: "8" },
    { question: "What is 6 × 3?", answer: "18" },
    { question: "What is 20 ÷ 5?", answer: "4" },
    { question: "What is 7 + 8?", answer: "15" },
    { question: "What is 15 - 7?", answer: "8" },
    { question: "What is 4 × 6?", answer: "24" },
    { question: "What is 27 ÷ 3?", answer: "9" },
    { question: "What is 9 + 6?", answer: "15" },
    { question: "What is 18 - 9?", answer: "9" },
    { question: "What is 5 × 5?", answer: "25" },
    { question: "What is 36 ÷ 6?", answer: "6" },
    { question: "What is 8 + 7?", answer: "15" },
    { question: "What is 16 - 8?", answer: "8" },
    { question: "What is 7 × 4?", answer: "28" },
    { question: "What is 45 ÷ 9?", answer: "5" },
    { question: "What is 13 + 6?", answer: "19" },
    { question: "What is 22 - 5?", answer: "17" },
    { question: "What is 8 × 3?", answer: "24" },
    { question: "What is 32 ÷ 8?", answer: "4" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    businessDescription: "",
    captchaAnswer: "",
  });

  const [currentCaptcha, setCurrentCaptcha] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set a random captcha question on component mount
  useEffect(() => {
    setRandomCaptcha();
  }, []);

  const setRandomCaptcha = () => {
    const randomIndex = Math.floor(Math.random() * captchaQuestions.length);
    setCurrentCaptcha(captchaQuestions[randomIndex]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.website.trim()) newErrors.website = "Website URL is required";
    if (!formData.businessDescription.trim())
      newErrors.businessDescription = "Business description is required";
    if (formData.captchaAnswer !== currentCaptcha.answer)
      newErrors.captchaAnswer = "Incorrect answer";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        businessDescription: "",
        captchaAnswer: "",
      });
      setRandomCaptcha();
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="request-demo-page">
      <main className="request-demo-main">
        <div className="request-demo-container">
          <motion.div
            className="request-demo-header"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Request a Personalized Demo</h1>
            <p className="request-demo-subtitle">
              For Your Website or Digital Marketing Solutions
            </p>
            <div className="request-divider"></div>
            <p className="request-privacy-notice">
              We guarantee 100% privacy and that your information shall only be
              used for internal purposes. Your information will not be shared
              with outside entities.
            </p>
          </motion.div>

          <div className="request-demo-content">
            <motion.div
              className="request-demo-form-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  className="request-success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="request-success-icon">✓</div>
                  <h2>Thank You!</h2>
                  <p>
                    Your demo request has been received. Our team will contact
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="request-submit-another-btn"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form className="request-demo-form" onSubmit={handleSubmit}>
                  <div className="request-form-row">
                    <div className="request-form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "request-error" : ""}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <span className="request-error-text">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    <div className="request-form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "request-error" : ""}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <span className="request-error-text">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="request-form-row">
                    <div className="request-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "request-error" : ""}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <span className="request-error-text">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="request-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "request-error" : ""}
                        placeholder="+1 (123) 456-7890"
                      />
                      {errors.phone && (
                        <span className="request-error-text">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="request-form-row">
                    <div className="request-form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={errors.company ? "request-error" : ""}
                        placeholder="Enter your company name"
                      />
                      {errors.company && (
                        <span className="request-error-text">
                          {errors.company}
                        </span>
                      )}
                    </div>

                    <div className="request-form-group">
                      <label htmlFor="website">Website URL *</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className={errors.website ? "request-error" : ""}
                        placeholder="https://yourwebsite.com"
                      />
                      {errors.website && (
                        <span className="request-error-text">
                          {errors.website}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="request-form-group">
                    <label htmlFor="businessDescription">
                      Write About Your Business Description? *
                    </label>
                    <textarea
                      id="businessDescription"
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleChange}
                      className={
                        errors.businessDescription ? "request-error" : ""
                      }
                      placeholder="Tell us about your business, products, and services..."
                      rows="4"
                    />
                    {errors.businessDescription && (
                      <span className="request-error-text">
                        {errors.businessDescription}
                      </span>
                    )}
                  </div>

                  <div className="request-form-group">
                    <div className="request-captcha-container">
                      <label htmlFor="captcha">
                        {currentCaptcha.question} *
                      </label>
                      <div className="request-captcha-input-row">
                        <input
                          type="text"
                          id="captcha"
                          name="captchaAnswer"
                          value={formData.captchaAnswer}
                          onChange={handleChange}
                          className={
                            errors.captchaAnswer ? "request-error" : ""
                          }
                          placeholder="Type your answer"
                        />
                        <button
                          type="button"
                          className="request-refresh-captcha"
                          onClick={setRandomCaptcha}
                          aria-label="Refresh captcha"
                        >
                          ↻
                        </button>
                      </div>
                    </div>
                    {errors.captchaAnswer && (
                      <span className="request-error-text">
                        {errors.captchaAnswer}
                      </span>
                    )}
                  </div>

                  <div className="request-form-group request-checkbox-group">
                    <label className="request-checkbox-label">
                      <input type="checkbox" required />
                      <span className="request-checkmark"></span>
                      By sending this form I confirm that I have read and accept
                      the Privacy Policy
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="request-submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Now
                  </motion.button>
                </form>
              )}
            </motion.div>

            <motion.div
              className="request-demo-sidebar"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="request-sidebar-card">
                <h3>Why Request a Demo?</h3>
                <div className="request-benefits-list">
                  <div className="request-benefit-item">
                    <div className="request-benefit-icon">🚀</div>
                    <span>Customized solutions for your specific needs</span>
                  </div>
                  <div className="request-benefit-item">
                    <div className="request-benefit-icon">💡</div>
                    <span>Expert consultation from industry professionals</span>
                  </div>
                  <div className="request-benefit-item">
                    <div className="request-benefit-icon">⏱️</div>
                    <span>Quick response within 24 hours</span>
                  </div>
                  <div className="request-benefit-item">
                    <div className="request-benefit-icon">🔒</div>
                    <span>100% privacy guaranteed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestDemo;
