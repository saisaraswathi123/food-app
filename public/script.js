// Fetch categories from backend
fetch('/api/categories')
  .then(res => res.json())
  .then(categories => {
    const list = document.getElementById('categories');
    categories.forEach(cat => {
      const li = document.createElement('li');
      li.textContent = cat.name;
      li.style.cursor = 'pointer';
      li.onclick = () => fetchFoodsByCategory(cat._id);
      list.appendChild(li);
    });
  });

function fetchFoodsByCategory(categoryId) {
  fetch(`/api/foods/by-category/${categoryId}`)
    .then(res => res.json())
    .then(foods => {
      const div = document.getElementById('foods');
      div.innerHTML = '';
      foods.forEach(food => {
        const item = document.createElement('div');
        item.innerHTML = `<strong>${food.name}</strong> - ₹${food.price}<br/><br/>`;
        div.appendChild(item);
      });
    });
}
