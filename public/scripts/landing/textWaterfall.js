const sections = document.querySelectorAll(".landing-section, .about-section");

// Check if the entry is intersecting

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let delay = 80;
      const allElements = entry.target.querySelectorAll(
        "h2, h3, h4, p, span, div, a, img, button, svg"
      );

      if (entry.isIntersecting) {
        allElements.forEach((element, index) => {
          element.style.opacity = "0";
          element.style.transform = "translateY(20%)";
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transition =
              "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
            element.style.transform = "translateY(0)";
          }, delay * (index + 1) + 250); // "waterfall" delay by increasing every item by 250ms
        });
      } else {
        allElements.forEach((element) => {
          element.style.opacity = "0";
        });
      }
    });
  },
  { threshold: 0.2 }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));
