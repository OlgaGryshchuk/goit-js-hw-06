const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);
const allItems = (ingredientsNewArray) => {
  return ingredientsNewArray.map((element) => {
    const ingredientsNewList = document.createElement("li");

    ingredientsNewList.textContent = element;
    console.log(ingredientsNewList);

    ingredientsNewList.classList.add("item");

    return ingredientsNewList;
})
}
const addIngredients = allItems(ingredients);
ingredientsList.append(...addIngredients); 
console.log(allItems);

