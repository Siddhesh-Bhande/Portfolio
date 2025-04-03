import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaLaptopCode,
} from "react-icons/fa";
import { projectsData } from "../../data/projectsData";
import ProjectCard from "../../components/Projects/ProjectCard";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [demoActive, setDemoActive] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = projectsData.find(
      (p) => p.id === parseInt(id) || p.id === id
    );

    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | SiddheshTech`;

      // Find related projects based on tags or technologies
      const related = projectsData
        .filter((p) => p.id !== foundProject.id) // Exclude current project
        .filter((p) => {
          // Find projects with similar tags or technologies
          const hasCommonTag = p.tags.some((tag) =>
            foundProject.tags.includes(tag)
          );
          const hasCommonTech = p.technologies.some((tech) =>
            foundProject.technologies.includes(tech)
          );
          return hasCommonTag || hasCommonTech;
        })
        .slice(0, 3); // Limit to 3 related projects

      setRelatedProjects(related);
    }

    setLoading(false);
  }, [id]);

  // Generate a background color based on the project title
  const getBackgroundColor = (title) => {
    const colors = [
      "#3b82f6", // blue
      "#8b5cf6", // purple
      "#ec4899", // pink
      "#f97316", // orange
      "#22c55e", // green
      "#06b6d4", // cyan
    ];

    const charCodeSum = title
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length];
  };

  // Handle opening external demo in new tab
  const openExternalDemo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Add this function to determine if a project has a component-only demo
  const getComponentDemoUrl = (project) => {
    // Map project IDs to their component-only demo URLs
    const demoMap = {
      2: "/token-reducer-component", // Token Reducer
      3: "/energy-explorer-component", // Energy Explorer
      // Add other projects as needed
    };

    return demoMap[project.id] || project.liveDemo;
  };

  if (loading) {
    return (
      <div className="project-detail-container" style={{ minHeight: "70vh" }}>
        {/* Minimal loading state with no spinner or text */}
      </div>
    );
  }

  if (!project) {
    return (
      <div className="error-container">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn btn-primary">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  // Determine if demo is external (can't be embedded in an iframe)
  const isExternalOnly = project.hasLiveDemo && project.externalOnly;

  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <Link to="/projects" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-detail-main">
        <div
          className="project-detail-banner"
          style={{ backgroundColor: getBackgroundColor(project.title) }}
        >
          <div className="project-icon">
            <FaLaptopCode />
          </div>
          <h2>{project.title}</h2>
        </div>

        <div className="project-detail-content">
          <section className="project-section">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </section>

          <section className="project-section">
            <h2>Problem Statement</h2>
            <p>{project.problem}</p>
          </section>

          <section className="project-section">
            <h2>Solution Approach</h2>
            <p>{project.solution}</p>
          </section>

          <section className="project-section">
            <h2>Technologies Used</h2>
            <ul className="technologies-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>Results & Impact</h2>
            <p>{project.impact}</p>
          </section>

          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub /> View Code
              </a>
            )}
            {/* Regular demos that can be embedded */}
            {project.liveDemo && !project.hasLiveDemo && (
              <button
                onClick={() => setDemoActive(!demoActive)}
                className="btn btn-primary"
              >
                <FaExternalLinkAlt /> {demoActive ? "Hide Demo" : "View Demo"}
              </button>
            )}
            {/* Embeddable demos with hasLiveDemo flag */}
            {project.hasLiveDemo && !isExternalOnly && (
              <button
                onClick={() => setDemoActive(!demoActive)}
                className="btn btn-primary"
              >
                <FaExternalLinkAlt /> {demoActive ? "Hide Demo" : "View Demo"}
              </button>
            )}
            {/* External-only demos that must open in new tab */}
            {isExternalOnly && (
              <button
                onClick={() => openExternalDemo(project.liveDemo)}
                className="btn btn-primary"
              >
                <FaExternalLinkAlt /> Open Demo in New Tab
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Display embedded demo when active */}
      {demoActive && project.liveDemo && (
        <div className="project-demo-section">
          <h2>Live Demo</h2>
          <div className="web-demo-container">
            <iframe
              title={`${project.title} Demo`}
              src={getComponentDemoUrl(project)}
              className="demo-frame"
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>
          </div>
        </div>
      )}

      {/* Notice for external demos */}
      {isExternalOnly && (
        <div className="external-demo-notice">
          <p>
            This demo runs on Streamlit Cloud and will open in a new window when
            you click "Open Demo in New Tab". Streamlit apps cannot be embedded
            directly due to security restrictions.
          </p>
        </div>
      )}

      {/* More Projects Section */}
      {relatedProjects.length > 0 && (
        <div className="more-projects-section">
          <h2>More Projects</h2>
          <div className="more-projects-grid">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
