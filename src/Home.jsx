import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import FAQSection from "./components/FAQSection/FAQSection";
import Contact from "./components/Contact/Contact";
import Accreditations from "./components/Accreditations/Accreditations";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Services />
      <Portfolio />
      <FAQSection />
      <Contact />
    </main>
  );
};

export default Home;
