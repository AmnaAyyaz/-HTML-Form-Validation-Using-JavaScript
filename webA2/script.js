document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let valid = true;

    // Username Validation
    if (username === "") {
        showError("username", "Username cannot be empty.");
        valid = false;
    } else {
        showError("username", "");
    }

    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/;

    if (password === "") 
        {
        showError("password", "Password cannot be empty.");
        valid = false;
    } else if (!passwordRegex.test(password)) {
        showError("password", "Password must be at least 6 characters, contain one number, and one special character.");
        valid = false;
    } else {
        showError("password", "");
    }


    if (valid)
         {
        alert("Successfully Signed In!");
        document.getElementById("signin-form").reset();
    }
});

function showError(inputId, message) {
    document.getElementById(inputId).nextElementSibling.textContent = message;
}
