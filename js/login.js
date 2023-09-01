const form = document.querySelector(".form");
const boxes = document.querySelectorAll(".form-group");
const inputs = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".label");
const loginBtn = document.querySelector(".login-btn");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!email.value) {
    email.parentElement.classList.add("input-error");
    emailLabel.classList.add("label-error");
  }
  if (!password.value) {
    password.parentElement.classList.add("input-error");
    passwordLabel.classList.add("label-error");
  } else {
    window.location.href = "./pages/empty.html";
  }
});

inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    input.parentElement.classList.remove("input-error");
    labels.forEach((label) => {
      label.classList.remove("label-error");
    });
  });
});
