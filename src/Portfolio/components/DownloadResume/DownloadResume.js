import React from "react";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../../../assets/SiddheshBhande_Resume_FullStack.pdf";
import "./DownloadResume.css";

const DownloadResume = ({ variant = "primary", className = "" }) => {
  return (
    <a
      href={resumePDF}
      download="SiddheshBhande_Resume_FullStack.pdf"
      className={`download-resume-btn btn btn-${variant} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDownload className="download-icon" />
      Download Resume
    </a>
  );
};

export default DownloadResume;
