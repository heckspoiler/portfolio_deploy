const skillsSection = document.querySelector("#skills");
const buttons = document.querySelectorAll(".button-ab");

const skills = {
  illustrator: [],
  photoshop: [],
  indesign: [],
  figma: [],
  html: [],
  css: [],
  tailwind: [],
  javascript: [],
  react: [],
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    Object.keys(skills).forEach((skill) => (skills[skill] = []));

    const cubes = skillsSection.querySelectorAll(".cube-test");
    cubes.forEach((cube) => {
      Object.keys(skills).forEach((skill) => {
        if (cube.classList.contains(`cube-test-${skill}`)) {
          skills[skill].push(cube);
        }
      });
    });

    Object.keys(skills).forEach((skillKey) => {
      let skillArray = skills[skillKey];
      skillArray.forEach((cube, index) => {
        let delay = index * 0.3;
        setTimeout(() => {
          let topCorrection = 9;
          let topPosition = (topCorrection - index) * 10 + "%";
          cube.style.transform = "translate(0, 0)";
          cube.style.transition =
            "opacity 0.7s cubic-bezier(0.53, 1, 0.720, 1), left 2s cubic-bezier(0.45, 0.05, 0.85, 0.95), top 2s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 2s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
          cube.style.width = "100%";
          cube.style.height = "10%";
          cube.style.left = 0;
          cube.style.top = topPosition;
          cube.style.marginTop = 0;
        }, delay * 1000);
      });
    });
  });
});
