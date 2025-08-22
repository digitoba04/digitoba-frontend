import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Services */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/servicesPage">Website Design & Domain</a>
              </li>
              <li>
                <a href="/servicesPage">AI Automations</a>
              </li>
              <li>
                <a href="/servicesPage">AI Agents</a>
              </li>
              <li>
                <a href="/servicesPage">SEO Optimization</a>
              </li>
              <li>
                <a href="/servicesPage">Social Media Management</a>
              </li>
              <li>
                <a href="/servicesPage">Content Marketing</a>
              </li>
              <li>
                <a href="/servicesPage">Mobile App Development</a>
              </li>
              <li>
                <a href="/servicesPage">Email Marketing</a>
              </li>
              <li>
                <a href="/servicesPage">UI/UX Design</a>
              </li>
            </ul>
          </div>

          {/* More Services */}
          <div className="footer-links">
            <h4>More Services</h4>
            <ul>
              <li>
                <a href="/servicesPage">Lead Generation</a>
              </li>
              <li>
                <a href="/servicesPage">Bussiness Automations</a>
              </li>
              <li>
                <a href="/servicesPage">WordPress Websites</a>
              </li>
              <li>
                <a href="/servicesPage">eCommerce Development</a>
              </li>
              <li>
                <a href="/servicesPage">Custom Software</a>
              </li>
              <li>
                <a href="/servicesPage">Cloud Solutions</a>
              </li>
              <li>
                <a href="/servicesPage">Cybersecurity</a>
              </li>
              <li>
                <a href="/servicesPage">Data Analytics</a>
              </li>
              <li>
                <a href="/servicesPage">Software Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Generate Client ID</a>
              </li>
              <li>
                <a href="#">Generate Coupon</a>
              </li>
              <li>
                <a href="#">Refer & Earn</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+12492019091">+1 (929) 256-2834</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@convirzon.ca">digitoba938@gmail.com</a>
            </p>
            <p>
              <strong>Canada Office:</strong>
              <br />
              30580 Garnet Pl, Abbotsford, BC, Canada
            </p>
            <p>
              <strong>India Office:</strong>
              <br />
              7/1C, Miajan Ostagar Lane, Park Circus, Kolkata, West Bengal
              700017
            </p>
            {/* <p>
              <strong>CIN:</strong> U62013WB2023PTC263147
            </p> */}
            <div className="social-links">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2021-2025 Digitoba. All Rights Reserved.</p>
          <p className="tagline">Driving Digital Conversions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
