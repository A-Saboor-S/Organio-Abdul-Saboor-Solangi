document.getElementById('accountForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;


  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }


  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);


  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();


  setTimeout(function () {
    window.location.href = '../login-page/login.html';
  }, 2000);
});
