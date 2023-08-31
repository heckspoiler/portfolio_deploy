import(
  "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js"
).then((module) => {
  const VanillaTilt = module.default;
  // Your code here
  console.log("hello from tilt.js");

  VanillaTilt.init(document.querySelector(".click-me-h2"), {
    max: 500,
    speed: 100,
    scale: 2,
    perspective: 500,
  });
});
