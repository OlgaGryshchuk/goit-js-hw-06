const categoriesList = document.querySelector("#categories");
const items = categoriesList.children;
console.log(`Numbers of categories: ${items.length}`);
[...items].forEach((element) => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});