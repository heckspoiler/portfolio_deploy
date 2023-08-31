const projectsSection = document.querySelector("#projects");
const title = document.querySelector("#projects h2");
const listItems = document.querySelectorAll(
  ".projects_subsection-left-listobject"
);
const projectsPreview = document.querySelector(".projects__project-preview");

// observe projectsSection to add animations when visible, loading animations project sections

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add("title-loaded");

        const timeout = 100;
        setTimeout(() => {
          listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("list-item-loaded");
            }, timeout * (index + 1));
          });
        }, 200);
        setTimeout(() => {
          projectsPreview.classList.add("projects-preview-loaded");
        }, 800);
      } else {
        title.classList.remove("title-loaded");
        listItems.forEach((item) => {
          item.classList.remove("list-item-loaded");
          projectsPreview.style.backgroundImage = `url("./assets/images/projects/projects-placeholder.png")`;
        });
        projectsPreview.classList.remove("projects-preview-loaded");
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(projectsSection);
