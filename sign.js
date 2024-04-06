function validateRegistration() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("error-message");

    // You can implement your own validation logic here
    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match";
    } else {
        // Successful registration
        errorMessage.innerHTML = "";
        alert("Registration successful!");
        // You can add code to send registration data to the server here
    }
}
