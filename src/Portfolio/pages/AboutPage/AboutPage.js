import React, { useEffect } from "react";
import {
  FaServer,
  FaDesktop,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaGraduationCap,
  FaBriefcase,
  FaChevronRight,
  FaBasketballBall,
  FaVolleyballBall,
  FaUsers,
  FaLightbulb,
  FaQuoteLeft,
  FaQuoteRight,
  FaBullseye,
  FaArrowDown,
  FaDownload,
  FaBuilding,
} from "react-icons/fa";
import DownloadResume from "../../components/DownloadResume/DownloadResume";
import ProfileImage from "../../../assets/image.png";
import { useScrollReveal, useSequentialDelays } from "../../utils/ScrollReveal";
import "./AboutPage.css";

const AboutPage = () => {
  // Initialize scroll animations
  useScrollReveal();

  // Apply sequential delays to timeline items
  useSequentialDelays(".timeline-card", 0.1, 0.2);

  // Apply sequential delays to expertise cards
  useSequentialDelays(".expertise-card", 0.1, 0.15);

  // Apply sequential delays to education cards
  useSequentialDelays(".education-card", 0.1, 0.3);

  // Apply sequential delays to personality traits
  useSequentialDelays(".personality-item", 0.05, 0.1);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="about-page">
      {/* Enhanced Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="profile-image-container animate-on-scroll reveal-fade-right">
              <div className="profile-image-wrapper">
                <img src={ProfileImage} alt="Siddhesh Bhande" />
              </div>
              <div className="profile-image-decoration"></div>
              <div className="profile-image-backdrop"></div>
            </div>
            <div className="hero-text animate-on-scroll reveal-fade-left">
              <div className="section-title">
                <span className="subtitle">Architect of Digital Solutions</span>
                <h1>Meet Siddhesh</h1>
              </div>
              <p className="lead">
                Full Stack Developer crafting scalable cloud-native experiences
              </p>
              <p className="intro-paragraph">
                With a Master's in Computer Science from UMBC and years of
                professional experience, I blend technical expertise with
                innovative problem-solving to build solutions that drive
                business success. My journey spans from developing robust React
                frontends to architecting complex ML systems—always with a focus
                on creating exceptional user experiences.
              </p>

              <div className="nav-and-cta">
                <div className="hero-nav-buttons">
                  <button
                    onClick={() => scrollToSection("journey")}
                    className="hero-nav-btn"
                  >
                    <span>My Journey</span>
                    <FaArrowDown className="nav-icon" />
                  </button>
                  <button
                    onClick={() => scrollToSection("expertise")}
                    className="hero-nav-btn"
                  >
                    <span>Expertise</span>
                    <FaArrowDown className="nav-icon" />
                  </button>
                  <button
                    onClick={() => scrollToSection("personality")}
                    className="hero-nav-btn"
                  >
                    <span>Personality</span>
                    <FaArrowDown className="nav-icon" />
                  </button>
                  <button
                    className="hero-nav-btn"
                    onClick={() =>
                      document.querySelector(".resume-download-btn").click()
                    }
                  >
                    <span>Resume</span>
                    <FaDownload className="nav-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to discover my story</p>
        </div>

        <div className="hero-pattern-bg"></div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container animate-on-scroll reveal-scale">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <blockquote>
              I believe that thoughtful engineering combined with beautiful
              design creates digital experiences that truly resonate with users.
              My goal is to build solutions that are not just functional, but
              delightful to use.
            </blockquote>
            <div className="quote-icon right">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section id="journey" className="experience-section">
        <div className="container">
          <div className="section-header animate-on-scroll reveal-fade-up">
            <FaBriefcase className="section-icon" />
            <h2>Professional Journey</h2>
            <p className="section-subtitle">
              The path that shaped my expertise
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-card animate-on-scroll reveal-fade-right">
              <div className="timeline-date">
                <span>2024 - Present</span>
              </div>
              <div className="timeline-content">
                <h3>Private Energy Partners LLC</h3>
                <p className="timeline-position">Full Stack Developer</p>
                <ul className="experience-points">
                  <li>
                    <FaChevronRight className="list-icon" />
                    Engineered 10+ high-performance widgets for renewable energy
                    tracking, enabling real-time monitoring and optimization of
                    carbon impact
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Reduced dashboard load times by 4x and cut CPU usage by 50%
                    through advanced React optimizations, improving efficiency
                    for thousands of data points
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Developed an advanced battery configuration system, enabling
                    precise hourly green energy targets and reducing grid
                    reliance
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Built scalable APIs for energy data processing, improving
                    data accuracy and security for carbon tracking systems used
                    in sustainability reporting
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-card animate-on-scroll reveal-fade-right">
              <div className="timeline-date">
                <span>2022 - 2024</span>
              </div>
              <div className="timeline-content">
                <h3>University of Maryland, Baltimore County</h3>
                <p className="timeline-position">
                  Graduate Assistant - Artificial Intelligence
                </p>
                <ul className="experience-points">
                  <li>
                    <FaChevronRight className="list-icon" />
                    Conducted research in machine learning applications for
                    healthcare data, improving diagnostic accuracy by 23%
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Developed ML models for predictive analytics achieving 87%
                    accuracy in patient readmission forecasting
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Collaborated on interdisciplinary research projects with the
                    health informatics team, publishing two research papers
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-card animate-on-scroll reveal-fade-right">
              <div className="timeline-date">
                <span>2021 - 2022</span>
              </div>
              <div className="timeline-content">
                <h3>Private Energy Partners</h3>
                <p className="timeline-position">Full Stack Engineer</p>
                <ul className="experience-points">
                  <li>
                    <FaChevronRight className="list-icon" />
                    Designed and implemented an energy management platform that
                    processed data from 500+ IoT devices
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Developed interactive data visualization dashboards using
                    React and D3.js, driving a 35% increase in user engagement
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Optimized database queries resulting in a 60% reduction in
                    dashboard loading time
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-card animate-on-scroll reveal-fade-right">
              <div className="timeline-date">
                <span>2019 - 2021</span>
              </div>
              <div className="timeline-content">
                <h3>Tata Consultancy Services</h3>
                <p className="timeline-position">Full Stack Developer</p>
                <ul className="experience-points">
                  <li>
                    <FaChevronRight className="list-icon" />
                    Spearheaded development for UK's Department of Work and
                    Pensions, delivering mission-critical services
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Implemented child maintenance systems serving 846,000
                    children across the UK, with 99.9% uptime
                  </li>
                  <li>
                    <FaChevronRight className="list-icon" />
                    Led UI/UX redesign reducing user interaction time by 8
                    minutes per process, increasing satisfaction by 37%
                  </li>
                </ul>
              </div>
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

      {/* Combined Education and Expertise Section for less scrolling */}
      <div className="combined-section">
        {/* Education Section */}
        <section className="education-section">
          <div className="container">
            <div className="section-header animate-on-scroll reveal-fade-up">
              <FaGraduationCap className="section-icon" />
              <h2>Education</h2>
              <p className="section-subtitle">The foundation of my knowledge</p>
            </div>
            <div className="education-cards">
              <div className="education-card animate-on-scroll reveal-fade-up">
                <div className="education-content">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-details">
                    <h3>Master of Science in Computer Science</h3>
                    <p className="education-institution">
                      University of Maryland, Baltimore County
                    </p>
                    <p className="education-date">2022 - 2024</p>
                    <p>
                      Specialized in Artificial Intelligence and Cloud Computing
                      with a focus on scalable applications and machine learning
                      systems. Maintained a 3.9 GPA while working on
                      cutting-edge research projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="education-card animate-on-scroll reveal-fade-up">
                <div className="education-content">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-details">
                    <h3>Bachelor of Engineering in Information Technology</h3>
                    <p className="education-institution">
                      University of Mumbai, India
                    </p>
                    <p className="education-date">2015 - 2019</p>
                    <p>
                      Graduated with First Class Honors, focusing on software
                      engineering fundamentals and database systems. Led the
                      university tech community and won multiple hackathons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="expertise-section">
          <div className="container">
            <div className="section-header animate-on-scroll reveal-fade-up">
              <h2>Technical Expertise</h2>
              <p className="section-subtitle">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>
            <div className="expertise-grid">
              <div className="expertise-card animate-on-scroll reveal-fade-up">
                <div className="expertise-icon">
                  <FaDesktop />
                </div>
                <h3>Frontend Development</h3>
                <ul>
                  <li>
                    <span>React.js</span> - Advanced component architecture,
                    Redux state management, and performance optimization
                  </li>
                  <li>
                    <span>TypeScript</span> - Type-safe applications with robust
                    interfaces and reduced runtime errors
                  </li>
                  <li>
                    <span>Responsive Design</span> - Mobile-first approaches
                    with Tailwind CSS and CSS Grid for pixel-perfect layouts
                  </li>
                </ul>
              </div>

              <div className="expertise-card animate-on-scroll reveal-fade-up">
                <div className="expertise-icon">
                  <FaServer />
                </div>
                <h3>Backend Development</h3>
                <ul>
                  <li>
                    <span>Node.js</span> - RESTful services, middleware, and
                    authentication systems with Express
                  </li>
                  <li>
                    <span>Python</span> - FastAPI for high-performance backends,
                    Flask for lightweight services
                  </li>
                  <li>
                    <span>API Design</span> - REST and GraphQL architectures
                    with comprehensive documentation
                  </li>
                </ul>
              </div>

              <div className="expertise-card animate-on-scroll reveal-fade-up">
                <div className="expertise-icon">
                  <FaDatabase />
                </div>
                <h3>Database & Data Engineering</h3>
                <ul>
                  <li>
                    <span>PostgreSQL</span> - Complex queries, indexing, and
                    performance tuning for large datasets
                  </li>
                  <li>
                    <span>MongoDB</span> - Document design, aggregation
                    pipelines for flexible data models
                  </li>
                  <li>
                    <span>Data Modeling</span> - Schema design for scalability
                    and future extensibility
                  </li>
                </ul>
              </div>

              <div className="expertise-card animate-on-scroll reveal-fade-up">
                <div className="expertise-icon">
                  <FaCloud />
                </div>
                <h3>Cloud & DevOps</h3>
                <ul>
                  <li>
                    <span>AWS</span> - EC2, S3, RDS, Lambda, and CloudFormation
                    for scalable infrastructure
                  </li>
                  <li>
                    <span>Containerization</span> - Docker and Kubernetes
                    orchestration for microservices
                  </li>
                  <li>
                    <span>CI/CD</span> - Automated testing and deployment
                    pipelines with GitHub Actions
                  </li>
                </ul>
              </div>

              <div className="expertise-card animate-on-scroll reveal-fade-up">
                <div className="expertise-icon">
                  <FaBrain />
                </div>
                <h3>AI & Machine Learning</h3>
                <ul>
                  <li>
                    <span>Predictive Models</span> - Classification, regression,
                    and clustering algorithms for data-driven insights
                  </li>
                  <li>
                    <span>NLP</span> - Text analysis and language processing
                    applications with transformers
                  </li>
                  <li>
                    <span>Data Visualization</span> - Interactive dashboards
                    using D3.js and visualization libraries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Personality Section */}
      <section id="personality" className="personality-section">
        <div className="container">
          <div className="personality-content">
            <div className="personality-text animate-on-scroll reveal-fade-right">
              <h3>Who I Am</h3>
              <p>
                I bring the same passion and drive to both my professional and
                personal life. My optimistic outlook and growth mindset help me
                approach challenges as opportunities to learn and improve. I
                thrive in collaborative environments where diverse perspectives
                combine to create innovative solutions.
              </p>
              <p>
                When I'm not coding, you'll find me on the basketball court,
                perfecting my shots at the pool table, or spiking volleys on the
                volleyball court. These activities not only keep me physically
                active but also reinforce the values of teamwork, strategy, and
                persistence that I apply to my professional work.
              </p>
            </div>

            <div className="personality-traits animate-on-scroll reveal-fade-left">
              <div className="personality-item">
                <div className="personality-icon basketball">
                  <FaBasketballBall />
                </div>
                <div className="personality-detail">
                  <h4>Basketball Enthusiast</h4>
                  <p>
                    Teamwork, strategy, and constant improvement on the court
                  </p>
                </div>
              </div>

              <div className="personality-item">
                <div className="personality-icon pool">
                  <FaBullseye />
                </div>
                <div className="personality-detail">
                  <h4>8-Ball Pool Player</h4>
                  <p>Precision, patience, and planning moves ahead</p>
                </div>
              </div>

              <div className="personality-item">
                <div className="personality-icon volleyball">
                  <FaVolleyballBall />
                </div>
                <div className="personality-detail">
                  <h4>Volleyball Player</h4>
                  <p>Coordination, communication, and quick reflexes</p>
                </div>
              </div>

              <div className="personality-item">
                <div className="personality-icon team">
                  <FaUsers />
                </div>
                <div className="personality-detail">
                  <h4>Team Player</h4>
                  <p>
                    Collaborative spirit and ability to leverage diverse skills
                  </p>
                </div>
              </div>

              <div className="personality-item">
                <div className="personality-icon optimist">
                  <FaLightbulb />
                </div>
                <div className="personality-detail">
                  <h4>Eternal Optimist</h4>
                  <p>Finding opportunities in every challenge</p>
                </div>
              </div>
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

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll reveal-fade-up">
        <div className="container">
          <h2>Let's Build Something Amazing Together</h2>
          <p>
            I'm passionate about using technology to solve real-world problems
            and create impactful solutions. Whether you need a complex
            enterprise application, a data-driven dashboard, or a machine
            learning system, I have the skills and experience to bring your
            vision to life.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="/projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="cta-pattern-bg"></div>
      </section>

      {/* Hidden Download Resume Component */}
      <div style={{ display: "none" }}>
        <DownloadResume />
      </div>
    </div>
  );
};

export default AboutPage;
