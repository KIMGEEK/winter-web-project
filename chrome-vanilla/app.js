const logInForm = document.getElementById("logIn-form");
const logInInput = logInForm.querySelector("input");
//const logInButton = logInForm.querySelector("submit");
const content = document.getElementById("result");
const greeting = document.getElementById("greeting");

const link = document.querySelector("a");

function onlogInSubmit(e) {
    e.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add("hidden");
    console.log(username)
    greeting.innerText = "Welcome, " + username + "!";
    greeting.classList.remove("hidden");
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

logInForm.addEventListener("submit", onlogInSubmit);
//link.addEventListener("click", handleLinkClick);