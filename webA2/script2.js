document.getElementById("signup-form").addEventListener("submit", function(event)
 {
    event.preventDefault(); // Prevent form submission

    let fullname = document.getElementById("fullname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let valid = true;

    if (fullname === "") {
        showError("fullname", "Full name cannot be empty.");
        valid = false;
    } else {
        showError("fullname", "");
    }
    if (username === "") 
    {
        showError("username", "Username cannot be empty.");
        valid = false;
    } 
    else 
    {
        showError("username", "");
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") 
    {
        showError("email", "Email cannot be empty.");
        valid = false;
    } 
    else if (!emailRegex.test(email)) 
    {
        showError("email", "Enter a valid email.");
        valid = false;
    }
     else
    {
        showError("email", "");
    }

    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    if (password === "")
     {
        showError("password", "Password cannot be empty.");
        valid = false;
    } 
    else if (!passwordRegex.test(password)) 
    {
        showError("password", "Password must contain at least one number,six letters and  one special character.");
        valid = false;
    } 
    else
    {
        showError("password", "");
    }

    if (confirmPassword !== password) 
        {
        showError("confirm-password", "Passwords do not match.");
        valid = false;
    } else {
        showError("confirm-password", "");
    }

    let phoneRegex = /^[0-9]{11}$/;
    if (phone === "") {
        showError("phone", "Phone number cannot be empty.");
        valid = false;
    } else if (!phoneRegex.test(phone)) 
        {
        showError("phone", "Enter a valid 11-digit phone number.");
        valid = false;
    } else {
        showError("phone", "");
    }
    if (age === "") 
        {
        showError("age", "Age cannot be empty.");
        valid = false;
    } else if (age<=0) 
        {
        showError("age", "Age should be greater than 0");
        valid = false;
    } else {
        showError("age", "");
    }
    if (gender === "") 
        {
        showError("gender", "Please select your gender.");
        valid = false;
    } else 
    {
        showError("gender", "");
    }

    if (valid) {
        alert("Successfully Signed Up !");
        document.getElementById("signup-form").reset(); 
    }
});

function showError(inputId, message) 
{
    document.getElementById(inputId).nextElementSibling.textContent = message;
}
