function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // You can implement your own validation logic here
    if (username === "Arjun" && password === "5233") {
        // Successful login
        errorMessage.innerHTML = "";
        alert("Login successful!");
    } else {
        // Display error message
        errorMessage.innerHTML = "Invalid username or password";
    }
}
