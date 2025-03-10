const logInForm = document.getElementById("logIn-form");
const logInInput = logInForm.querySelector("input");
//const logInButton = logInForm.querySelector("submit");
const content = document.getElementById("result");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onlogInSubmit(e) {
    e.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username)
    greeting.innerText = `Welcome, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

logInForm.addEventListener("submit", onlogInSubmit);