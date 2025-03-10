const logInForm = document.getElementById("logIn-form");
const logInInput = logInForm.querySelector("input");
//const logInButton = logInForm.querySelector("submit");
const content = document.getElementById("result");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onlogInSubmit(e) {
    e.preventDefault();
    logInForm.classList.add(HIDDEN_CLASSNAME);
    const username = logInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Welcome, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the login form
    logInForm.classList.remove(HIDDEN_CLASSNAME);
    logInForm.addEventListener("submit", onlogInSubmit);
} else {
    // show greetings!
    paintGreetings(savedUsername);
}