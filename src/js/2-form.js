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
        if (!formData.email || !formData.message) {
            alert('Fill please all fields');
        } else {
            console.log(formData);
            localStorage.removeItem('feedback-form-state');
            formData = { email: "", message: ""};
            form.reset();
        }
    });