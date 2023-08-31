const paragraphContainer = document.querySelectorAll(
  ".landing-section-para-container"
);
const landingSection = document.querySelector(".landing-section");
const header = document.querySelector("header");
const body = document.querySelector("body");
const eyes = document.querySelectorAll(".eyes");
const heart = document.querySelector(".landing-heart");
const clickMe = document.querySelector(".click-me-h2");
const clickMeTitle = document.querySelector(".click-me-h2 h2");
const aboutSection = document.querySelector(".about-section");
const magnetBlock = document.querySelector(".magnet-block");
const textOne = document.querySelector(".landing-section__animation-text-one");
const showMoreButton = document.querySelector(".landing-button");

// random color changes on hover for paragraph container & display image on hover for paragraph container

const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];

const randomColor = () => {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
};

const changeColor = (container) => {
  const color = randomColor();
  container.style.backgroundColor = color;
};

paragraphContainer.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    const image = container.querySelector(".hidden-image");
    changeColor(container);
    image.style.visibility = "visible";
  });

  container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "transparent";
    const image = container.querySelector(".hidden-image");
    image.style.visibility = "hidden";
  });
});

// if landing section is in viewport, the header shouldn't be visible

const observer = new IntersectionObserver(
  (entires) => {
    const entry = entires[0];
    if (!entry.isIntersecting) {
      header.style.display = "flex";
      body.style.overflow = "auto";
      eyes.forEach((eye) => {
        eye.style.visibility = "visible";
      });
    } else {
      header.style.display = "none";
      body.style.overflow = "hidden";
      eyes.forEach((eye) => {
        eye.style.visibility = "hidden";
      });
    }
  },
  { threshold: 0.05 }
);

observer.observe(landingSection);

showMoreButton.addEventListener("click", () => {
  landingSection.style.transform = "translateY(-100vh)";
  landingSection.style.transition = "transform 1s cubic-bezier(0.5, 0, 0, 1)";
  aboutSection.style.transform = "translateY(0)";
  aboutSection.style.transition =
    "transform 1s cubic-bezier(0.5, 0, 0, 1) 0.1s";
});

let animationHasRun = false;

const startingAnimation = () => {
  if (!animationHasRun) {
    animationHasRun = true;
    clickMe.removeEventListener("mouseenter", startingAnimation);
    clickMe.style.border = "0px solid transparent";
    clickMe.style.marginLeft = "20rem !important";
    clickMeTitle.innerHTML = "That's the way!";
    clickMeTitle.style.color = "#FAF126";
    clickMeTitle.style.textShadow = "2px 2px 1px black";
    clickMeTitle.style.fontSize = "5rem";
    landingSection.style.backgroundColor = "#FAF126";
    animationHasRun = true;
    setTimeout(() => {
      magnetBlock.style.transition = "left 1s cubic-bezier(0.5, 0, 0, 1)";
      magnetBlock.style.left = "-4vw";
    }, 1500);

    setTimeout(() => {
      magnetBlock.style.transition = "left 1s cubic-bezier(0.5, 0, 0, 1)";
      magnetBlock.style.left = "100vw";
      landingSection.style.backgroundColor = "#711EF8";
      textOne.style.transition =
        "left 1s cubic-bezier(0.5, 0, 0, 1), color 1s cubic-bezier(0.5, 0, 0, 1), font-size 1s cubic-bezier(0.5, 0, 0, 1), rotate 1s cubic-bezier(0.5, 0, 0, 1), top 1s cubic-bezier(0.5, 0, 0, 1)";
      textOne.style.fontSize = "1.8rem";
      textOne.style.left = "10vw";
      textOne.style.color = "#FAF126";
      textOne.style.rotate = "0deg";
    }, 2500);

    // setTimeout(() => {
    //   landingSection.style.backgroundColor = "#F46265";
    //   textOne.style.color = "#31ABFD";
    //   clickMeTitle.style.color = "#31ABFD";
    // }, 4500);

    setTimeout(() => {
      textOne.style.top = "calc(10rem + 20vh)";
      textOne.style.fontSize = "0rem";
      clickMeTitle.style.scale = "0";
    }, 5000);

    setTimeout(() => {
      landingSection.style.backgroundColor = "#F46265";
      textOne.style.color = "#31ABFD";
      clickMeTitle.style.color = "#31ABFD";
      textOne.innerHTML = `I hope <span class="animation"><div class="first"><div>you enjoy my portfolio!<div></div><div class="second"><div>you're doing great!</div></div><span>`;
      textOne.style.top = "calc(10rem + 20vh)";
      textOne.style.left = "0vw";
      textOne.style.fontSize = "3.4rem";
      clickMeTitle.style.scale = "0";
    }, 6200);

    setTimeout(() => {
      textOne.style.color = "#FAF126";
      landingSection.style.backgroundColor = "#F46265";
    }, 8200);

    setTimeout(() => {
      textOne.style.transition =
        "webkit-text-stroke 1s cubic-bezier(0.5, 0, 0, 1), color 1s cubic-bezier(0.5, 0, 0, 1), text-shadow 1s cubic-bezier(0.5, 0, 0, 1)";
      textOne.style.color = "#F46265";
      landingSection.style.backgroundColor = "#F46265";
      textOne.style.textShadow = "0px 0px 0px #F46265";
      clickMeTitle.style.scale = "0";
    }, 11000);

    setTimeout(() => {
      textOne.style.WebkitTextStroke = "0px";
      showMoreButton.style.display = "block";
    }, 11500);

    setTimeout(() => {
      showMoreButton.style.transition = "all 1s cubic-bezier(0.5, 0, 0, 1)";
      showMoreButton.style.border = "3px solid black";
    }, 12000);

    setTimeout(() => {
      showMoreButton.style.backgroundColor = "#F46265";
      textOne.style.top = "calc(4rem + 10vh)";
      textOne.style.fontSize = "8rem !important";
      textOne.innerHTML = "You may enter now!";
    }, 12200);

    setTimeout(() => {
      showMoreButton.style.marginLeft = "-35px";
      showMoreButton.style.marginTop = "-10px";
      showMoreButton.style.boxShadow = "10px 10px 1px black";
      showMoreButton.style.color = "black";
      landingSection.style.backgroundColor = "#FAF126";
      showMoreButton.style.backgroundColor = "#FAF126";
      textOne.style.color = "black";
    }, 13100);
  }
};

clickMe.addEventListener("mouseenter", startingAnimation);
