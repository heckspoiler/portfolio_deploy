const form = document.querySelector('.contact-section__contact-form');
const formName = document.querySelector('#form_name');
const formEmail = document.querySelector('#form_email');
const formSelect = document.querySelector('#form_select');
const formMessage = document.querySelector('#form_message');
const formCheckbox = document.querySelector('#checkbox');
const formSendButton = document.querySelector('#form_send-button');
const buttonForm = document.querySelector('.contact-button');
const timeout = 2000;

// sending form to backend and then to email

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formObject = {
    name: formName.value,
    email: formEmail.value,
    select: formSelect.value,
    message: formMessage.value,
    checkbox: formCheckbox.checked,
  };

  fetch(`https://www.carlothedom.digital/api/form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(formObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// changing content of button after sending form

formSendButton.addEventListener('click', () => {
  form.classList.remove('form-visible');
  buttonForm.innerHTML = '<h3>licking the stamp...</h3>';
  buttonForm.classList.remove('button-resize');

  setTimeout(() => {
    buttonForm.innerHTML = 'Sent!';
  }, timeout);
  setTimeout(() => {
    buttonForm.innerHTML = 'thanks for reaching out!';
  }, timeout * 2);

  setTimeout(() => {
    buttonForm.innerHTML = 'DROP ME A LINE!';
    formName.value = '';
    formEmail.value = '';
    formMessage.value = '';
    formCheckbox.checked = false;
    formSelect.value = 'select';
  }, timeout * 4);
});
