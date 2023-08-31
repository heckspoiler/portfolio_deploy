const contactSectionHide = document.querySelectorAll(
  "footer, .contact-section__main-title, .contact-section__main-section"
);
const buttonForm = document.querySelector(".contact-button");
const form = document.querySelector(".contact-section__contact-form");
const buttonFormClose = document.querySelector(".form_cross");
const buttonChat = document.querySelector(".charlybot-button");
const buttonChatClose = document.querySelector(".chatbot__cross");
const chatbot = document.querySelector(".contact-section__chatbot-container");
const charlybotContainer = document.querySelector(".charlybot_container");
const timeout = 2000;

// showing form after clicking contact button, changing innerHTML of contact button

buttonForm.addEventListener("click", () => {
  buttonForm.innerHTML = "<h3>sharpening the pencil...</h3";
  buttonForm.classList.add("button-resize");
  setTimeout(() => {
    form.classList.add("form-visible");
  }, timeout);
});

buttonFormClose.addEventListener("click", () => {
  form.classList.remove("form-visible");
  buttonForm.innerHTML = "<h3>maybe another time!</h3>";
  buttonForm.classList.remove("button-resize");
  setTimeout(() => {
    buttonForm.innerHTML = "drop me a line!";
  }, timeout);
});

// same for chatbot button

buttonChat.addEventListener("click", () => {
  buttonChat.innerHTML = "<h3>initializing...</h3";
  buttonChat.classList.add("button-resize");
  setTimeout(() => {
    chatbot.classList.add("form-visible");
  }, timeout);
});

buttonChatClose.addEventListener("click", () => {
  chatbot.classList.remove("form-visible");
  buttonChat.innerHTML = "<h3>resetting...</h3>";
  // charlybotContainer.classList.remove("charlybot_container-resize");
  buttonChat.classList.remove("button-resize");
  setTimeout(() => {
    buttonChat.innerHTML = "find out more about me!";
  }, timeout);
});
