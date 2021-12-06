const itemsEl = [...document.querySelectorAll('.item')];
console.log('Number of categories:', itemsEl.length);

const allEl = itemsEl
  .map(item => {
    const titleEl = item.querySelector('h2');
    const listEl = item.querySelectorAll('li');
    return { titleEl: titleEl.textContent, listEl: listEl.length };
  })
  .forEach(element => {
    console.log('Category:', element.titleEl, '\r\nElements:', element.listEl);
  });
