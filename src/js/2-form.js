// console.log("Form");

let formData = {
    email: "",
    message: ""
};

    const form = document.querySelector(".feedback-form");

    function saveLocalStorage() {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }

    function loadLocalStorage() {
        const saveData = localStorage.getItem('feedback-form-state');
        if (saveData) {
            formData = JSON.parse(saveData);
            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;
        }
    }

    form.addEventListener('input', function(event) {
        formData[event.target.name] = event.target.value;
        saveLocalStorage();
    });

    document.addEventListener('DOMContentLoaded', function(event) {
        loadLocalStorage();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!formData.email.trim() || !formData.message.trim()) {
            alert('Fill please all fields');
        } else {
            console.log(formData);
            localStorage.removeItem('feedback-form-state');
            formData = { email: "", message: ""};
            form.reset();
        }
    });


    // Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку Login на Logout і роби поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити Logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці Logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку "Wrong email or password!".


const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};
 
const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('.login-btn');
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');

loginForm.addEventListener('submit', login);

function login(event) {
    event.preventDefault();
    const {email, password} = event.target.elements;
    if (loginBtn.textContent === 'Logout') {
        loginForm.reset();
        localStorage.removeItem('login-form');
        email.removeAttribute('readonly');
        password.removeAttribute('readonly');
        loginBtn.textContent = 'Login';
        return
    }
    // console.log(event.target.elements);
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue === '' || passwordValue === '') {
        alert('Fill all fields');
        return
    }
    if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
        alert('Wrong email or password!');
        return
    }
    localStorage.setItem('login-form', JSON.stringify({email: emailValue, password: passwordValue}));
    loginBtn.textContent = 'Logout';
    email.setAttribute('readonly', true);
    password.setAttribute('readonly', true);
}

fromLS();

function fromLS() {
    const savedData = localStorage.getItem('login-form');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        emailInput.value = parsedData.email ?? '';
        passwordInput.value = parsedData.password ?? '';
        loginBtn.textContent = 'Logout';
    email.setAttribute('readonly', true);
    password.setAttribute('readonly', true);
    }
}

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const checkbox = document.querySelector('.switcher-toggle');
checkbox.addEventListener('change', changeTheme);
function changeTheme(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
        document.body.classList.add('dark');
        localStorage.setItem("theme", 'dark');
        document.body.classList.remove('light');
    } else { document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem("theme", 'light');
    }
}

if (localStorage.getItem("theme") === 'dark') {
    console.log('dark');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    checkbox.checked = true;
}