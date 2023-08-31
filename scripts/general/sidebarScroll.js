const sections = document.querySelectorAll(".main-section");
const sectionIndicator = document.querySelectorAll(".list-object");
const currentSection = document.querySelector("#current-section");

// defining config object for each section to be called in the observer

const config = {
  about: () => {
    sectionIndicator[0].style.backgroundColor = "#31ABFD";
    sectionIndicator[1].style.backgroundColor = "transparent";
  },
  projects: () => {
    sectionIndicator.forEach((indicator) => {
      indicator.style.borderColor = "black";
    });
    currentSection.style.color = "black";
    sectionIndicator[0].style.backgroundColor = "transparent";
    sectionIndicator[1].style.backgroundColor = "#FC1616";
    sectionIndicator[2].style.backgroundColor = "transparent";
  },
  skills: () => {
    sectionIndicator.forEach((indicator) => {
      indicator.style.borderColor = "#FAF126";
    });
    currentSection.style.color = "#FAF126";
    sectionIndicator[1].style.backgroundColor = "transparent";
    sectionIndicator[2].style.backgroundColor = "#FAF126";
    sectionIndicator[3].style.backgroundColor = "transparent";
  },
  contact: () => {
    sectionIndicator[2].style.backgroundColor = "transparent";
    sectionIndicator[3].style.backgroundColor = "#FAF126";
  },
};

// intersection observer for changes

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        currentSection.innerHTML = sectionId.toUpperCase();
        history.pushState({}, "", `#${sectionId}`);

        if (config[sectionId]) {
          config[sectionId]();
        }
      }
    });
  },
  { threshold: 0.7 }
);

sections.forEach((section) => observer.observe(section));
