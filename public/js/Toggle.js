const bar = document.querySelector("#bar");
const navBar = document.querySelector("#navbar");
const categories = document.querySelector("#categories");
const author = document.querySelector("#author");
const cateInput = document.querySelector("#cateInput");
const authorInput = document.querySelector("#authorInput");

function handleNav() {
    if (navBar.classList.contains("hidden")) {
        navBar.classList.remove("hidden");
    } else {
        navBar.classList.add("hidden")
    }
}

function handleCategories() {
    if (cateInput.classList.contains("hidden")) {
        cateInput.classList.remove("hidden");
    } else {
        cateInput.classList.add("hidden");
    }
}

function handleAuthor() {
    if (authorInput.classList.contains("hidden")) {
        authorInput.classList.remove("hidden");
    } else {
        authorInput.classList.add("hidden");
    }
}

bar.addEventListener("click",handleNav);
categories.addEventListener("click",handleCategories);
author.addEventListener("click",handleAuthor);