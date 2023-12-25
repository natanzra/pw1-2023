function Login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //check login
    if (username === "natanzra" && password === "studentnf23") {
        alert("Login Successful!");
        window.location.href = "success.html";
    } else {
        alert("Invalid username or password");
    }
}

function registerForm() {
    alert("Registration successful");
}
