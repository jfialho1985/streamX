document.getElementById('login-button').addEventListener('click', function() {
    window.location.href = 'login.html'; // Asegúrate de que exista una página login.html
});

// Elimina la funcionalidad del cartel en el botón de registro
document.getElementById('register-button').addEventListener('click', function() {
    window.location.href = 'register.html';
});
