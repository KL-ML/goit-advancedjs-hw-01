const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

populateInputData();

form.addEventListener('input', setInputDataToLocalStorage);
form.addEventListener('submit', onSubmitForm);

function setInputDataToLocalStorage(event) {
  const {
    elements: { email, message },
  } = event.target.form;
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  if (
    formData.email !== '' &&
    formData.message !== ''
  ) {
    console.log(formData);
    evt.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  } else {
      alert('Fill please all fields');
  }
  
}

function populateInputData() {
  const inputValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (inputValue) {
    formData.email = inputValue.email;
    formData.message = inputValue.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}
