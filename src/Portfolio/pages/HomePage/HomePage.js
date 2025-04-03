import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaFileDownload,
  FaChevronLeft,
  FaChevronRight,
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaSlidersH,
  FaPalette,
} from "react-icons/fa";
import DownloadResume from "../../components/DownloadResume/DownloadResume";
import ProjectCard from "../../components/Projects/ProjectCard";
import { projectsData } from "../../data/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import ResumeFile from "../../../assets/SiddheshBhande_Resume_FullStack.pdf";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./HomePage.css";

const HomePage = () => {
  // Get featured projects
  const featuredProjects = projectsData.filter(
    (project) => project.featured === true
  );

  // Refs for scroll animations
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll animation function
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.85;

        if (isVisible) {
          el.classList.add("visible");
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const testimonials = [
    {
      name: "Deepak Shukla",
      position: "Senior AI Specialist",
      company: "Tech Innovations",
      content:
        "Siddhesh is exceptional with full-stack development and AI integration. His ability to tackle complex problems while maintaining a calm demeanor is remarkable. He excels at building scalable cloud solutions and has a deep understanding of machine learning applications.",
    },
    {
      name: "Moksha Shah",
      position: "Technical Lead",
      company: "Digital Solutions Inc.",
      content:
        "Siddhesh's command of front-end architecture and React development is truly impressive. Working together on multiple complex projects, I've seen firsthand how his full-stack expertise allows him to create seamless user experiences while maintaining robust backend systems.",
    },
    {
      name: "Neha Pritmani",
      position: "UI/UX Specialist",
      company: "Creative Dynamics",
      content:
        "There's no UI problem that Siddhesh can't solve. His expertise in modern JavaScript frameworks, combined with his back-end knowledge, makes him a complete developer. His ability to quickly learn new technologies and implement them effectively is truly remarkable.",
    },
    {
      name: "Shruti Kumar",
      position: "Project Manager",
      company: "Enterprise Solutions",
      content:
        "Siddhesh brings exceptional value to any development team with his full-stack capabilities. He possesses great leadership qualities and technical depth, particularly in cloud architecture and data-driven applications. Any organization would benefit from his comprehensive skills.",
    },
  ];

  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text-container fade-in">
              <h1>
                <span className="highlight">Full Stack Developer</span> <br />
                with expertise in <span className="gradient-text">AI/ML</span>
              </h1>
              <p className="hero-subtitle">
                I build scalable web applications and data-driven solutions that
                solve real-world problems
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="hero-cta">
                <Link to="/projects" className="btn btn-primary">
                  View My Work <FaArrowRight />
                </Link>
                <a
                  href={ResumeFile}
                  download
                  className="btn btn-secondary-outline"
                >
                  <FaFileDownload /> Download Resume
                </a>
              </div>
            </div>
            <div className="hero-animated-shape">
              <div className="hero-icons">
                <span className="hero-icon">
                  <FaCode />
                </span>
                <span className="hero-icon">
                  <FaDatabase />
                </span>
                <span className="hero-icon">
                  <FaServer />
                </span>
                <span className="hero-icon">
                  <FaCloud />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-pattern"></div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-header animate-on-scroll reveal-fade-up">
            <h2>My Services</h2>
            <p>
              Comprehensive development solutions for modern business challenges
            </p>
          </div>

          <div className="services-grid">
            <div
              className="service-card animate-on-scroll reveal-fade-up"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="service-icon">
                <FaLaptopCode />
              </div>
              <h3>Full-Stack Development</h3>
              <p>
                End-to-end web applications using modern JavaScript frameworks
                like React, Node.js, and more.
              </p>
              <Link to="/services" className="service-link">
                Learn more <FaArrowRight />
              </Link>
            </div>

            <div
              className="service-card animate-on-scroll reveal-fade-up"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="service-icon">
                <FaDatabase />
              </div>
              <h3>Database Architecture</h3>
              <p>
                Robust database solutions using SQL, PostgreSQL, and MongoDB for
                efficient data management.
              </p>
              <Link to="/services" className="service-link">
                Learn more <FaArrowRight />
              </Link>
            </div>

            <div
              className="service-card animate-on-scroll reveal-fade-up"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="service-icon">
                <FaCloud />
              </div>
              <h3>Cloud Solutions</h3>
              <p>
                Scalable cloud infrastructure with Docker, Kubernetes, and
                leading cloud platforms.
              </p>
              <Link to="/services" className="service-link">
                Learn more <FaArrowRight />
              </Link>
            </div>

            <div
              className="service-card animate-on-scroll reveal-fade-up"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="service-icon">
                <FaPalette />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Creative interface designs, logo development, and exceptional
                user experiences using Figma and Adobe Express.
              </p>
              <Link to="/services" className="service-link">
                Learn more <FaArrowRight />
              </Link>
            </div>

            <div
              className="service-card animate-on-scroll reveal-fade-up"
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="service-icon">
                <FaRocket />
              </div>
              <h3>AI & ML Integration</h3>
              <p>
                Custom AI solutions and machine learning integrations to power
                your intelligent applications.
              </p>
              <Link to="/services" className="service-link">
                Learn more <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="section-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,128C672,139,768,213,864,218.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Projects Section with Swiper */}
      <section className="featured-projects-section" ref={projectsRef}>
        <div className="container">
          <div className="section-header animate-on-scroll reveal-fade-up">
            <h2>Featured Projects</h2>
            <p>A selection of my recent work</p>
          </div>

          <div className="swiper-container animate-on-scroll reveal-scale">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCards]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-projects",
                prevEl: ".swiper-button-prev-projects",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
                bulletActiveClass: "swiper-pagination-bullet-active",
                bulletClass: "swiper-pagination-bullet",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="projects-swiper"
            >
              {featuredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-nav-buttons">
              <button className="swiper-button-prev-projects">
                <FaChevronLeft />
              </button>
              <button className="swiper-button-next-projects">
                <FaChevronRight />
              </button>
            </div>

            <div className="swiper-pagination"></div>
          </div>

          <div className="centered-btn animate-on-scroll reveal-fade-up">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="section-divider flip">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f8fafc"
              fillOpacity="1"
              d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,181.3C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Testimonials Section with Swiper */}
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header animate-on-scroll reveal-fade-up">
            <h2>Client Testimonials</h2>
            <p>What colleagues say about working with me</p>
          </div>

          <div className="swiper-container testimonials-swiper animate-on-scroll reveal-scale">
            <div className="swiper-nav-buttons">
              <button className="swiper-button-prev-testimonials">
                <FaChevronLeft />
              </button>
              <button className="swiper-button-next-testimonials">
                <FaChevronRight />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-testimonials",
                nextEl: ".swiper-button-next-testimonials",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <FaQuoteLeft />
                      </div>
                      <p>{testimonial.content}</p>
                      <div className="quote-icon right">
                        <FaQuoteRight />
                      </div>
                    </div>
                    <div className="testimonial-meta">
                      <div className="testimonial-person">
                        <div className="testimonial-details">
                          <h4>{testimonial.name}</h4>
                          <p>
                            {testimonial.position} | {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <div className="cta-content animate-on-scroll reveal-fade-up">
            <h2>Ready to Start Your Next Project?</h2>
            <p>
              Let's discuss how I can help bring your ideas to life with robust
              full-stack solutions
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Me <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="cta-particles"></div>
      </section>
    </div>
  );
};

export default HomePage;
