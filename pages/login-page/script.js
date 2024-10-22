
const form = document.querySelector('form');
const loginLink = document.getElementById('loginLink');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (usernameInput && passwordInput) {
     
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('password', passwordInput.value);

        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();


  setTimeout(function () {
    window.location.href = 'http://127.0.0.1:5500/Organio-Abdul-Saboor-Solangi/index.html';
  }, 2000);
} else {
        alert('Please enter both username and password!');
    }
});


