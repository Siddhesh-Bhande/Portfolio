import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaFileAlt,
  FaServer,
  FaCloud,
  FaPalette,
} from "react-icons/fa";
import ResumeFile from "../../../assets/SiddheshBhande_Resume_FullStack.pdf";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>Siddhesh Bhande</h3>
          <p>
            I build scalable, cloud-native solutions that address critical
            business challenges, enhance user experience, and boost efficiency.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Siddhesh-Bhande?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-bhande/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:siddheshbhande8@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Site Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact</h3>
          <address>
            <p>
              <FaMapMarkerAlt /> Baltimore, Maryland
            </p>
            <p>
              <FaEnvelope /> siddheshbhande8@gmail.com
            </p>
          </address>
          <a href={ResumeFile} download className="footer-resume-link">
            <FaFileAlt /> Download Resume
          </a>
        </div>

        <div className="footer-section specialties">
          <h3>Specialties</h3>
          <div className="specialties-grid">
            <div className="specialty-item">
              <FaCode />
              <span>Full Stack Development</span>
            </div>
            <div className="specialty-item">
              <FaServer />
              <span>AI/ML Solutions</span>
            </div>
            <div className="specialty-item">
              <FaCloud />
              <span>Cloud Architecture</span>
            </div>
            <div className="specialty-item">
              <FaPalette />
              <span>UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Siddhesh Bhande. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
