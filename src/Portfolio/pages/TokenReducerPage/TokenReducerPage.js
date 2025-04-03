import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import TokenReducer from "../../components/ProjectItems/TokenReducer/TokenReducer";
import "./TokenReducerPage.css";

const TokenReducerPage = () => {
  return (
    <div className="token-reducer-page">
      <div className="container">
        <div className="page-header">
          <Link to="/projects/token-reducer" className="back-link">
            <FaArrowLeft /> Back to Project
          </Link>
          <h1>Token Reducer Demo</h1>
          <p className="lead">
            Try our tool that reduces token count for AI language models,
            helping you save costs on your API usage.
          </p>
        </div>

        <TokenReducer />

        <div className="project-info">
          <h2>How It Works</h2>
          <p>
            This tool uses natural language processing techniques to reduce the
            number of tokens in your text:
          </p>
          <ul>
            <li>
              <strong>Stopword Removal:</strong> Common words like "the", "and",
              "is" are removed
            </li>
            <li>
              <strong>Lemmatization:</strong> Words are reduced to their base
              form (e.g., "running" → "run")
            </li>
          </ul>
          <p>
            The result is a more compact text that preserves most of the meaning
            while using fewer tokens, which translates to cost savings when
            using AI services like GPT-3.5 and GPT-4.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenReducerPage;
