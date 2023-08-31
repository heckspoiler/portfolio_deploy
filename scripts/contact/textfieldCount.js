const textfieldCount = document.getElementById("chatbot__numbers");

// setting textfield count for messages & updating it while typing (input)

textfieldCount.innerHTML = "0/250";

const chatInput = document.querySelector(".chatbot__input-field textarea");

chatInput.addEventListener("input", () => {
  textfieldCount.innerHTML = `${chatInput.value.length}/250`;
});
