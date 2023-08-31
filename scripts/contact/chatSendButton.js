const sendButton = document.querySelector(".chatbot__send-button");
const chatContainer = document.querySelector(".chatbot__messages");
const chatInput = document.querySelector(".chatbot__input-field textarea");
const textfieldCount = document.getElementById("chatbot__numbers");

// defining enter as send option too

chatInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendButton.click();
  }
});

// sending user input to the chatbot and fetching answer

const askQuestion = (question) => {
  fetch(`http://localhost:3000/ask?q=${question}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayAnswer(data);
    })
    .catch((error) => console.log(error));
};

//displaying answer of chatbot in the chat field

function displayAnswer(answer) {
  let chatAnswer = document.createElement("div");
  chatAnswer.classList.add("chatbot_message-container");
  chatAnswer.innerHTML = `<svg width="33" height="42" viewBox="0 0 33 42"
  fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.28894" y="9.91333" width="30.9111"
        height="30.9111" stroke="#F9E32C" />
  <path d="M7.02148 9.41333L7.02148 0.936941"
        stroke="#F9E32C" />
  <line x1="24.2222" y1="9.41333" x2="24.2222"
        y2="0.936941" stroke="#F9E32C" />
  <circle cx="9.76394" cy="20.3828" r="4.98611"
        stroke="#F9E32C" />
  <circle cx="23.2263" cy="20.3828" r="4.98611"
        stroke="#F9E32C" />
  <rect x="6.27356" y="29.8564" width="20.4431"
        height="5.48472" fill="#F9E32C" />
  <circle cx="8.268" cy="19.8843" r="1.99444"
        fill="#F9E32C" />
  <circle cx="24.7222" cy="19.8843" r="1.99444"
        fill="#F9E32C" />
</svg> <p class="chatbot_message">${answer}</p>`;
  chatContainer.appendChild(chatAnswer);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// changing placeholder text after first click, defining variable for first click

let firstClick = 0;

// adding user input to the UI/chat field & changing the placeholder based on how many messages have been sent

sendButton.addEventListener("click", () => {
  if (chatInput.value) {
    let textMessage = document.createElement("div");
    textMessage.classList.add("user_message-container");
    textMessage.innerHTML = `<h5>You</h5> <p class="user_message">${chatInput.value}</p>`;
    chatContainer.appendChild(textMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    askQuestion(chatInput.value);

    chatInput.value = "";
    textfieldCount.innerHTML = "0/250";
    firstClick += 1;
  } else {
    alert("Please, write something.");
  }

  if (firstClick > 0) {
    chatInput.placeholder = "keep on asking...";
  }
  if (firstClick > 4) {
    chatInput.placeholder = "there's a lot more to know about me!";
  }
  if (firstClick > 10) {
    chatInput.placeholder = "you seem interested, that's cool!";
  }
  if (firstClick > 30) {
    chatInput.placeholder = "you're still here? that's awesome!";
  }
});
