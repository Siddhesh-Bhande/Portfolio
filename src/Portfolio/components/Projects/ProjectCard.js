import React from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, title, subtitle, impact, thumbnail, tags } = project;

  // Generate a background color based on the project title for consistency
  const getBackgroundColor = (title) => {
    const colors = [
      "#3b82f6", // blue
      "#8b5cf6", // purple
      "#ec4899", // pink
      "#f97316", // orange
      "#22c55e", // green
      "#06b6d4", // cyan
    ];

    // Simple hash function to get consistent color for same title
    const charCodeSum = title
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length];
  };

  return (
    <div className="project-card">
      <div
        className="project-card-header"
        style={{ backgroundColor: getBackgroundColor(title) }}
      >
        <div className="project-icon">
          <FaLaptopCode />
        </div>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
        <div className="project-impact">
          <h4>Impact:</h4>
          <p>{impact}</p>
        </div>
        <div className="project-card-actions">
          <Link to={`/projects/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
