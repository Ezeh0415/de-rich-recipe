const homes = document.querySelectorAll(".home");
const recipes = document.querySelectorAll(".recipes");
const aboutUs = document.querySelectorAll(".about-us");
const addRecipe = document.querySelectorAll(".add-recipe");


    homes.forEach(home => {
      home.href = "index.html";
    });

recipes.forEach(recipe => {
    recipe.href = "recipes.html";
});

aboutUs.forEach(about => {
    about.href = "aboutUs.html";
});

addRecipe.forEach(addRecipe => {
    addRecipe.href = "add-recipe.html";
});