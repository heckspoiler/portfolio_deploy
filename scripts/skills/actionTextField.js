const skillsSection = document.querySelector("#skills-section");

const actionTextField = document.querySelector(
  ".skills-section__click-me-field"
);

const fieldParagraph = document.querySelector(
  ".skills-section__click-me-field p"
);

const buttons = document.querySelectorAll(".button-ab");

// changing innerHTML of actionTextField to guide user towards button

export const sectionTextFieldAutomation = () => {
  actionTextField.style.opacity = 1;
  setTimeout(() => {
    fieldParagraph.innerHTML = "I think this could be solved...";
  }, 3000);

  setTimeout(() => {
    fieldParagraph.innerHTML = `by clicking A or B on the carlo boy<sup class="power-text">tm</sup>!`;
  }, 5500);
};

// removing field after clicking ab-button

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    fieldParagraph.innerHTML = "Thanks for helping out!";

    setTimeout(() => {
      actionTextField.style.opacity = 0;
    }, 2500);
  });
});
