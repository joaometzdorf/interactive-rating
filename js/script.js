const form = document.querySelector("[data-form]");
const numberButtons = document.querySelectorAll(".form__input");

let selectedValue = null;

const storageNumber = JSON.parse(localStorage.getItem("number")) || [];

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedValue = btn.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const res = { rating: selectedValue };

  window.location.href = "./thankyou.html";
  storageNumber.push(res);
  localStorage.setItem("number", JSON.stringify(storageNumber));
});
