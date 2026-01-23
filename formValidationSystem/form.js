const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');

function isValidName(name) {
    return /^[A-Za-z ]{3,}$/.test(name);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function showError(input, message) {
    const small = input.nextElementSibling;
    small.textContent = message;
    input.classList.add('error-border');
}

function clearError(input) {
    const small = input.nextElementSibling;
    small.textContent = '';
    input.classList.remove('error-border');
}

nameInput.addEventListener('input', () => {
    if (!isValidName(nameInput.value)) {
        showError(nameInput, 'Name must be at least 3 letters');
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener('input', () => {
    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Invalid email format');
    } else {
        clearError(emailInput);
    }
});

passwordInput.addEventListener('input', () => {
    if (!isValidPassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 6 characters');
    } else {
        clearError(passwordInput);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    if (!isValidName(nameInput.value)) {
        showError(nameInput, 'Name must be at least 3 letters');
        valid = false;
    } else {
        clearError(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Invalid email format');
        valid = false;
    } else {
        clearError(emailInput);
    }

    if (!isValidPassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 6 characters');
        valid = false;
    } else {
        clearError(passwordInput);
    }

    if (valid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
