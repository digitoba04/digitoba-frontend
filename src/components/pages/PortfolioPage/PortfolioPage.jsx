import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./PortfolioPage.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ui", label: "UI/UX Design" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "graphic", label: "Graphic Design" },
  ];

  const projects = [
    // ==== WEB DEVELOPMENT ====
    {
      id: 1,
      title: "Wanderlust",
      category: "web",
      description:
        "A Property Rental Platform where users can list, discover, and book rental properties worldwide.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "/wanderlust.png",
      link: "https://wanderlust-80q4.onrender.com/listings",
    },
    {
      id: 2,
      title: "HomeFix",
      category: "web",
      description:
        "Home Service Booking Platform where users can book various home services like plumbing, electrical work, cleaning, and more.",
      tags: ["ReactJs", "NodeJs", "JavaScript", "MongoDB"],
      image: "/homefix.png",
      link: "https://homefix-eq0m.onrender.com/",
    },
    {
      id: 12,
      title: "KnowIndiaTravel",
      category: "web",
      description: "Travel booking app with clean modern design.",
      tags: ["ReactJs", "NodeJs", "JavaScript", "SupaBase"],
      image: "/knowindiatravel.png",
      link: "https://www.knowindiatravel.com/",
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      description:
        "A modern corporate website with CMS integration and SEO optimization.",
      tags: ["Next.js", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      description:
        "Personal portfolio site showcasing skills, resume, and projects.",
      tags: ["React", "SCSS"],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "web",
      description:
        "Property listing platform with map integration and advanced filters.",
      tags: ["Laravel", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Event Management System",
      category: "web",
      description: "Event booking and management portal with payment gateway.",
      tags: ["Vue.js", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Learning Management System",
      category: "web",
      description:
        "An e-learning system with video courses, quizzes, and progress tracking.",
      tags: ["MERN", "JWT"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Restaurant Website",
      category: "web",
      description: "Food ordering website with digital menu and table booking.",
      tags: ["HTML", "CSS", "JS"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    // ==== UI/UX DESIGN ====
    {
      id: 9,
      title: "Fitness App UI",
      category: "ui",
      description: "UI design for a fitness tracking app.",
      tags: ["Figma", "UI Design"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "Banking Dashboard",
      category: "ui",
      description: "Dashboard with financial visualizations and reports.",
      tags: ["Sketch", "Wireframing"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      title: "E-learning UI",
      category: "ui",
      description: "Online education platform UI design.",
      tags: ["Figma", "UX"],
      image:
        "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      title: "Social Media UI",
      category: "ui",
      description: "Engaging UI design for a social media platform.",
      tags: ["UI Design", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      title: "Healthcare App UI",
      category: "ui",
      description: "App design for patient-doctor consultations.",
      tags: ["Figma", "UI"],
      image:
        "https://plus.unsplash.com/premium_photo-1702599032367-e24f09bc59e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhbHRoY2FyZSUyMEFwcCUyMFVJfGVufDB8fDB8fHww",
    },
    {
      id: 15,
      title: "Food Delivery UI",
      category: "ui",
      description: "Modern design for food delivery application.",
      tags: ["Sketch", "UX"],
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 16,
      title: "Crypto Wallet UI",
      category: "ui",
      description: "UI design for crypto trading & wallet app.",
      tags: ["Adobe XD", "UI/UX"],
      image:
        "https://media.istockphoto.com/id/2043583592/photo/bitcoin-icon-on-digital-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=danNvJnvo-ITDAR8kspm3PUZcuQNK2n67elxyMBv7PQ=",
    },

    // ==== MOBILE APPS ====
    {
      id: 18,
      title: "Chat App",
      category: "mobile",
      description: "Messaging app with real-time chat & notifications.",
      tags: ["Flutter", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 19,
      title: "Ride Sharing App",
      category: "mobile",
      description: "App for ride booking and live tracking.",
      tags: ["Kotlin", "Maps API"],
      image:
        "https://images.unsplash.com/photo-1528033978085-52f315289665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmlkZSUyMFNoYXJpbmclMjBBcHB8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 20,
      title: "Meditation App",
      category: "mobile",
      description: "Relaxation app with guided meditations.",
      tags: ["React Native", "Audio"],
      image:
        "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 21,
      title: "E-wallet App",
      category: "mobile",
      description: "Secure wallet app for transactions and savings.",
      tags: ["Swift", "iOS"],
      image:
        "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 22,
      title: "Fitness Tracker",
      category: "mobile",
      description: "Workout app with real-time stats tracking.",
      tags: ["Flutter", "API"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 23,
      title: "Music Player",
      category: "mobile",
      description: "App for offline/online music streaming.",
      tags: ["React Native", "Expo"],
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 24,
      title: "News Aggregator",
      category: "mobile",
      description: "App fetching live news from multiple APIs.",
      tags: ["Java", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    // ==== GRAPHIC DESIGN ====
    {
      id: 25,
      title: "Brand Identity",
      category: "graphic",
      description: "Full branding package with logo & color palette.",
      tags: ["Illustrator", "Branding"],
      image:
        "https://images.unsplash.com/photo-1611670502424-232bf030c54b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJyYW5kJTIwSWRlbnRpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 26,
      title: "Poster Design",
      category: "graphic",
      description: "Event posters and creative graphics.",
      tags: ["Photoshop", "Illustrator"],
      image:
        "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 27,
      title: "Business Card",
      category: "graphic",
      description: "Professional business card designs.",
      tags: ["CorelDraw", "Branding"],
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 28,
      title: "Brochure Design",
      category: "graphic",
      description: "Modern brochure designs for businesses.",
      tags: ["InDesign", "Print"],
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 29,
      title: "Social Media Graphics",
      category: "graphic",
      description: "Engaging posts for Instagram & Facebook.",
      tags: ["Canva", "Illustrator"],
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 30,
      title: "Logo Design",
      category: "graphic",
      description: "Unique logos tailored for brands.",
      tags: ["Illustrator", "Photoshop"],
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 31,
      title: "Packaging Design",
      category: "graphic",
      description: "Creative packaging for products.",
      tags: ["Illustrator", "3D Mockup"],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 32,
      title: "Flyer Design",
      category: "graphic",
      description: "Promotional flyers and leaflets.",
      tags: ["Photoshop", "InDesign"],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    // Extra Mixed (to reach 40)
    {
      id: 33,
      title: "Charity Website",
      category: "web",
      description: "Donation & fundraising site with PayPal API.",
      tags: ["PHP", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 34,
      title: "E-learning Dashboard",
      category: "ui",
      description: "Interactive learning UI with analytics.",
      tags: ["Figma", "Prototyping"],
      image:
        "https://media.istockphoto.com/id/2200294690/photo/accounting-and-financial-software-concept-business-spreadsheet-on-computer-screen-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=045lwnTn9WWAbcS6wQcr5iGkc2NP2wqBJsiCIXBXSk0=",
    },
    {
      id: 35,
      title: "Hotel Booking App",
      category: "mobile",
      description: "Mobile app for booking hotels & resorts.",
      tags: ["React Native", "Maps"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 36,
      title: "Infographic Design",
      category: "graphic",
      description: "Creative infographics for reports & marketing.",
      tags: ["Illustrator", "Data Viz"],
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 37,
      title: "Crypto Exchange Website",
      category: "web",
      description: "Trading platform with wallet integration.",
      tags: ["Next.js", "API"],
      image:
        "https://images.unsplash.com/photo-1642052502352-d280c0756b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3J5cHRvJTIwRXhjaGFuZ2UlMjBXZWJzaXRlfGVufDB8fDB8fHww",
    },
    {
      id: 38,
      title: "Job Portal",
      category: "web",
      description: "Recruitment platform with candidate matching.",
      tags: ["React", "Node"],
      image:
        "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 39,
      title: "Education App",
      category: "mobile",
      description: "Study material & quizzes app for students.",
      tags: ["Flutter", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 40,
      title: "Creative Ads",
      category: "graphic",
      description: "Ad banners and creatives for campaigns.",
      tags: ["Photoshop", "Illustrator"],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="portfolio-section">
      {/* Animated Background Elements */}
      <div className="portfolio-bg-elements">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p>Explore our creative work and projects across different domains</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          variants={filterVariants}
          initial="hidden"
          animate="visible"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-img">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1620336655055-bd87ca8f1370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="overlay">
                  <motion.a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <i className="fas fa-arrow-right"></i>
                  </motion.a>
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
