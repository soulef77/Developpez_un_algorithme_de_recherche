
let response;

// Cette fonction permet de récupérer les données js des plats
async function getRecipes() {
    response = await fetch('./data/recipes.js');
    // lire le corps de réponse et analyser en JSON
    let recipes = await response.json();
    // console.log("recepis ", recipes);
    return recipes;
}

let filteredIngredients = [];
let filteredAppareils = [];
let filteredUstensils = [];

function filterRecipes() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("searchField").value;
    let tab = [];

    // filtrage par mot dans le champ de recherche
    if (word.length > 2) {
        word = word.toLowerCase();

        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].name.toLowerCase().indexOf(word) > -1) ||
                (recipes[i].ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipes[i].description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipes[i]);
            }
        }
    }
    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre les recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    for (let i = 0; i < ingredientTags.length; i++) {
        const ingredientTag = ingredientTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredientTag) != undefined);
        });
    }

    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    for (let i = 0; i < appareilTags.length; i++) {
        const appareilTag = appareilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.toLowerCase().indexOf(appareilTag) > -1);
        });
    }

    const ustensilTags = document.getElementById("rectangle_red").children;
    for (let i = 0; i < ustensilTags.length; i++) {

        const ustensilTag = ustensilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensils) => ustensils.toLowerCase() == ustensilTag) != undefined);
        });
    }

    if (tab.length === 0) {
        document.getElementById("recipes-not-found").style.display = "block";

    }
    else {
        document.getElementById("recipes-not-found").style.display = "none";


        // à la fin, "tab" contient les recettes à afficher
        displayData(tab);

        // après avoir affiché la liste des recettes filtrées, on actualise la liste des ingrédients, ustentiles, et appareils
        filteredIngredients = getIngredients(tab);
        fillIngredients(filteredIngredients);
        filteredUstensils = getUstensils(tab);
        fillUstensils(filteredUstensils);
        filteredAppareils = getAppareils(tab);
        fillAppareils(filteredAppareils);
    }
}

// Cette fonction permet de retourner soit le nom de la recette recherchée, soit la liste des ingrédients contenant le mot recherché, soit, 
// la description de la recette contenant le mot recherché.

function filterRecipes2() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInput").value;
    let tab = [];

    // filtrage par mot dans le champ de recherche
    if (word.length > 2) {
        word = word.toLowerCase();

        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].name.toLowerCase().indexOf(word) > -1) ||
                (recipes[i].ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipes[i].description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipes[i]);
            }
        }
    }
    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    for (let i = 0; i < ingredientTags.length; i++) {
        const ingredientTag = ingredientTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredientTag) != undefined);
        });
    }

    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    for (let i = 0; i < appareilTags.length; i++) {
        const appareilTag = appareilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.find((appliance) => appliance.toLowerCase() == appareilTag) != undefined);
        });
    }

    const ustensilTags = document.getElementById("rectangle_red").children;
    for (let i = 0; i < ustensilTags.length; i++) {
        const ustensilTag = ustensilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == ustensilTag) != undefined);
        });
    }


    if (tab.length === 0) {
        document.getElementById("recipes-not-found").style.display = "block";
    }
    else {
        document.getElementById("recipes-not-found").style.display = "none";


        // à la fin, "tab" contient les recettes à afficher
        displayData(tab);

        // après avoir affiché la liste des recettes filtrées, on actualise la liste des ingrédients, ustentiles, et appareils
        fillIngredients(getIngredients(tab));
        fillUstensils(getUstensils(tab));
        fillAppareils(getAppareils(tab));
    }
}


function filterRecipes3() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInputAppareil").value;
    let tab = [];

    // filtrage par mot dans le champ de recherche
    if (word.length > 2) {
        word = word.toLowerCase();

        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].name.toLowerCase().indexOf(word) > -1) ||
                (recipes[i].ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipes[i].description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipes[i]);
            }
        }
    }
    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    for (let i = 0; i < ingredientTags.length; i++) {
        const ingredientTag = ingredientTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredientTag) != undefined);
        });
    }

    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    for (let i = 0; i < appareilTags.length; i++) {
        const appareilTag = appareilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.find((appliance) => appliance.toLowerCase() == appareilTag) != undefined);
        });
    }

    const ustensilTags = document.getElementById("rectangle_red").children;
    for (let i = 0; i < ustensilTags.length; i++) {
        const ustensilTag = ustensilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == ustensilTag) != undefined);
        });
    }

    if (tab.length === 0) {
        document.getElementById("recipes-not-found").style.display = "block";
    }
    else {
        document.getElementById("recipes-not-found").style.display = "none";

        // à la fin, "tab" contient les recettes à afficher
        displayData(tab);

        // après avoir affiché la liste des recettes filtrées, on actualise la liste des ingrédients, ustentiles, et appareils
        fillIngredients(getIngredients(tab));
        fillUstensils(getUstensils(tab));
        fillAppareils(getAppareils(tab));
    }
}


function filterRecipes4() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInputUstensil").value;
    let tab = [];

    // filtrage par mot dans le champ de recherche
    if (word.length > 2) {
        word = word.toLowerCase();

        for (let i = 0; i < recipes.length; i++) {
            if ((recipes[i].name.toLowerCase().indexOf(word) > -1) ||
                (recipes[i].ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipes[i].description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipes[i]);
            }
        }
    }
    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    for (let i = 0; i < ingredientTags.length; i++) {
        const ingredientTag = ingredientTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredientTag) != undefined);
        });
    }

    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    for (let i = 0; i < appareilTags.length; i++) {
        const appareilTag = appareilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.find((appliance) => appliance.toLowerCase() == appareilTag) != undefined);
        });
    }

    const ustensilTags = document.getElementById("rectangle_red").children;
    for (let i = 0; i < ustensilTags.length; i++) {
        const ustensilTag = ustensilTags[i].textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == ustensilTag) != undefined);
        });
    }

    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].ustensils.find((ustensil) => ustensil.toLowerCase() == word)) {
            tab.push(recipes[i]);
        }

    }

    if (tab.length === 0) {
        document.getElementById("recipes-not-found").style.display = "block";
    }
    else {
        document.getElementById("recipes-not-found").style.display = "none";

        // à la fin, "tab" contient les recettes à afficher
        displayData(tab);

        // après avoir affiché la liste des recettes filtrées, on actualise la liste des ingrédients, ustentiles, et appareils
        fillIngredients(getIngredients(tab));
        fillUstensils(getUstensils(tab));
        fillAppareils(getAppareils(tab));
    }
}


function filterIngredients(word) {
    let tab = [];

    for (let i = 0; i < filteredIngredients.length; i++) {
        if ((new RegExp("^" + word, "i")).test(filteredIngredients[i])) {
            tab.push(filteredIngredients[i]);
        }
    }
    fillIngredients(tab);
}

function filterRecipesByAppareil() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInputAppareil").value;
    let tab = [];
    let tab2 = [];

    word = word.toLowerCase();
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].appliance.toLowerCase().includes(word)) {

            tab.push(recipes[i].appliance);
            if (tab2.indexOf(recipes[i]) < 0) {
                tab2.push(recipes[i]);
            }
        }
    }

    if (tab.length === 0) {
        document.getElementById("recipes-not-found").style.display = "block";
    }
    else {
        document.getElementById("recipes-not-found").style.display = "none";

        // à la fin, "tab" contient les recettes à afficher
        displayData(tab2);

        // après avoir affiché la liste des recettes filtrées, on actualise la liste des ingrédients, ustentiles, et appareils
        fillIngredients(getIngredients(tab2));
        fillUstensils(getUstensils(tab2));
        fillAppareils(getAppareils2(tab));
    }
}

function filterRecipesByUstensil() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInputUstensil").value;
    let tab = [];
    let tab2 = [];

    word = word.toLowerCase();

    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ustensils.length; j++) {
            // console.log(" youpi", recipes[i].ingredients[j].ingredient , "2 ", recipes.ingredient);
            if (recipes[i].ustensils[j].toLowerCase().includes(word)) {

                tab.push(recipes[i].ustensils[j]);
                if (tab2.indexOf(recipes[i]) < 0) {
                    tab2.push(recipes[i]);
                }
            }
        }
    }

    if (tab.length === 0) {
        document.getElementById("recipes-not-found").style.display = "block";
    }
    else {
        document.getElementById("recipes-not-found").style.display = "none";

        // à la fin, "tab" contient les recettes à afficher
        displayData(tab2);

        // après avoir affiché la liste des recettes filtrées, on actualise la liste des ingrédients, ustentiles, et appareils
        fillIngredients(getIngredients(tab2));
        fillUstensils(getUstensils2(tab));
        fillAppareils(getAppareils(tab2));
    }
}

function getRecipesByKeyWord(word) {
    let tabRecipes = [];
    let recipesSolution;

    for (let i = 0; i < recipes.length; i++) {

        wordTest = recipes[i].name;
        wordTest2 = recipes[i].ingredients;
        wordTest3 = recipes[i].description;

        if (recipes[i].name.indexOf(word) > -1) {
            recipesSolution = recipes.filter((recipes) => recipes.name === word);
            tabRecipes.push(recipesSolution);


        } else if (recipes[i].ingredients.indexOf(word) > -1) {

            recipesSolution = recipes.find((recipes) => recipes.ingredients.includes(wordTest2));
            tabRecipes.push(recipesSolution);


        } else if (recipes[i].description.indexOf(word) > -1) {

            recipesSolution = recipes.find((recipes) => recipes.description.includes(wordTest3));
            tabRecipes.push(recipesSolution);
            // console.log(" RCIPES idescript ", recipesSolution);

        }

    }
    return tabRecipes;

}

let recipesSection = document.querySelector(".card-deck");
// Cette fonction permet d'afficher une liste de recettes données en paramètre
function displayData(tabs) {
    recipesSection.innerHTML = "";
    tabs.forEach(tab => {
        const recipeModel = recipeFactory(tab);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesSection.appendChild(recipeCardDOM);
    });
}

function getRecipesWithoutDoublons(tabRecette) {
    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < tabRecette.length; j++) {
            if (tabRecette.indexOf(recipes[i]) > -1) {
                recipes.splice(i, 1);
                recipes.push(tabRecette[j]);
            }
        }
    }
    return recipes;
}

let recipes = [];
let word;
async function init() {
    // Récupère les datas des plats
    recipes = await getRecipes();
    displayData(recipes);

    filteredIngredients = getIngredients(recipes);
    fillIngredients(filteredIngredients);
    filteredUstensils = getUstensils(recipes);
    fillUstensils(filteredUstensils);
    filteredAppareils = getAppareils(recipes);
    fillAppareils(filteredAppareils);
}

window.onload = function () {
    init();
}

window.addEventListener('click', (e) => {
    if (e.target.className.includes("far fa-times-circle")) {
        //alors supprime le tag
        suppressTag(e);
    }
});


// toggle (open/close) options for a list (ingredients, ustensils, appareils)
function toggleDropDown(eltId) {
    const elt = document.getElementById(eltId);
    if (elt == null) {
        return;
    }
    if (elt.children[0].style.display == "none") {
        closeDropDown(eltId);

    }
    else {
        closeDropDown("dropdown");
        closeDropDown("dropdownAppareil");
        closeDropDown("dropdownUstensils");
        elt.children[0].style.display = "none";
        elt.children[1].style.display = "block";

    }
}

function closeDropDown(eltId) {
    const elt = document.getElementById(eltId);

    if (elt == null) {
        return;
    }
    elt.children[0].style.display = "";
    elt.children[1].style.display = "none";
    elt.children[1].children[0].children[0].value = "";
} 
