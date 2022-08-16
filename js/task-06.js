const input = document.querySelector("input");
console.log(input);

const validInput = document.querySelector("#validation-input")

input.addEventListener("blur", checkInput);

function checkInput() {
  const validValue = Number(input.dataset.length);
  const enteredInput = input.value.length;

  if (enteredInput === validValue) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
}
}

