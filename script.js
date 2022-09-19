"strict mode";

// enabling functionality password visibility, upper functionality
const button = document.querySelector("#btn");
const invisible = document.querySelector(".invisible");
const visible = document.querySelector(".visible");
const inputField = document.querySelector("input");

button.addEventListener("click", () => {
  invisible.classList.toggle("hidden");
  visible.classList.toggle("hidden");

  if (inputField.type === "password") {
    inputField.type = "text";
  } else if (inputField.type === "text") {
    inputField.type = "password";
  }
});

// enabling password checking, lower functionality
const upperCase = document.getElementById("upper");
const lowerCase = document.getElementById("lower");
const numberCase = document.getElementById("number");
const symbolCase = document.getElementById("symbol");
const numCharCase = document.getElementById("numChar");

const checkPassword = input => {
  const upper = new RegExp("(?=.*[A-Z])");
  const lower = new RegExp("(?=.*[a-z])");
  const number = new RegExp("(?=.*[0-9])");
  const symbol = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");
  document.getElementById("copy-icon").style.stroke = "#343a40";

  //   test uppercase
  if (upper.test(input)) {
    upperCase.classList.add("gucci");
  } else {
    upperCase.classList.remove("gucci");
  }
  //   test lowercase
  if (lower.test(input)) {
    lowerCase.classList.add("gucci");
  } else {
    lowerCase.classList.remove("gucci");
  }

  //   test numbers
  if (number.test(input)) {
    numberCase.classList.add("gucci");
  } else {
    numberCase.classList.remove("gucci");
  }

  //   test symbol
  if (symbol.test(input)) {
    symbolCase.classList.add("gucci");
  } else {
    symbolCase.classList.remove("gucci");
  }

  //   test length
  if (length.test(input)) {
    numCharCase.classList.add("gucci");
  } else {
    numCharCase.classList.remove("gucci");
  }

  //   enable copy if tests passed
  if (
    upper.test(input) &&
    lower.test(input) &&
    number.test(input) &&
    symbol.test(input) &&
    length.test(input)
  ) {
    document.getElementById("copy").classList.remove("hidden");
  } else {
    document.getElementById("copy").classList.add("hidden");
  }
  document.getElementById("copy").addEventListener("click", () => {
    navigator.clipboard.writeText(input);
    document.getElementById("copy-icon").style.stroke = "green";
  });
};
