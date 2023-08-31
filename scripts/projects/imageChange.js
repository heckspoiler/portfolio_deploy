import projectsArray from "./projectsArray.js";
const projectsPreview = document.querySelector(".projects__project-preview");
const projectLinks = document.querySelectorAll(
  ".projects_subsection-left-listobject a"
);
const previewAnchor = document.querySelector(".projects__project-preview a");
const links = document.querySelectorAll(".link-active");

// add image to project preview by clicking the link

let videoElement = null;
let projectsImage = projectsPreview.querySelector("img");

projectLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", (e) => {
    // Remove any existing video element if present
    if (videoElement) {
      videoElement.remove();
      videoElement = null;
    }

    projectsPreview.style.backgroundImage = "none";
    const dataProject = e.currentTarget.dataset.project;

    if (!projectsImage) {
      // if img does not exist, create it
      projectsImage = document.createElement("img");
      projectsImage.className = "project-image";
      previewAnchor.appendChild(projectsImage);
    }

    projectsImage.setAttribute(
      "src",
      `./assets/images/projects/testimages/${dataProject}.png`
    );
    projectsImage.setAttribute("alt", `Image of Project ${dataProject}`);
  });
});

// add video element to project preview by entering the image

projectsPreview.addEventListener("mouseenter", (e) => {
  // add video element if it doesn't exist
  projectsArray.forEach((project) => {
    if (projectsImage.alt === `Image of Project ${project.alt}`) {
      if (!videoElement) {
        videoElement = document.createElement("video");
        videoElement.className = "project-video";
        videoElement.src = `./assets/images/projects/testvideos/${project.alt}.mp4`;
        videoElement.alt = `Video of Project ${project.alt}`;
        videoElement.preload = "metadata";
        videoElement.autoplay = true;
        videoElement.loop = true;

        previewAnchor.appendChild(videoElement);
        previewAnchor.href = project.link;
        setTimeout(() => {
          videoElement.style.opacity = 1;
        }, 200);
      }
    }
  });
});

// Remove video element on mouseleave

projectsPreview.addEventListener("mouseleave", (e) => {
  if (videoElement) {
    videoElement.remove();
    videoElement = null;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        // Remove any existing video element if present
        if (videoElement) {
          videoElement.remove();
          videoElement = null;
        }
        if (projectsImage) {
          projectsImage.remove();
          projectsImage = null;
        }
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(projectsPreview);
