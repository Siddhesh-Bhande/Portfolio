import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectGrid.css";

const ProjectGrid = ({ projects, featured = false }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = featured
    ? projects.filter((project) => project.featured).slice(0, 3)
    : filter === "all"
    ? projects
    : projects.filter((project) => project.tags.includes(filter));

  const allTags = [...new Set(projects.flatMap((project) => project.tags))];

  return (
    <div className="project-grid-container">
      {!featured && (
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? "active" : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
