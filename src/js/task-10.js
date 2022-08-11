function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxCollection = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);

function createBoxes() {
  
  const array = [];

  for (let i = 1; i <= inputEl.value; i += 1) {
    
    const box = document.createElement("div");

    box.style.width = `${20 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);

  }
  boxCollection.append(...array);

}

destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxCollection.innerHTML = "";
  inputEl.value = "";
}



