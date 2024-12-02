document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the "highlighted" class
    const highlightElements = document.querySelectorAll(".highlighted");
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class to trigger the animation
            entry.target.classList.add("animate");
            // Stop observing the element after animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    // Observe each highlighted element
    highlightElements.forEach((element) => observer.observe(element));
  });
  