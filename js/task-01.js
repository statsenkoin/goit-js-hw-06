const categoriesList = document.querySelector('#categories').children;
console.log('Number of categories: ', categoriesList.length);

for (const item of categoriesList) {
  const categoryItemTitle = item.querySelector('h2').textContent;
  console.log('Category: ', categoryItemTitle);

  const categoryItemAmount = item.querySelector('ul').children.length;
  console.log('Elements: ', categoryItemAmount);
}
