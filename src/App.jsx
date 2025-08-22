import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Home";
import RequestDemo from "./components/pages/RequestDemo/RequestDemo";
import Footer from "./components/Footer/Footer";
import GoogleReviewsPopup from "./components/GoogleReviewsPopup/GoogleReviewsPopup";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import TawkTo from "./components/TawkTo/TawkTo"; // Add this import
import "./App.css";
import Accreditations from "./components/Accreditations/Accreditations";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import CareerPage from "./components/pages/CareerPage/CareerPage";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import ServicesPage from "./components/pages/ServicesPage/ServicesPage";
import PortfolioPage from "./components/pages/PortfolioPage/PortfolioPage";

function App() {
  return (
    <Router>
      <div className="App">
        <TawkTo /> {/* Add Tawk.to chat */}
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Accreditations />
        <Footer />
        <GoogleReviewsPopup />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
