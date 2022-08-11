const input = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

input.addEventListener("input", changeTextSize);

function changeTextSize() {
  const fontSize = input.value;
  textEl.style.fontSize = `${fontSize}px`;
}