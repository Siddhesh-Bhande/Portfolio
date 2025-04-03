import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Energyexplorer from "../../../Components/Energyexplorer";
import "./EnergyExplorerPage.css";

const EnergyExplorerPage = () => {
  return (
    <div className="energy-explorer-page">
      <div className="explorer-header">
        <Link to="/projects/energy-explorer" className="back-link">
          <FaArrowLeft /> Back to Project
        </Link>
        <h1>Energy Explorer Dashboard</h1>
        <p className="lead">
          Explore energy consumption and renewable energy generation data with
          this interactive dashboard.
        </p>
      </div>

      <div className="explorer-container">
        <Energyexplorer />
      </div>
    </div>
  );
};

export default EnergyExplorerPage;
