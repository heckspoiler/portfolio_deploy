const sections = document.querySelectorAll(".main-section");
const eyesColor = document.querySelectorAll(".eyes");
const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

// color change of eyes

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId == "about") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#A4FFDE";
          });
        } else if (sectionId == "projects") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#FFEA29";
          });
        } else if (sectionId == "skills") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#FAF126";
          });
        } else if (sectionId == "contact") {
          eyesColor.forEach((eyecolor) => {
            eyecolor.style.backgroundColor = "#FAF126";
          });
        }
      }
    });
  },

  { threshold: 0.7 }
);

sections.forEach((section) => observer.observe(section));

// iris movement following the cursor

const moveEye = (tag, mouseX, mouseY) => {
  // center of the eye

  const eyeMidX = tag.getBoundingClientRect().left;
  const eyeMidY = tag.getBoundingClientRect().top;

  // find difference between eye and cursor
  const diffX = mouseX - eyeMidX;
  const diffY = mouseY - eyeMidY;

  const angle = Math.atan2(diffY, diffX);

  // capped version, based on the angle

  const cappedX = 8 * Math.cos(angle);
  const cappedY = 10 * Math.sin(angle);

  const eyeTag = tag.querySelector("div");

  eyeTag.style.left = `${cappedX}px`;
  eyeTag.style.top = `${cappedY}px`;
};

document.addEventListener("mousemove", (event) => {
  moveEye(irisLeft, event.pageX, event.pageY);
  moveEye(irisRight, event.pageX, event.pageY);
});
