const cursor = document.querySelector('.cursor');
const cursorText = document.querySelector('.cursor-text');

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
  cursor.style.width = '22px';
  cursor.style.height = '22px';
  cursor.style.blur = '2px';
};

const resetCursor = () => {
  cursor.style.width = '10px';
  cursor.style.height = '10px';
  cursor.style.borderRadius = '50%';
  cursor.style.blur = '0px';
};

const imagesAndLinks = document.querySelectorAll(
  'img, a, button, .projects-github, .contact-cross, .arrow-container'
);

const showText = () => {
  cursorText.style.opacity = 1;
};

const hideText = () => {
  cursorText.style.opacity = 0;
};

imagesAndLinks.forEach((element) => {
  element.addEventListener('mouseenter', growCursor);
  element.addEventListener('mouseleave', resetCursor);
});

const textfieldsAndInputs = document.querySelectorAll('input, textarea');

const changeCursor = () => {
  cursor.style.width = '2px';
  cursor.style.height = '22px';
  cursor.style.borderRadius = '0';
};

textfieldsAndInputs.forEach((element) => {
  element.addEventListener('mouseenter', changeCursor);
  element.addEventListener('mouseleave', resetCursor);
});

window.addEventListener('mousemove', moveCursor);

console.log(window.innerHeight, window.innerWidth);
