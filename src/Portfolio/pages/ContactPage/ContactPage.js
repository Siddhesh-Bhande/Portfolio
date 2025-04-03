import React, { useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";
import DownloadResume from "../../components/DownloadResume/DownloadResume";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setFormStatus({ submitting: false, submitted: true, error: false });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="lead">
            Let's discuss how I can help bring your project to life
          </p>
        </div>
        <div className="header-pattern"></div>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-container">
            <div className="form-card">
              <h2>Send Me a Message</h2>

              {formStatus.submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="design">UI/UX Design</option>
                      <option value="ai">AI/ML Solution</option>
                      <option value="cloud">Cloud Architecture</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project and how I can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary submit-btn ${
                      formStatus.submitting ? "submitting" : ""
                    }`}
                    disabled={formStatus.submitting}
                  >
                    <span>
                      {formStatus.submitting ? "Sending..." : "Send Message"}
                    </span>
                    <FaPaperPlane className="btn-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h2>Let's Connect</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>siddheshbhande8@gmail.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-details">
                    <h3>Location</h3>
                    <p>Baltimore, Maryland</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaFileAlt />
                  </div>
                  <div className="method-details">
                    <h3>Resume</h3>
                    <a
                      href="#resume"
                      className="resume-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(".resume-download-btn").click();
                      }}
                    >
                      Download Resume <FaDownload className="btn-icon" />
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaLinkedin />
                  </div>
                  <div className="method-details">
                    <h3>LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/siddhesh-bhande/"
                      className="linkedin-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="availability-status">
                <div className="status-indicator"></div>
                <p>Currently available for new projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer-pattern"></div>
      {/* Hidden download resume component that will be clicked programmatically */}
      <div style={{ display: "none" }}>
        <DownloadResume className="resume-download-btn" />
      </div>
    </div>
  );
};

export default ContactPage;
