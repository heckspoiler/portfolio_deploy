const overlayBackground = document.querySelector(".phone-overlay");
const overlayText = document.querySelector(".overlay-title");
const colors = ["#A4FFDE", "#FFEA29", "#A4FFDE", "#711EF8", "#F46265"];
const textColors = ["#711EF8", "black", "#711EF8", "#FFEA29", "#FFEA29"];

const text = overlayText.textContent.split("");
console.log(text);
overlayText.innerHTML = "";
let spanArray = [];

text.forEach((letter) => {
  const span = document.createElement("span");
  span.className = "letter";
  span.textContent = letter;
  spanArray.push(span);
  overlayText.appendChild(span);
});

function revealSpans() {
  for (let i = 0; i < spanArray.length; i++) {
    let { left, top } = spanArray[i].getBoundingClientRect();
    top = top - window.innerHeight * 0.6;

    let opacityValue = 1;
    if (top >= 0) {
      opacityValue =
        1 - (top * 0.01 + left * 0.001) < 0.1
          ? 0.1
          : 1 - (top * 0.01 + left * 0.001);
      opacityValue = opacityValue > 1 ? 1 : opacityValue;
    }

    spanArray[i].style.opacity = opacityValue;
  }
}

window.addEventListener("load", function () {
  overlayText.style.opacity = 1;
  for (let i = 0; i < spanArray.length; i++) {
    if (i < 80) {
      spanArray[i].style.opacity = 1;
    } else {
      spanArray[i].style.opacity = 0.1;
    }
  }
});

window.addEventListener("scroll", function () {
  revealSpans();
  let scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  if (scrolled < 0.2) {
    overlayBackground.style.backgroundColor = colors[0];
    overlayText.style.color = textColors[0];
  } else if (scrolled < 0.4) {
    overlayBackground.style.backgroundColor = colors[1];
    overlayText.style.color = textColors[1];
  } else if (scrolled < 0.6) {
    overlayBackground.style.backgroundColor = colors[2];
    overlayText.style.color = textColors[2];
  } else if (scrolled < 0.8) {
    overlayBackground.style.backgroundColor = colors[3];
    overlayText.style.color = textColors[3];
  } else {
    overlayBackground.style.backgroundColor = colors[4];
    overlayText.style.color = textColors[4];
  }
});
