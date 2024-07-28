const home = document.querySelectorAll(".home");
const recipes = document.querySelectorAll(".recipes");
const aboutUs = document.querySelectorAll(".about-us");




home.forEach(home => {
    home.href = "index.html";
});

recipes.forEach(recipe => {
    recipe.href = "recipes.html";
});

aboutUs.forEach(about => {
    about.href = "aboutUs.html";
});