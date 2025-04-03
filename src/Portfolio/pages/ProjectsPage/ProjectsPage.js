import React from "react";
import ProjectGrid from "../../components/Projects/ProjectGrid";
import { projectsData } from "../../data/projectsData";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>Our Projects</h1>
          <p className="lead">
            Explore our portfolio of innovative solutions and successful
            deliveries
          </p>
        </div>
        <ProjectGrid projects={projectsData} />
      </div>
    </div>
  );
};

export default ProjectsPage;
