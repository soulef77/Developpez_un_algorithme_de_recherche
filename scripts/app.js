function myFunction() {
    document.getElementById("inputIngredient").classList.toggle("show");
    document.getElementById("dropdown-menu-ingredients").classList.toggle("show");

}

// Partie Ingredients
div = document.getElementById("ingredients_dropdown_menu");
let ingredients = [];
function getIngredients(recipes) {
    ingredients = [];
    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            if (ingredients.indexOf(recipes[i].ingredients[j].ingredient) < 0) {
                ingredients.push(recipes[i].ingredients[j].ingredient);
            }
        }
    }
    return ingredients;
}


function fillIngredients(ingredients) {
    // permet de déplacer vers la droite les dropdowns lorque certains sont ouverts
    document.getElementById("ingredients_dropdown_menu").innerHTML = "";
    $('#dropdown').on('shown.bs.dropdown', function () {
        document.getElementById('ingredDiv').style.display = 'none';
        document.getElementById('dropbtn').style.display = 'none';
        document.getElementById('dropdownMenuButtonIngredient').style.display = 'none';
        document.getElementById("dropdownAppareils").style.marginLeft = "250%";
        document.getElementById("dropdownUstensils").style.marginLeft = "250%";
        // document.getElementById(".dropdown-menu.show").style.top = "85px !important";
    });

    $('#dropdown').on('hidden.bs.dropdown', function () {
        document.getElementById('name').style.display = 'inline-block';
        document.getElementById('dropdownMenuButtonIngredient').style.display = 'block';
        document.getElementById("dropdownAppareils").style.marginLeft = "0%";
        document.getElementById("dropdownUstensils").style.marginLeft = "0%";
    });

    const tags = [];
    const elts = document.getElementById("rectangle_blue").children;
    for (let i = 0; i < elts.length; i++) {
        tags.push(elts[i].textContent);
    }

    for (let i = 0; i < ingredients.length; i++) {
        if (tags.indexOf(ingredients[i]) < 0) {
            showIngredient(ingredients[i]);
        }
    }
}


function showIngredient(ingredient) {

    div = document.getElementById("ingredients_dropdown_menu");
    el = document.createElement("div");

    el.setAttribute("class", "ingred");
    el.textContent = ingredient;
    div.appendChild(el);
    el.setAttribute("onclick", "addIngredientTag(event)");

}

function addIngredientTag(event) {
    const d = document.createElement('div');
    d.id = "labelTag" + i.toString();
    d.textContent = event.currentTarget.textContent;
    text = d.textContent;
    const img = document.createElement("img");
    img.src = "./assets/Vector2.png";
    img.alt = "";
    img.setAttribute("onclick", "suppressTag(event)")
    d.appendChild(img);

    const c = document.getElementById('rectangle_blue');
    if (c.children.length == 0) {
        c.style.display = "flex";
    }
    c.appendChild(d);

    filterRecipes() && filterRecipes2();

    closeDropDown("dropdown");
}


function myFunction() {
    document.getElementById("ingredients_dropdown_menu").classList.toggle("show");
}


// Partie appareils

div = document.getElementById("appareils_dropdown_menu");
let appareils = [];
function getAppareils(recipes) {
    appareils = [];

    for (let i = 0; i < recipes.length; i++) {
        if (appareils.indexOf(recipes[i].appliance) < 0) {
            appareils.push(recipes[i].appliance);
        }
    }
    return appareils;
}

let appareils2 = [];
function getAppareils2(argument) {
    appareils2 = [];

    for (let i = 0; i < argument.length; i++) {
        if (appareils2.indexOf(argument[i]) < 0) {
            appareils2.push(argument[i]);
        }
    }
    return appareils2;
}

let listAppareils = [];
let appareilVariable = [];
let tagsAppareilList = [];

function fillAppareils(appareils) {
    // Permet de décaler vers la droite certains dropdowns quand certains sont ouverts
    document.getElementById("appareils_dropdown_menu").innerHTML = "";
    $('#dropdownAppareil').on('shown.bs.dropdown', function () {
        document.getElementById('name1').style.display = 'none';
        document.getElementById('dropdownMenuButtonAppareil').style.display = 'none';
        document.getElementById("dropdownUstensils").style.marginLeft = "250%";
    });

    $('#dropdownAppareil').on('hidden.bs.dropdown', function () {
        document.getElementById('name1').style.display = 'inline-block';
        document.getElementById('dropdownMenuButtonAppareil').style.display = 'block';
        document.getElementById("dropdownUstensils").style.marginLeft = "0%";
    });

    const tagsAppareil = [];
    const elts = document.getElementById("rectangle_green").children;
    for (let i = 0; i < elts.length; i++) {
        tagsAppareil.push(elts[i].textContent);
    }

    for (let i = 0; i < appareils.length; i++) {
        if (tagsAppareil.indexOf(appareils[i]) < 0) {
            showAppareil(appareils[i]);
        }
    }
}

function showAppareil(appareil) {
    div = document.getElementById("appareils_dropdown_menu");
    el = document.createElement("div");
    listAppareils.push(appareil);

    for (let i = 0; i < listAppareils.length; i++) {
        if ((tagsAppareilList.indexOf(appareil) < 0) && (listAppareils.indexOf(appareil))) {
            if ((tagsAppareilList.indexOf(listAppareils[i]) < 0) || (text != appareil) || (listAppareils.indexOf(el.textContent) < 0) || (listAppareils.indexOf(appareil) < 0) || (appareilVariable.indexOf(appareil) < 0)) {

                el.setAttribute("class", "appar");
                el.textContent = listAppareils[i];
                el.setAttribute("onclick", "addDropdownFilter(event)");
                div.appendChild(el);
                appareilVariable.push(listAppareils[i]);
                tagsAppareilList.push(text);
            }
        }
    }
}


function myFunction() {
    document.getElementById("appareils_dropdown_menu").classList.toggle("show");
}

var i = 0;
let tagFilter;
function CreateTagFilter2(tagFilter) {
    i++;
    var elem2 = document.createElement('div');
    elem2.setAttribute("id", "labelTag" + i.toString());

    elem2.innerHTML = tagFilter;
    const img = document.createElement("img");
    img.src = "./assets/Vector2.png";
    img.alt = "";
    img.setAttribute("onclick", "suppressTag(event)")
    elem2.appendChild(img);

    document.getElementById('rectangle_green').style.display = 'flex';
    document.getElementById('rectangle_green').appendChild(elem2);
}


// Partie ustensiles

div = document.getElementById("ustensils_dropdown_menu");
let ustensils = [];
function getUstensils(recipes) {
    ustensils = [];
    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ustensils.length; j++) {
            if (ustensils.indexOf(recipes[i].ustensils[j]) < 0) {
                ustensils.push(recipes[i].ustensils[j]);
            }
        }
    }
    return ustensils;

}

let ustensils2 = [];
function getUstensils2(recipes) {
    ustensils2 = [];
    for (let i = 0; i < recipes.length; i++) {
        if (ustensils2.indexOf(recipes[i]) < 0) {
            ustensils2.push(recipes[i]);
        }
    }
    return ustensils2;
}


function fillUstensils(ustensils) {
    document.getElementById("ustensils_dropdown_menu").innerHTML = "";

    const tagsUstensil = [];
    const elts = document.getElementById("rectangle_red").children;
    for (let i = 0; i < elts.length; i++) {
        tagsUstensil.push(elts[i].textContent);
    }


    for (let i = 0; i < ustensils.length; i++) {
        if (tagsUstensil.indexOf(ustensils[i]) < 0) {
            showUstensil(ustensils[i]);
        }
    }
}

let listUstensils = [];
let ustensilVariable = [];
let tagsUstensilList = [];

function showUstensil(ustensil) {

    div = document.getElementById("ustensils_dropdown_menu");
    el = document.createElement("div");

    listUstensils.push(ustensil);

    for (let i = 0; i < listUstensils.length; i++) {
        if ((tagsUstensilList.indexOf(ustensil) < 0) && (listUstensils.indexOf(ustensil))) {
            if ((tagsUstensilList.indexOf(listUstensils[i]) < 0) || (text != ustensil) || (listUstensils.indexOf(el.textContent) < 0) || (listUstensils.indexOf(ustensil) < 0) || (ustensilVariable.indexOf(ustensil) < 0)) {

                el.setAttribute("class", "usten");
                el.textContent = listUstensils[i];
                el.setAttribute("onclick", "addDropdownFilter(event)");
                div.appendChild(el);
                ustensilVariable.push(listUstensils[i]);
                tagsUstensilList.push(text);
            }
        }
    }
}


function myFunction() {
    document.getElementById("ustensils_dropdown_menu").classList.toggle("show");
}

var i = 0;
function CreateTagFilter3(tagFilter) {
    i++;
    var elem2 = document.createElement('div');
    elem2.setAttribute("id", "labelTag" + i.toString());
    elem2.innerHTML = tagFilter;
    const img = document.createElement("img");
    img.src = "./assets/Vector2.png";
    img.alt = "";
    img.setAttribute("onclick", "suppressTag(event)")
    elem2.appendChild(img);

    document.getElementById('rectangle_red').style.display = 'flex';
    document.getElementById('rectangle_red').appendChild(elem2);
}


let listOfIngredientsSelected = new Set();
let listOfUstensilsSelected = new Set();
let listOfAppliancesSelected = new Set();
let listOfUtensilsSelected = new Set();

let recipesTagFiltered = recipes;
let recipesInputFiltered = recipesTagFiltered;
let recipesFiltered = recipesInputFiltered;
let type;
let variable3;
let text;

function addDropdownFilter(event) {
    const target = event.currentTarget;
    text = target.textContent;
    type = target.parentNode.dataset.type;
   
    const listType2 = type === "appareil" ? listOfAppliancesSelected :
        type === "";

    if (type == "appareil") {
        if (!listType2.has(text)) {
            recipesTagUpdate();
            CreateTagFilter2(text);
            filterRecipes() && filterRecipes2() && filterRecipes3() && filterRecipes4();
            closeDropDown("dropdownAppareil");
        }
    }

    const listType3 = type === "ustensil" ? listOfUstensilsSelected :
        type === "";

    if (type == "ustensil") {
        if (!listType3.has(text)) {
            recipesTagUpdate();
            CreateTagFilter3(text);
            filterRecipes() && filterRecipes2() && filterRecipes3() && filterRecipes4();
            closeDropDown("dropdownUstensils");
        }
    }
}

function recipesTagUpdate() {
    recipesTagFiltered = recipesTagFilter();
}

function recipesTagFilter() {
    // Filtre cartes
    let itemsFiltered = [];
    for (let i = 0; i < recipesTagFiltered.length; i++) {
        const item = recipesTagFiltered[i];

        let haveIngredients = true;
        for (let j = 0; j < listOfIngredientsSelected.size; j++) {
            let haveIngredient = 0;
            for (let k = 0; k < item.ingredients.length; k++) {
                if (listOfIngredientsSelected.has(item.ingredients[k].ingredient.toLowerCase())) {
                    haveIngredient++;
                }
            }
            haveIngredients = haveIngredient === listOfIngredientsSelected.size ? true : false;
        }

        let haveUtensils = true;
        for (let j = 0; j < listOfUtensilsSelected.size; j++) {
            let haveUtensil = 0;
            for (let k = 0; k < item.ustensils.length; k++) {
                if (listOfUtensilsSelected.has(item.ustensils[k].toLowerCase())) {
                    haveUtensil++;
                }
            }
            haveUtensils = haveUtensil === listOfUtensilsSelected.size ? true : false;
        }

        let haveAppliance = true
        if (listOfAppliancesSelected.size > 0) {
            haveAppliance = listOfAppliancesSelected.has(item.appliance.toLowerCase());
        }

        // Si tout est trouvé dans l'objet vérifié, on l'insère dans le tableau
        if (haveIngredients && haveUtensils && haveAppliance) {
            itemsFiltered.push(item);
        }
    }

    return itemsFiltered;
}

function FillTag(tagFilter) {
    document.getElementById('rectangle_blue').style.display = 'flex';
}

var i = 0;
function CreateTagFilter(tagFilter) {
    i++;
    var elem2 = document.createElement('div');
    elem2.setAttribute("id", "labelTag" + i.toString());

    elem2.innerHTML = tagFilter;
    const img = document.createElement("img");
    img.src = "./assets/Vector2.png";
    img.alt = "";
    img.setAttribute("onclick", "suppressTag(event)")
    elem2.appendChild(img);

    document.getElementById('rectangle_blue').style.display = 'flex';
    document.getElementById('rectangle_blue').appendChild(elem2);
}


// supprime de l'affichage le tag cliqué
function suppressTag(event) {
    event.target.parentNode.remove();
    filterRecipes();

}


function filterFunction2() {
    filterRecipes2();
}

function filterFunction3() {
    filterRecipes3();
}

function filterFunction4() {
    filterRecipes4();
}