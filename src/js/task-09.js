function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const button = document.querySelector(".change-color");

const spanEl = document.querySelector(".color");

button.addEventListener("click", changeColorOnClick);

function changeColorOnClick() {
  
  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = getRandomHexColor();
}
