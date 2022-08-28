const loadFood = (name) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json())
    .then((data) => showFood(data.meals));
};

const showFood = (foods) => {
  const foodContainer = document.getElementById("food-container");
  foodContainer.innerHTML = "";
  foods.forEach((food) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
        <div class="card">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0, 250)}</p>
            </div>
      </div>
        `;
    foodContainer.appendChild(div);
  });
};

const search = () => {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  loadFood(inputValue);
  inputField.value = "";
};
