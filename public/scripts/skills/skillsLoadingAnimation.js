const skillsSection = document.querySelector("#skills");
const illustratorBox = document.querySelector("#illustrator");
const photoshopBox = document.querySelector("#photoshop");
const indesignBox = document.querySelector("#indesign");
const figmaBox = document.querySelector("#figma");
const htmlBox = document.querySelector("#html");
const cssBox = document.querySelector("#css");
const tailwindBox = document.querySelector("#tailwind");
const javaScriptBox = document.querySelector("#javascript");
const reactBox = document.querySelector("#react");
const title = document.querySelector(".skills-section h2");
const gameboy = document.querySelector(".skills-section__gameboy-container");
const skillsPair = document.querySelectorAll(".skills-pair ");
const subtitles = document.querySelectorAll(
  ".skills-container__subcontainer h3"
);
import { sectionTextFieldAutomation } from "./actionTextField.js";

let cubeArray = [];

// creating cubes for each skill and then position them on mouse click

const createCubesForSection = function (sectionElement, numCubes, cubeClass) {
  const delay = 80;
  setTimeout(() => {
    for (let i = 0; i < numCubes; i++) {
      let cube = document.createElement("div");
      cubeArray.push(cube);
      cube.className = "cube-test " + cubeClass;
      cube.style.left = Math.random() * window.innerWidth + "px";
      cube.style.top = (Math.random() * window.innerHeight) / 2 + "px";
      cube.style.opacity = 0;
      cube.style.zIndex = -1;

      let finalPositionX = Math.random * 1000 + "px";
      let finalPositionY = Math.random * 1000 + "px";

      cube.dataset.finalPositionX = finalPositionX;
      cube.dataset.finalPositionY = finalPositionY;

      sectionElement.appendChild(cube);
      const timeout = 30;

      cubeArray.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
        }, timeout * (index + 1));
      });
      const cubeFall = (target) => {
        return (
          sectionElement.getBoundingClientRect().bottom +
          100 -
          target.getBoundingClientRect().top
        );
      };

      // using gsap to animate cubes

      cubeArray.forEach((cube) => {
        gsap.to(cube, {
          duration: 2,
          y: cubeFall(cube),
          ease: "bounce.out",
        });
      });
    }
  }, 2500);
};

let hasBeenInView = false;

// using intersection observer to trigger the animation and append classes to each cube, making sure animation doesn't trigger again and then giving them new positions

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasBeenInView) {
        createCubesForSection(illustratorBox, 5, "cube-test-illustrator");
        createCubesForSection(photoshopBox, 4, "cube-test-photoshop");
        createCubesForSection(indesignBox, 4, "cube-test-indesign");
        createCubesForSection(figmaBox, 5, "cube-test-figma");
        createCubesForSection(htmlBox, 6, "cube-test-html");
        createCubesForSection(cssBox, 6, "cube-test-css");
        createCubesForSection(tailwindBox, 4, "cube-test-tailwind");
        createCubesForSection(javaScriptBox, 6, "cube-test-javascript");
        createCubesForSection(reactBox, 5, "cube-test-react");
        setTimeout(() => {
          sectionTextFieldAutomation();
        }, 5000);
        hasBeenInView = true;
      }
      if (entry.isIntersecting) {
        title.classList.add("title-loaded");
        setTimeout(() => {
          gameboy.classList.add("gameboy-loaded");
        }, 100);

        const timeout = 100;

        const animateSkillsPair = new Promise((resolve) => {
          setTimeout(() => {
            skillsPair.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("skills-pair-loaded");
              }, timeout * (index + 1));
            });
            resolve();
          }, 200);
        });

        animateSkillsPair.then(() => {
          setTimeout(() => {
            subtitles.forEach((subtitle) => {
              subtitle.classList.add("subtitles-loaded");
            });
          }, 1000);
        });
      } else {
        title.classList.remove("title-loaded");
        gameboy.classList.remove("gameboy-loaded");
        skillsPair.forEach((item) => {
          item.classList.remove("skills-pair-loaded");
        });
        subtitles.forEach((subtitle) => {
          subtitle.classList.remove("subtitles-loaded");
        });
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(skillsSection);
