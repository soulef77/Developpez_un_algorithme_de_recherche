// Partie Ingredients

div = document.getElementById("ingredients_dropdown_menu");
function getIngredients(argument) {
    let ingredients = [];
    for (let i = 0; i < argument.length; i++) {
        ingredients.push(argument[i].ingredients);
        // console.log(" TESTTTT ", argument[i].ingredients);
        }
    var unique = ingredients.filter((x, i) => ingredients.indexOf(x) === i);
    return ingredients;
    
}

function getIngredients2(argument) {
let recipesSolution= [];
for (let i = 0; i < argument.length; i++) {
        recipesSolution.push(argument[i]['ingredients']);
    }
    
    ingredientsListArray = [...new Set(recipesSolution)];
    return ingredientsListArray;
}
  
function getIngredient3(tab) {
    let ingredient= [];
    // var unique = tab.filter((x, i) => tab.indexOf(x) === i);
   
    for (let i = 0; i < tab.length; i++) {

        // ingredient.push(unique[i].ingredients);
        ingredient.push(ingredient.ingredient);
        // console.log(" TESTTTT 3 ", ingredient[i]);
        }
    
    
     return ingredient;
    
}


function fillIngredients(ingredients)
{
  document.getElementById("ingredients_dropdown_menu").innerHTML = "";    
  for(let i= 0; i< ingredients.length; i++)
  {
    showIngredients(ingredients[i]);
  }
        
}

function fillIngredients2(argument2) {

// document.getElementById("ingredients_dropdown_menu").innerHTML = ""; 
//  console.log(" VEIRIIFIFI 3 ", argument2);
   
for(let i= 0; i< argument2.length; i++) {
    showIngredients2(argument2[i]);
}
        
}
  
function fillIngredients3(ingredients) {

    document.getElementById("ingredients_dropdown_menu").innerHTML = "";
   
    for(let i= 0; i< ingredients.length; i++) {
            showIngredient3(ingredients[i]);
            // console.log(" TESTTT 4 ", ingredients[i]);
        }
        
}

function showIngredients(argument3) {

    // console.log(" VEIRIIFIFI 2 ", argument3);

    div = document.getElementById("ingredients_dropdown_menu");
   
    let txtValue = [];
    let unique = [];
    for(let i= 0; i< argument3.length; i++) {
       txtValue.push(argument3[i].ingredient);
           
    }


    unique= [...new Set(txtValue)];
   
    for(let i= 0; i< unique.length; i++) {

        el = document.createElement("div");
        el.setAttribute("class", "ingred");
        el.textContent = unique[i];
        // el.value = unique[i];
        div.appendChild(el);

        el.setAttribute("onclick", "addIngredientTag(event)");
        div.appendChild(el);
        }
        txtValue = [];
        unique = [];
}

function addIngredientTag(event)
{
  const d = document.createElement('div');
  d.id = "labelTag"+ i.toString();
  d.textContent = event.currentTarget.textContent;

  const img = document.createElement("img");
  img.src ="./assets/Vector2.png";
  img.alt = "";
  img.setAttribute("onclick", "suppressTag(event)")
  d.appendChild(img);

  const c = document.getElementById('rectangle_blue');
  if(c.children.length == 0)
  {
    c.style.display = "flex";
  }
  c.appendChild(d);

  filterRecipes();
}

var el;
let txtValue = [];
let txtIngred= [];
function showIngredients2(argument3) {
    
    //   console.log(" VEIRIIFIFI 2 ", argument3);
    if(argument3) {
    div = document.getElementById("ingredients_dropdown_menu");
    a = div.getElementsByTagName("div");
     
    
    for(let j= 0; j < argument3.length; j++) {
    
        txtValue.push(argument3[j].ingredient);
        // console.log(" value ", txtValue );  
    }
    

    txtIngred= [...new Set(txtValue)];
    const boxes = document.getElementsByClassName("ingred");
    a = div.getElementsByTagName("div");
   
    for(let j=0; j < boxes.length; j++) {
             a[j].innerHTML="";
    }

    for(let i=0; i <txtIngred.length; i++) {
    if(txtIngred[i].includes(a[i].innerText)) {

            // console.log(" YOUPI ", txtIngred[i]);
        el = document.createElement("div");
        el.setAttribute("class", "ingred");
        el.textContent = txtIngred[i];
        // el.value = txtIngred[i];
        // a[i].innerHTML= txtIngred[i];
        div.appendChild(el);
        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
    }
    }
}

function showIngredient3(ingredient) {
    div = document.getElementById("ingredients_dropdown_menu");
    el = document.createElement("div");
    el.className = "ingred";
    el.textContent = ingredient;
    div.appendChild(el);
    el.setAttribute("onclick", "addDropdownFilter(event)");
}


function toCleanIngredientDiv() {
     const boxes = document.getElementsByClassName("ingred");
    a = div.getElementsByTagName("div");
    for(let i=0; i< boxes.length;i++) {
        // boxes[i].innerHTML= "";
        a[i].innerHTML= "";
        // a[i].textContent="";
    }
}

function myFunction() {
    document.getElementById("ingredients_dropdown_menu").classList.toggle("show");
}

// function filterFunction(ingredTag) {
//     var input, filter, ul, li, a, i;
   
//     let variable= getRecipesByKeyWordIngredients(ingredTag);
//     var ingred2= getIngredients(getRecipesByKeyWordIngredients(ingredTag));
//     // console.log(" TAG INGRED ", ingredTag," 22 ", variable, "  33 ", ingred);

//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     input = document.getElementById("ingredients_dropdown_menu");
//     a = input.getElementsByTagName("div");

//     if(ingredTag) {
//         for(let i=0; i< a.length ; i++) {
//             txtValue =  a[i].innerText;
//             if(txtValue.indexOf(ingredTag) > -1) {
//                 // console.log("TESTTTT ", txtValue, " pkoi pas ", variable);
//                 a[i].innerHTML= txtValue;
//             }
             
//         } 
//     }  

//     if(ingredTag) {
 
//         let allIngredientsRecipes = [];
//         for (let i = 0; i < a.length; i++) {
        
//             recipes.map(recipe => {
//                     recipe.ingredients.map(ingredients => {
//                     const ingredient= ingredients.ingredient.match(ingredTag);
//                     const tagIngredient= getIngredients(getRecipesByKeyWordIngredients(ingredient));
//                     allIngredientsRecipes.push(tagIngredient);
//                     // console.log(" oo ", tagIngredient);
//                     });
//                 });
                  
//         ingredientsListArray = [...new Set(allIngredientsRecipes)];
    
//         // renderIngredientsListFiltred(ingredientsListArray);

//             txtValue =  a[i].innerText;
//             if(txtValue.indexOf(ingredTag) > -1)  {
           
//             // console.log("ingred ", variable, "tes ", txtValue," ookok  ",ingredTag);
//             // a[i].innerHTML = "";
//             a[i].innerText= ingredientsListArray[i];
//             } else {
//                 // a[i].innerHTML = "";
//             }
//     }
//     }
   

//     for(let i= 0; i< ingredientsListArray.length; i++) {
//          a[i].innerHTML= ingredientsListArray[i];
//         // console.log(" oui oiu ", ingredientsListArray[i]," ",  a[i].innerHTML);
//     }

// }


// const ingredientsListTags = document.getElementById('ingredients-list-tags');
// let ingredientsListArray = [];
// function renderIngredientsList(recipes) {
// 	let allIngredientsRecipes = [];
// if(recipes)
// 	recipes.map(recipe => {
// 		recipe.ingredients.map(ingredients => {
// 			const ingredient = ingredients.ingredient;
// 			allIngredientsRecipes.push(ingredient);
// 		});
// 	});
// 	ingredientsListArray = [...new Set(allIngredientsRecipes)];

// 	// renderIngredientsListFiltred(ingredientsListArray);
// }

let ingred;
let variable2;
function filterFunction2(tagFilter) {
        variable2=  getRecipesByKeyWord(tagFilter);
        // console.log("variable  ", variable2, "tag ", tagFilter);
        ingred= getIngredients(variable2);
        // console.log("INGRED ", ingred);
        fillIngredients(ingred);
}




// Partie appareils

div = document.getElementById("appareils_dropdown_menu");
function getAppareils(argument) {
    let appareils = [];
  
    if(argument) {
    for (let i = 0; i < argument.length; i++) {
        appareils.push(argument[i].appliance);
        }
      }

     let appareilsSet = [...new Set(appareils)];
     return appareilsSet;
    
}

function getAppareils2(argument) {
    let appareils = [];
  
    if(argument) {
    for (let i = 0; i < argument.length; i++) {
        appareils.push(argument[i]);
        //  console.log(" TESTTTT ", argument[i].appliance);
        }
      }

     let appareilsSet = [...new Set(appareils)];
     return appareilsSet;
    
}

function fillAppareils(argument2) {
document.getElementById("appareils_dropdown_menu").innerHTML = ""; 
  for(let i= 0; i< argument2.length; i++) {
            showAppareils(argument2[i]);
            }
        
}

function showAppareils(argument3) {

    //  console.log(" VEIRIIFIFI 2 ", argument3);
    div = document.getElementById("appareils_dropdown_menu");
   
    let txtValue = [];
    let unique = [];
    for(let i= 0; i< argument3.length; i++) {
       txtValue.push(argument3);
        //   console.log(" value appareil ", txtValue) 
    }

    unique= [...new Set(txtValue)];
    for(let i= 0; i< unique.length; i++) {

        el = document.createElement("div");
        el.setAttribute("class", "appar");
        el.textContent = unique[i];
        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
        txtValue = [];
        unique = [];
    
}


function fillAppareils2(argument2) {
    document.getElementById("appareils_dropdown_menu").innerHTML = ""; 
    for(let i= 0; i< argument2.length; i++) {
            showAppareils2(argument2[i]);
        }
    }

function showAppareils2(argument3) {

    //  console.log(" VEIRIIFIFI 2 ", argument3);
    if(argument3) {
    div = document.getElementById("appareils_dropdown_menu");
   
    let txtValue = [];
    let unique = [];
    for(let i= 0; i< argument3.length; i++) {
       txtValue.push(argument3[i].appliance);
        //   console.log(" value appareil ", txtValue) 
    }


    const boxes = document.getElementsByClassName("appar");
    a = div.getElementsByTagName("div");
    for(let i=0; i < boxes.length; i++) {
         a[i].innerHTML= "";
    }

    unique= [...new Set(txtValue)];
    for(let i= 0; i< unique.length; i++) {

        el = document.createElement("div");
        el.setAttribute("class", "appar");
        el.textContent = unique[i];
        // el.value = unique[i];
        div.appendChild(el);

        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
       
    }
}

function myFunction() {
    document.getElementById("appareils_dropdown_menu").classList.toggle("show");
}

var i=0;
let tagFilter;
function CreateTagFilter2(tagFilter) {
    i++;
    var elem2 = document.createElement('div');
    elem2.setAttribute("id", "labelTag"+ i.toString());

    elem2.innerHTML = tagFilter;    
    const img = document.createElement("img");
                  img.src ="./assets/Vector2.png";
                  img.alt = "";
                  img.setAttribute("onclick", "suppressTag(event)")
                  elem2.appendChild(img);
    
   
    document.getElementById('rectangle_green').style.display='flex';
    document.getElementById('rectangle_green').appendChild(elem2);
    //  filterFunction(tagFilter); 
}


function FillTag2(tagFilter) {
    
}


// Partie ustensiles

// div = document.getElementById("Ustensiles_dropdown_menu");
let ustensils = [];
function getUstensils(argument) {
   
    
    for (let i = 0; i < argument.length; i++) {
        ustensils.push(argument[i].ustensils);
    //  console.log(" TESTTTT ", argument[i].ustensils);
        }
      
    var unique = ustensils.filter((x, i) => ustensils.indexOf(x) === i);
    return unique;
     
    
}

function fillUstensils(argument2) {
    document.getElementById("ustensils_dropdown_menu").innerHTML = ""; 
    for(let i= 0; i< argument2.length; i++) {
        // console.log(" VEIRIIFIFI  USTENSILS ", argument2[i]);
            showUstensils(argument2[i]);
           }
   }

   
let txtValue2 = [];
let unique2= [];
function showUstensils(argument3) {
// txtValue2 = [];
document.getElementById("ustensils_dropdown_menu").innerHTML = ""; 
div = document.getElementById("ustensils_dropdown_menu");
    for(let i= 0; i< argument3.length; i++) {
        txtValue2.push(argument3[i]);
        // console.log(" VEIRIIFIFI 2 USTENDIL ", argument3[i]);
    }

    unique2=  [...new Set(txtValue2)];
    for(let i= 0; i< unique2.length; i++) {
        // console.log(" VEIRIIFIFI 2 USTENDIL 33 ", txtValue2[i]);
        el = document.createElement("div");
        el.setAttribute("class", "usten");
        el.textContent = unique2[i];
        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
        
}


function fillUstensils2(argument2) {

    // console.log(" VEIRIIFIFI USTENSIL ", argument2);
   
    for(let i= 0; i< argument2.length; i++) {
            showUstensils2(argument2[i]);
        }
        
        
}

  let txtValue3 = [];
  let unique3 = [];
function showUstensils2(argument3) {

    //  console.log(" VEIRIIFIFI 2 ", argument3);
  
    div = document.getElementById("Ustensils_dropdown_menu");
   
  
    for(let i= 0; i< argument3.length; i++) {
       txtValue3.push(argument3[i].ustensils);
        //   console.log(" value ustensil 22 ", txtValue3) 
    }

    unique3=  [...new Set(txtValue3)];
    for(let i= 0; i< unique3.length; i++) {

        el = document.createElement("div");
        el.setAttribute("class", "usten");
        el.textContent = unique3[i];
        // el.value = unique3[i];
        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
}

function myFunction() {
    document.getElementById("ustensils_dropdown_menu").classList.toggle("show");
}

var i=0;
function CreateTagFilter3(tagFilter) {

    var elem2 = document.createElement('div');
    elem2.setAttribute("id", "labelTag"+ i.toString());
    elem2.innerHTML = tagFilter;    
    const img = document.createElement("img");
                  img.src ="./assets/Vector2.png";
                  img.alt = "";
                  img.setAttribute("onclick", "suppressTag(event)")
                  elem2.appendChild(img);
    
   
    document.getElementById('rectangle_red').style.display='flex';
    document.getElementById('rectangle_red').appendChild(elem2);
    i++;
}


function FillTag3(tagFilter) {
  
}


let listOfIngredientsSelected = new Set();
let listOfUstensilsSelected = new Set();
let listOfAppliancesSelected = new Set();

let recipesTagFiltered = recipes;
let recipesInputFiltered = recipesTagFiltered;
let recipesFiltered = recipesInputFiltered;
let type;
let compteur = 0;
let variable3;

function addDropdownFilter(event) {
    compteur++;
    const target = event.currentTarget;
    const text = target.textContent;
    const selectedFilters = document.querySelector(".filtersSelected");
    type = target.parentNode.dataset.type;
    const listType = type === "ingredient"  ? listOfIngredientsSelected : 
    type === "";
    // console.log("ok  pkoi pas ", target.parentNode.dataset.type , " 2 ", target," 3 ", text,"  4 ", type, " 5 ", selectedFilters);
    if(type ==="ingredient") {
        if (!listType.has(text)) {
                listType.add(text);
                if(compteur > 1) {
                    recipesTagUpdate();
                    CreateTagFilter(text);
                    FillTag(text);
                    variable3 = searchByWordKeyAndTags2(text, variable2);
                    // console.log("variable OK 2 ", variable2, "tag ", text);
                    ingred= getIngredients(variable3);
                    // console.log("INGRED OK 2 ", ingred);
                    fillIngredients(ingred);
                } else {
                    // selectedFilters.appendChild(createDropdownFilterCard(text, type));
                    recipesTagUpdate();
                    CreateTagFilter(text);
                    FillTag(text);
                    // filterFunction2(text); 
                    // searchByWordKey(text);
                    // searchByWordKeyAndTags(text);
                    variable2=  searchByWordKeyAndTags(text);
                    // console.log("variable OK  ", variable2, "tag ", text);
                    ingred= getIngredients(variable2);
                    // console.log("INGRED OK ", ingred);
                    fillIngredients(ingred);
                }
    }
}

    const listType2 = type === "appareil"  ? listOfAppliancesSelected : 
    type === "";
  
    if(type=="appareil") {
    // console.log("ok  pkoi pas ", listType2, " ", target," ", text," ", type, " ", selectedFilters);
        if (!listType2.has(text)) {
            listType2.add(text);
            if(compteur > 1) {
                recipesTagUpdate();
                CreateTagFilter2(text);
                FillTag2(text);
                variable3 = searchByWordKeyAndTags2(text, variable2);
                ingred= getAppareils(variable3);
                fillAppareils(ingred);
                } else {

                // selectedFilters.appendChild(createDropdownFilterCard(text, type));
                recipesTagUpdate();
                CreateTagFilter2(text);
                FillTag2(text);
                //  searchByWordKeyAndTags(text);
                // searchByWordKey(text);
                // displayData(getRecipesByKeyWordAppareilsTag(text));

            
                variable2=  searchByWordKeyAndTags(text);
                ingred = getAppareils(variable2);
                // console.log("variable  ", variable3, "tag ", text);
                //  console.log("INGRED ", ingred2);
                fillAppareils(ingred);
                }
            }
        }
    
    const listType3 = type === "ustensil"  ? listOfUstensilsSelected : 
    type === "";
  
    if(type=="ustensil") {
    console.log("ok  pkoi pas ", listType3, " ", target," ", text," ", type, " ", selectedFilters);
    if (!listType3.has(text)) {
        listType3.add(text);
        if(compteur > 1) {
            recipesTagUpdate();
            CreateTagFilter3(text);
            FillTag3(text);
            variable3 = searchByWordKeyAndTags2(text, variable2);
            ingred= getUstensils(variable3);
            fillUstensils(ingred);
        } else {

            // selectedFilters.appendChild(createDropdownFilterCard(text, type));
            recipesTagUpdate();
            CreateTagFilter3(text);
            FillTag3(text);
            // searchByWordKey(text);
            // searchByWordKeyAndTags(text);
            variable2= searchByWordKeyAndTags(text);
            // displayData(getRecipesByKeyWordUstensilsTag(text));
            ingred= getUstensils(variable2);
            // console.log("variable  ", variable6, "tag ", text);
            //   console.log("INGRED ", ingred3);
            fillUstensils(ingred);
        }
    }
}
}


function recipesTagUpdate() {
    recipesTagFiltered = recipesTagFilter();
    // recipesInputReload();
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
        if (listOfAppliancesSelected.size > 0 ) {
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
    document.getElementById('rectangle_blue').style.display='flex';
    
}

var i=0;
function CreateTagFilter(tagFilter) {
    i++;
    var elem2 = document.createElement('div');
    elem2.setAttribute("id", "labelTag"+ i.toString());

    elem2.innerHTML = tagFilter;    
      console.log(" oui ", elem2);
    const img = document.createElement("img");
                  img.src ="./assets/Vector2.png";
                  img.alt = "";
                  img.setAttribute("onclick", "suppressTag(event)")
                  elem2.appendChild(img);
    
   
    document.getElementById('rectangle_blue').style.display='flex';
    document.getElementById('rectangle_blue').appendChild(elem2);
}




// supprime de l'affichage le tag cliqué
function suppressTag(event)
{
  event.target.parentNode.remove();
  filterRecipes();
}

 function searchRecipesByTarget(targetTag, type) {
    
    if(type === "ingredient") {
            let recettes = getRecipesByTarget();
            let recettesWithtouDoublons = getRecipesWithoutDoublons(recettes);
            console.log("taille ", recettesWithtouDoublons.length);
            displayData(recettesWithtouDoublons);
            fillIngredients(getIngredients(recettesWithtouDoublons));

    } else if(typeOfTag === "appareil") {
        // displayData(getRecipesByKeyWordAppareilsTag(targetTag));

    } else if(typeOfTag === "ustensil") {
        // displayData(getRecipesByKeyWordUstensilsTag(targetTag));

    }
    
 }
  

let tabRecettes = [];
let recettesFiltered;
let recettes;
function getRecipesByTarget() {
  if(compteur > 1) {
   return variable3;
  } else {
    return variable2;
  }
  
}

function getRecipesByMap() {
   for(let i = 0; i < recipes.length; i++) {
       for(let j = 0; j < tab.length; j++) {
           recipes.map((recipe) => {
           recettesFiltered = recipes.filter((recipe) => recipe.name !== tab[j].name);
           // console.log("RECIPE ", recipe);
           return recettesFiltered;
           });
       }
   }    
}
