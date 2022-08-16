const textInput = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

const defaultValue = "Anonymous";

textInput.addEventListener("input", enterText);
  
function enterText(event) {
if (event.currentTarget.value !== "") {
output.textContent = event.currentTarget.value;
  } else {
output.textContent = defaultValue;
  };
}

  