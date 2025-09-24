var a = document.getElementById("btnLog");
var b = document.getElementById("btnRegister");
var c = document.getElementById("login");
var d = document.getElementById("register");

function Login() {
    c.style.left = "4px";
    d.style.right = "520px";
    a.className += " navnar a";
    b.className = "navnar a";
    c.style.opacity = 1;
    d.style.opacity = 0;
}

function Register() {
    c.style.left = "-510px";
    d.style.right = "5px";
    a.className = "navnar a";
    b.className += " navnar a";
    c.style.opacity = 0;
    d.style.opacity = 1;
}