import React, { useState } from "react";
import { FaSpinner, FaCopy, FaCheck } from "react-icons/fa";
import { reduceTokens } from "../../../utils/mockTokenReducer";
import "./TokenReducer.css";

const TokenReducer = () => {
  const [inputText, setInputText] = useState("");
  const [reducedText, setReducedText] = useState("");
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      setError("Please enter some text to process");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Use the mock API instead of making a real API call
      const data = await reduceTokens(inputText);

      setReducedText(data.reduced_text);
      setMetrics({
        originalTokens: data.original_token_count,
        reducedTokens: data.reduced_token_count,
        tokenReduction: (
          ((data.original_token_count - data.reduced_token_count) /
            data.original_token_count) *
          100
        ).toFixed(1),
        originalCost: data.original_cost,
        reducedCost: data.reduced_cost,
        costSavings: (
          ((data.original_cost - data.reduced_cost) / data.original_cost) *
          100
        ).toFixed(1),
      });
    } catch (err) {
      console.error("Error processing text:", err);
      setError(`Failed to process text: ${err.message}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reducedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="token-reducer-container">
      <div className="token-reducer-header">
        <h2>AI Token Reducer</h2>
        <p>
          Reduce the token count of your text to save costs when using AI
          services like GPT-3.5 and GPT-4.
        </p>
      </div>

      <form className="token-reducer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputText">Enter your text:</label>
          <textarea
            id="inputText"
            rows="6"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your text here to reduce token count..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Processing..." : "Process Text"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {metrics && (
        <div className="results-container">
          <h3>Results</h3>

          <div className="metrics-container">
            <div className="metric">
              <span className="metric-label">Original Tokens</span>
              <span className="metric-value">{metrics.originalTokens}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Reduced Tokens</span>
              <span className="metric-value">{metrics.reducedTokens}</span>
            </div>
            <div className="metric highlight">
              <span className="metric-label">Token Reduction</span>
              <span className="metric-value">{metrics.tokenReduction}%</span>
            </div>
          </div>

          <div className="cost-container">
            <div className="metric">
              <span className="metric-label">Original Cost</span>
              <span className="metric-value">
                ${metrics.originalCost.toFixed(6)}
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">Reduced Cost</span>
              <span className="metric-value">
                ${metrics.reducedCost.toFixed(6)}
              </span>
            </div>
            <div className="metric highlight">
              <span className="metric-label">Cost Savings</span>
              <span className="metric-value">{metrics.costSavings}%</span>
            </div>
          </div>

          <div className="reduced-text-container">
            <div className="reduced-text-header">
              <h4>Reduced Text</h4>
              <button
                className="copy-button"
                onClick={handleCopy}
                aria-label="Copy reduced text"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
            <div className="reduced-text-content">{reducedText}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenReducer;
