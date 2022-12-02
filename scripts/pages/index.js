
let response;

// Cette fonction permet de récupérer les données js des plats
async function getRecipes() {
    response = await fetch('./data/recipes.js');
    // lire le corps de réponse et analyser en JSON
    let recipes = await response.json();
    console.log("recepis ", recipes);
    return recipes;
}

function filterRecipes() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("searchField").value;
    let tab = [];

    // filtrage par mot dans le champ de recherche
    if (word.length > 2) {
        word = word.toLowerCase();
        recipes.forEach((recipe) => {
        if ((recipe.name.toLowerCase().indexOf(word) > -1) ||
                (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipe.description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipe);
            }
        });
    }

    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;

    Array.from(ingredientTags).forEach((ingredientTag) => {
        const ingredienteTag = ingredientTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredienteTag) != undefined);
        });
    });

    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    Array.from(appareilTags).forEach((appareilTag) => {

        const appareileTag = appareilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.toLowerCase().indexOf(appareileTag) > -1);
        })
    });

    const ustensilTags = document.getElementById("rectangle_red").children;
    Array.from(ustensilTags).forEach((ustensilTag) => {

        const ustensileTag = ustensilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensils) => ustensils.toLowerCase() == ustensileTag) != undefined);
        });
    });



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



function filterRecipes2() {
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInput").value;
    let tab = [];

    // filtrage par mot dans le champ de recherche
    if (word.length > 2) {
        word = word.toLowerCase();

        recipes.forEach((recipe) => {

            if ((recipe.name.toLowerCase().indexOf(word) > -1) || 1
                (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipe.description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipe);
            }
        });
    }

    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    ingredientTags.forEach((ingredientTag) => {
        const ingredienteTag = ingredientTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredienteTag) != undefined);
        });
    });



    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    appareilTags.forEach((appareilTag) => {

        const appareileTag = appareilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.find((appliance) => appliance.toLowerCase() == appareileTag) != undefined);
        });
    });

    const ustensilTags = document.getElementById("rectangle_red").children;
    ustensilTags.forEach((ustensilTag) => {
        const ustensileTag = ustensilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == ustensileTag) != undefined);
        });
    });


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

        recipes.forEach((recipe) => {

            if ((recipe.name.toLowerCase().indexOf(word) > -1) || 1
                (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipe.description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipe);
            }
        });
    }

    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    ingredientTags.forEach((ingredientTag) => {
        const ingredienteTag = ingredientTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredienteTag) != undefined);
        });
    });

    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    appareilTags.forEach((appareilTag) => {

        const appareileTag = appareilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.find((appliance) => appliance.toLowerCase() == appareileTag) != undefined);
        });
    });

    const ustensilTags = document.getElementById("rectangle_red").children;

    ustensilTags.forEach((ustensilTag) => {

        const ustensileTag = ustensilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == ustensileTag) != undefined);
        });
    });

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

        recipes.forEach((recipe) => {

            if ((recipe.name.toLowerCase().indexOf(word) > -1) || 1
                (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == word)) ||
                (recipe.description.toLowerCase().indexOf(word) > -1)) {
                tab.push(recipe);
            }
        });
    }

    else {
        tab = [...recipes];
    }

    // pour chaque tag d'ingrédient, on filtre le(s recettes qui contiennent cet ingrédient
    const ingredientTags = document.getElementById("rectangle_blue").children;
    ingredientTags.forEach((ingredientTag) => {
        const ingredienteTag = ingredientTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase() == ingredienteTag) != undefined);
        });
    });



    // répéter la même chose pour les tags d'appareils et d'ustensiles.
    const appareilTags = document.getElementById("rectangle_green").children;
    appareilTags.forEach((appareilTag) => {

        const appareileTag = appareilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.appliance.find((appliance) => appliance.toLowerCase() == appareileTag) != undefined);
        });
    });

    const ustensilTags = document.getElementById("rectangle_red").children;
    ustensilTags.forEach((ustensilTag) => {
        const ustensileTag = ustensilTag.textContent.toLowerCase();
        tab = tab.filter((recipe) => {
            return (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == ustensileTag) != undefined);
        });
    });

    recipes.forEach((recipe) => {
        if (recipe.ustensils.find((ustensil) => ustensil.toLowerCase() == word)) {
            tab.push(recipe);
        }

    });

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

function filterRecipesByIngredient() {
    recipesSection.innerHTML = "";
    recipesSection.innerHTML = "";
    let word = document.getElementById("myInput").value;
    let tab = [];
    let tab2 = [];

    word = word.toLowerCase();

    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            // console.log(" youpi", recipes[i].ingredients[j].ingredient , "2 ", recipes.ingredient);
            if (recipes[i].ingredients[j].ingredient.includes(word)) {

                tab.push(recipes[i].ingredients[j].ingredient);
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
        fillIngredients(getIngredients2(tab));
        fillUstensils(getUstensils(tab2));
        fillAppareils(getAppareils(tab2));
    }
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

// Cette fonction permet de retourner soit le nom de la recette recherchée, soit la liste des ingrédients contenant le mot recherché, soit, 
// la description de la recette contenant le mot recherché.

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
         }
    }
    return tabRecipes;
}

// Cette fonction permet de retourner soit le nom de la recette recherchée, soit la liste des ingrédients contenant le mot recherché, soit, 
// la description de la recette contenant le mot recherché.
let recipesSolutionIngredients;

function getRecipesByKeyWordIngredients(word) {
    let allIngredientsRecipes = [];
    let variableRecipes = [];
    for (let i = 0; i < recipes.length; i++) {

        wordTest = recipes[i].name;
        wordTest2 = JSON.stringify(recipes[i].ingredients);
        if (wordTest2.indexOf(word) > -1) {
            recipes[i].ingredients.map(ingredients => {
                const ingredient = ingredients.ingredient;
                allIngredientsRecipes.push(ingredient);
            });
            ingredientsListArray = [...new Set(allIngredientsRecipes)];
             return ingredientsListArray;
        }
    }
}

function getRecipesByKeyWordByIngredient(word) {

    for (let i = 0; i < recipes.length; i++) {
        wordTest = recipes[i].name;
        wordTest2 = JSON.stringify(recipes[i].ingredients);
        
        if (wordTest2.indexOf(word) > -1) {
            return wordTest;

        }
    }

}

// Cette fonction permet de retourner soit le nom de la recette recherchée, soit la liste des ingrédients contenant le mot recherché, soit, 
// la description de la recette contenant le mot recherché.
let recipesSolutionAppareils;

function getRecipesByKeyWordAppareils(word) {
    let allAppareilsRecipes = [];
    let variableRecipesAppareils = [];
    for (let i = 0; i < recipes.length; i++) {

        wordTest = recipes[i].name;
        wordTest2 = JSON.stringify(recipes[i].appliance);

       if (wordTest2.indexOf(word) > -1) {
            Array.from(recipes[i].appliance).map(appliances => {
                const appliance = appliances.appliance;
                allAppareilsRecipes.push(appliance);
              
            });
            appareilsListArray = [...new Set(allAppareilsRecipes)];

            return appareilsListArray;
        }
    }
}


// Cette fonction permet de retourner soit le nom de la recette recherchée, soit la liste des ingrédients contenant le mot recherché, soit, 
// la description de la recette contenant le mot recherché.
let recipesSolutionAppareils2;

function getRecipesByKeyWordAppareilsTag(word) {
    let allAppareilsRecipes = [];
    let tabRecipes = [];
    for (let i = 0; i < recipes.length; i++) {

        wordTest = recipes[i].name;
        wordTest2 = JSON.stringify(recipes[i].appliance);
        wordTest3 = recipes[i].appliance;
        if (JSON.stringify(word).indexOf(wordTest2) > -1) {
            recipesSolutionAppareils2 = recipes.find((recipes) => recipes.appliance.includes(wordTest3));
            tabRecipes.push(recipesSolutionAppareils2);
            appareilsListArray = [...new Set(tabRecipes)];
            return appareilsListArray;
        }
    }
}


// Cette fonction permet de retourner soit le nom de la recette recherchée, soit la liste des ingrédients contenant le mot recherché, soit, 
// la description de la recette contenant le mot recherché.
let recipesSolutionUstensils;

function getRecipesByKeyWordUstensilsTag(word) {
    let tabRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
        wordTest = recipes[i].name;
        wordTest2 = JSON.stringify(recipes[i].ustensils);
        wordTest3 = recipes[i].ustensils;
        if (JSON.stringify(wordTest3).includes(word)) {
            recipesSolutionUstensils = recipes.find((recipes) => recipes.ustensils.includes(wordTest3));
            tabRecipes.push(wordTest);
            appareilsListArray = [...new Set(tabRecipes)];
        }
    }
    return appareilsListArray;
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

// Cette fonction permet de faire appel à la fonction pour définir la page d'accueil des photographes. 
async function displayData3(tab) {
    recipesSection.innerHTML = "";
    const recipeModel = recipeFactory(tab);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
}

async function displayData2(recipes) {
    recipesSection.innerHTML = "";
    if (recipes && recipes.length > 1) {
        Array.from(recipes).forEach((recipe) => {
            const recipeModel = recipeFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            recipesSection.appendChild(recipeCardDOM);
        })
    } else if (recipes) {
        Array.from(recipes).forEach((recipe) => {

            const recipeModel = recipeSingleFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            recipesSection.insertAdjacentHTML('beforeEnd', recipeCardDOM);

        });
    }
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
    fillIngredients(getIngredients(recipes));
    fillUstensils(getUstensils(recipes));
    fillAppareils(getAppareils(recipes));
}

window.onload = function () {
    init();
}

window.addEventListener('click', (e) => {
    if (e.target.className.includes("far fa-times-circle")) {
        //alors supprime le tag
        suppressTag(e);
        }
    }
);