const cursor = document.querySelector(".cursor");

//changing cursor position & heart color on hover

const moveCursor = (e) => {
  const offsetTop = 10;
  const offsetLeft = 10;

  const mouseY = e.clientY - offsetTop;
  const mouseX = e.clientX - offsetLeft;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

//changing cursor size and shape by element hovered

const growCursor = () => {
  cursor.style.width = "22px";
  cursor.style.height = "22px";
};

const resetCursor = () => {
  cursor.style.width = "10px";
  cursor.style.height = "10px";
  cursor.style.borderRadius = "50%";
};

const imagesAndLinks = document.querySelectorAll(
  "img, a, button, .projects-github, .contact-cross, .arrow-container"
);

imagesAndLinks.forEach((element) => {
  element.addEventListener("mouseenter", growCursor);
  element.addEventListener("mouseleave", resetCursor);
});

const textfieldsAndInputs = document.querySelectorAll("input, textarea");

const changeCursor = () => {
  cursor.style.width = "2px";
  cursor.style.height = "22px";
  cursor.style.borderRadius = "0";
};

textfieldsAndInputs.forEach((element) => {
  element.addEventListener("mouseenter", changeCursor);
  element.addEventListener("mouseleave", resetCursor);
});

window.addEventListener("mousemove", moveCursor);

console.log(window.innerHeight, window.innerWidth);
