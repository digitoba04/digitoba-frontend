import React from "react";
import { motion } from "framer-motion";
import "./Accreditations.css";

const Accreditations = () => {
  const accreditations = [
    {
      id: 1,
      name: "Google Premier Partner",
      logo: "https://squaliocom.b-cdn.net/Sell_service_GWS_6cf40ae1b7.png",
      url: "https://www.google.com/partners",
      type: "international",
    },
    {
      id: 2,
      name: "Microsoft Gold Partner",
      logo: "https://www.wavesad.com/wp-content/uploads/2024/09/Group-66-1-2.webp",
      url: "https://partner.microsoft.com/",
      type: "international",
    },
    {
      id: 3,
      name: "Shopify Plus Partner",
      logo: "https://i0.wp.com/webdesksolution.com/wp-content/uploads/2023/06/Certified-Shopify-Partner.png?ssl=1",
      url: "https://www.shopify.com/plus/partners",
      type: "ecommerce",
    },
    {
      id: 4,
      name: "WordPress VIP Partner",
      logo: "https://www.multidots.com/wp-content/uploads/2025/04/Gold-Agency-Partner-color.png?quality=90",
      url: "https://wpvip.com/partners/",
      type: "international",
    },
    {
      id: 5,
      name: "Digital Commerce 360",
      logo: "https://images.ctfassets.net/6igiux0rebzg/XE6uO6mjU1BOJGm9hIuOL/3683f52b05c9b5daefaa947a4a9747a1/2023_Top_500_Emblem.png",
      url: "https://www.digitalcommerce360.com/",
      type: "ecommerce",
    },
    {
      id: 6,
      name: "Canadian Digital Chamber",
      logo: "https://i0.wp.com/hc-chamber.ca/wp-content/uploads/2024/11/HCCC_Icon_Original_transp_large.png?fit=1854%2C1851&ssl=1",
      url: "https://cdcc.ca/",
      type: "canadian",
    },
    {
      id: 7,
      name: "Canada's Top 100",
      logo: "https://e7.pngegg.com/pngimages/438/643/png-clipart-graphic-design-made-in-canada-leaf-logo.png",
      url: "https://www.digitalagencynetwork.com/canada-top-100-digital-agencies/",
      type: "canadian",
    },
    {
      id: 8,
      name: "BC Tech Association",
      logo: "https://ucarecdn.com/aeb49420-e520-4ab8-b7fc-5e39d59129a8/-/crop/467x466/399,129/-/resize/335x335/",
      url: "https://www.bctechassociation.org/",
      type: "canadian",
    },
    {
      id: 9,
      name: "Digital Ontario Certified",
      logo: "https://images.credly.com/images/af9a488c-44ab-4f17-9e1b-069abf199978/image.png",
      url: "https://digitalontario.org/",
      type: "canadian",
    },
    {
      id: 10,
      name: "Canadian E-Commerce Excellence",
      logo: "https://excellence.ca/wp-content/uploads/2025/03/CAE-Logo-4.png",
      url: "https://ecommerceawards.ca/",
      type: "canadian",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const handleLogoClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="accreditations-section">
      <div className="accreditations-container">
        <motion.div
          className="accreditations-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>Digitoba</h1>
          <h2>ACCREDITATIONS & PARTNERSHIPS</h2>
          <div className="divider"></div>
          <p>
            Recognized by industry leaders for excellence in digital solutions
          </p>
        </motion.div>

        <motion.div
          className="accreditations-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* First Row - 5 Accreditations */}
          <div className="accreditations-row">
            {accreditations.slice(0, 5).map((accreditation) => (
              <motion.div
                key={accreditation.id}
                className="accreditation-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(138, 43, 226, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLogoClick(accreditation.url)}
              >
                <div className="logo-container">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="accreditation-logo"
                    loading="lazy"
                  />
                </div>
                <div className="accreditation-overlay">
                  <span className="accreditation-name">
                    {accreditation.name}
                  </span>
                  <span className="click-hint">Click to verify</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 5 Accreditations */}
          <div className="accreditations-row">
            {accreditations.slice(5, 10).map((accreditation) => (
              <motion.div
                key={accreditation.id}
                className="accreditation-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(138, 43, 226, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLogoClick(accreditation.url)}
              >
                <div className="logo-container">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="accreditation-logo"
                    loading="lazy"
                  />
                </div>
                <div className="accreditation-overlay">
                  <span className="accreditation-name">
                    {accreditation.name}
                  </span>
                  <span className="click-hint">Click to verify</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="accreditations-categories"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="category-badge international">
            <span>Global Technology Partners</span>
          </div>
          <div className="category-badge ecommerce">
            <span>E-Commerce Excellence</span>
          </div>
          <div className="category-badge canadian">
            <span>Canadian Industry Recognition</span>
          </div>
        </motion.div>

        <motion.div
          className="accreditations-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Our partnerships with industry leaders ensure we deliver
            cutting-edge solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Accreditations;
