const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-msg');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple frontend validation
    if(username === "student" && password === "1234") {
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        errorMsg.textContent = "Invalid username or password";
    }
});
