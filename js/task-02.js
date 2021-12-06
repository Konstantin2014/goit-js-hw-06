const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const ingredient = ingredients.map(name => {
  console.log(name);
  let liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = name;

  return liEl;
});
ingredientsEl.append(...ingredient);
