document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password === '123456') {
        alert('Welcome to my Blog Spot');
        errorMessage.style.display = 'none';
        window.location.href = 'main.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        alert('username: admin \npassword: 123456');
        errorMessage.style.display = 'block';
    }
});
