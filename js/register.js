const form = document.querySelector(".form");
const boxes = document.querySelectorAll(".form-group");
const inputs = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".label");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("input-error");
      labels.forEach((label) => {
        label.classList.add("label-error");
      });
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    input.parentElement.classList.remove("input-error");
    labels.forEach((label) => {
      label.classList.remove("label-error");
    });
  });
});
