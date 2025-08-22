import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to ensure performance and scalability.",
      tech: ["react", "node", "vue", "angular"],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      tech: ["flutter", "swift", "kotlin", "react-native"],
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description:
        "User-centered designs that not only look beautiful but also provide intuitive and engaging experiences.",
      tech: ["figma", "sketch", "adobe-xd", "framer"],
    },
    {
      icon: "fas fa-cogs",
      title: "Business Automation",
      description:
        "Streamline operations with custom automation solutions that increase efficiency and reduce costs.",
      tech: ["zapier", "api", "workflow", "integration"],
    },
    {
      icon: "fas fa-robot",
      title: "AI Agent Development",
      description:
        "Intelligent AI agents tailored to your business needs, from chatbots to predictive analytics systems.",
      tech: ["ai", "ml", "chatgpt", "tensorflow"],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cyber Security Services",
      description:
        "Comprehensive security solutions to protect your digital assets from threats and vulnerabilities.",
      tech: ["security", "encryption", "firewall", "audit"],
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to increase your online visibility and drive qualified traffic to your business.",
      tech: ["google-ads", "facebook-ads", "analytics", "seo"],
    },
    {
      icon: "fas fa-bullseye",
      title: "Brand Strategy",
      description:
        "Comprehensive branding solutions to establish your unique identity and connect with your target audience.",
      tech: ["branding", "strategy", "identity", "positioning"],
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description:
        "Search engine optimization services to improve your website's visibility and organic search rankings.",
      tech: ["keywords", "backlinks", "technical-seo", "content"],
    },
  ];

  const handleViewAll = () => {
    navigate("/services");
  };

  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of digital services to help your business grow
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="home-tech-stack">
                {service.tech.map((tech, i) => (
                  <span key={i} className="home-tech-item">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="service-animation">
                <div className="animation-circle-1"></div>
                <div className="animation-circle-2"></div>
                <div className="animation-circle-3"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn" onClick={handleViewAll}>
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
