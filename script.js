const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (e) {
  let isValid = true;
  emailError.textContent = '';
  passwordError.textContent = '';

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue) {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  }

  if (!passwordValue) {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});
