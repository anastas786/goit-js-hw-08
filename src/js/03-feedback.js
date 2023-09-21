import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('form.feedback-form input[name="email"]');
const messageInput = document.querySelector('form.feedback-form textarea[name="message"]');
const formStateKey = 'feedback-form-state';

function loadFormState() {
    const savedState = localStorage.getItem(formStateKey);
    if (savedState) {
        const parsedState = JSON.parse(savedState);
        emailInput.value = parsedState.email;
        messageInput.value = parsedState.message;
    }
}

function saveFormState() {
    const formState = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem(formStateKey, JSON.stringify(formState));
}

feedbackForm.addEventListener('input', throttle(saveFormState, 500));

function clearFormState() {
    localStorage.removeItem(formStateKey);
}

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Будь ласка, заповніть всі поля форми перед відправленням.');
        return;
    }

    const formData = {
        email: emailInput.value,
        message: messageInput.value
    };

    console.log('Поточне значення форми: ', formData);

    clearFormState();

    emailInput.value = '';
    messageInput.value = '';
});


loadFormState();


