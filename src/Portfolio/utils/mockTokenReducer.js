/**
 * This file provides a mock implementation of the token reducer API
 * for demonstration purposes in the portfolio.
 */

// Simple implementation of stopword removal and basic token counting
const stopwords = new Set([
  "a",
  "an",
  "the",
  "and",
  "but",
  "or",
  "for",
  "nor",
  "on",
  "at",
  "to",
  "from",
  "by",
  "with",
  "in",
  "out",
  "about",
  "as",
  "into",
  "like",
  "through",
  "after",
  "before",
  "between",
  "under",
  "over",
  "is",
  "am",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "can",
  "could",
  "will",
  "would",
  "shall",
  "should",
  "may",
  "might",
  "must",
  "of",
  "that",
  "this",
  "these",
  "those",
  "it",
  "its",
  "we",
  "us",
  "our",
  "they",
  "them",
  "their",
]);

// Simple lemmatization function (in real app would use proper NLP library)
const lemmatize = (word) => {
  if (word.endsWith("ing")) return word.slice(0, -3);
  if (word.endsWith("ed")) return word.slice(0, -2);
  if (word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
};

/**
 * Mock implementation of the token reducer API
 */
export const reduceTokens = async (text, modelName = "gpt-3.5-turbo") => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!text || !text.trim()) {
    throw new Error("Text cannot be empty");
  }

  // Count tokens in original text (simple approximation)
  const originalWords = text.split(/\s+/);
  const originalTokenCount = Math.ceil(originalWords.length * 1.3); // Account for punctuation

  // Process text - remove stopwords and lemmatize
  const processedWords = originalWords
    .filter((word) => !stopwords.has(word.toLowerCase()))
    .map((word) => lemmatize(word));

  const reducedText = processedWords.join(" ");

  // Count tokens in reduced text
  const reducedTokenCount = Math.ceil(processedWords.length * 1.3);

  // Calculate costs (simplified model)
  const pricePerToken = 0.0015 / 1000; // $0.0015 per 1000 tokens
  const originalCost = originalTokenCount * pricePerToken;
  const reducedCost = reducedTokenCount * pricePerToken;

  return {
    reduced_text: reducedText,
    original_token_count: originalTokenCount,
    reduced_token_count: reducedTokenCount,
    original_cost: originalCost,
    reduced_cost: reducedCost,
  };
};
