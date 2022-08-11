const decrementButton = document.querySelector('[data-action ="decrement"]');
console.log(decrementButton);

const incrementButton = document.querySelector('[data-action ="increment"]');
console.log(incrementButton);

const value = document.querySelector("#value");
console.log(value);

let counterValue = 0;

function changeValue() {
  value.textContent = counterValue;
}

decrementButton.addEventListener("click", clickDecrementButton);

function clickDecrementButton() {
  counterValue -= 1;
  changeValue();
}

incrementButton.addEventListener("click", clickIncrementButton);

function clickIncrementButton() {
  counterValue += 1;
  changeValue();
}