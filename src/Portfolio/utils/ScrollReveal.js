import { useEffect } from "react";

/**
 * ScrollReveal utility for animating elements when they enter the viewport
 * @param {string} selector - CSS selector for elements to animate
 * @param {Object} options - Configuration options
 */
export const useScrollReveal = (
  selector = ".animate-on-scroll",
  options = {}
) => {
  useEffect(() => {
    const defaultOptions = {
      threshold: 0.2, // How much of the element needs to be visible
      rootMargin: "0px 0px -100px 0px", // Trigger animation 100px before element is visible
      once: true, // Animation triggers only once
    };

    const config = { ...defaultOptions, ...options };

    // Create an observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in view
          if (entry.isIntersecting) {
            // Add the 'visible' class
            entry.target.classList.add("visible");

            // If animation should only occur once, unobserve the element
            if (config.once) {
              observer.unobserve(entry.target);
            }
          } else {
            // If animation can repeat, remove the 'visible' class when out of view
            if (!config.once) {
              entry.target.classList.remove("visible");
            }
          }
        });
      },
      {
        threshold: config.threshold,
        rootMargin: config.rootMargin,
      }
    );

    // Get all elements to animate
    const elements = document.querySelectorAll(selector);

    // Observe each element
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup function
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [selector, options]);
};

/**
 * Custom Hook to add sequential animation delays to elements
 * @param {string} selector - CSS selector for elements to animate
 * @param {number} baseDelay - Base delay in seconds
 * @param {number} increment - Delay increment between elements in seconds
 */
export const useSequentialDelays = (
  selector,
  baseDelay = 0.1,
  increment = 0.1
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el, index) => {
      const delay = baseDelay + index * increment;
      el.style.transitionDelay = `${delay}s`;
    });

    return () => {
      elements.forEach((el) => {
        el.style.transitionDelay = "";
      });
    };
  }, [selector, baseDelay, increment]);
};

export default { useScrollReveal, useSequentialDelays };
