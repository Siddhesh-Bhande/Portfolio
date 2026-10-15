import React from "react";
import ProjectGrid from "../../components/Projects/ProjectGrid";
import { projectsData } from "../../data/projectsData";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>Projects & Case Studies</h1>
          <p className="lead">
            Production web applications, distributed systems, spatial GIS engines, and machine learning pipelines
          </p>
        </div>
        <ProjectGrid projects={projectsData} />
      </div>
    </div>
  );
};

export default ProjectsPage;
