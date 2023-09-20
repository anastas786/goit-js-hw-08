import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('form.feedback-form input[name="email"]');
const messageInput = document.querySelector('form.feedback-form textarea[name="message"]');



const saveFormStateThrottled = throttle(function () {
    const formState = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);


feedbackForm.addEventListener('input', saveFormStateThrottled);

function clearFormState() {
    localStorage.removeItem('feedback-form-state');
}

feedbackForm.addEventListener('input', saveFormStateThrottled);


feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value
    };
    console.log('Текущее значение формы: ', formData);

    clearFormState();

    emailInput.value = '';
    messageInput.value = '';
});


