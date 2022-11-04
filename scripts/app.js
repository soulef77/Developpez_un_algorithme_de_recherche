// Partie Ingredients

div = document.getElementById("ingredients_dropdown_menu");
function getIngredients(argument) {
    let ingredients = [];
  
    if(argument) {
    for (let i = 0; i < argument.length; i++) {
        ingredients.push(argument[i].ingredients);
        // console.log(" TESTTTT ", argument[i].ingredients);
        }
      }

     let ingredientsSet = [...new Set(ingredients)];
     return ingredientsSet;
    
}

function getIngredients2(argument) {
    let recipesSolution= [];
  
    // for(let j=0; j < argument.length; j++) {
        for (let i = 0; i < argument.length; i++) {
            recipesSolution.push(argument[i]['ingredients']);
   
        
    console.log(" ok ", argument[i]['ingredients']);
        }
    ingredientsListArray = [...new Set(recipesSolution)];
    return ingredientsListArray;
   }
  
function getIngredients3(argument) {
    let ingredients = [];
  
    if(argument) {
    for (let i = 0; i < argument.length; i++) {
        ingredients.push(argument[i]);
        //  console.log(" TESTTTT ", argument[i]);
        }
      }

     let ingredientsSet = [...new Set(ingredients)];
     return ingredientsSet;
    
}


function fillIngredients(argument2) {

//  console.log(" VEIRIIFIFI COOL ", argument2);
   
    for(let i= 0; i< argument2.length; i++) {
            showIngredients(argument2[i]);
            }
        
}

function fillIngredients2(argument2) {

//  console.log(" VEIRIIFIFI 3 ", argument2);
   
for(let i= 0; i< argument2.length; i++) {
    showIngredients2(argument2[i]);
}
        
}
  
function fillIngredients3(argument2) {

    // console.log(" VEIRIIFIFI 3 ", argument2);
   
    for(let i= 0; i< argument2.length; i++) {
            showIngredients3(argument2);
        }
        
}

function showIngredients(argument3) {

    // console.log(" VEIRIIFIFI 2 ", argument3);
    if(argument3) {
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
        el.value = unique[i];
        div.appendChild(el);

        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
        txtValue = [];
        unique = [];
    }
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
        console.log(" value ", txtValue );  
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
        el.value = txtIngred[i];
        a[i].innerHTML= txtIngred[i];
        div.appendChild(el);
        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
    }
    }
}

function showIngredients3(argument3) {

    // console.log(" VEIRIIFIFI 2 ", argument3);
   if(argument3) {
   div = document.getElementById("ingredients_dropdown_menu");
  
   let txtValue = [];
   let unique = [];
   for(let i= 0; i< argument3.length; i++) {
      txtValue.push(argument3[i]);
    //   console.log(" value  333 ", txtValue);  
   }

   unique= [...new Set(txtValue)];
   const boxes = document.getElementsByClassName("ingred");
   a = div.getElementsByTagName("div");
   for(let i=0; i < boxes.length; i++) {
        a[i].innerHTML= "";
   }

    for(let j=0; j < unique.length; j++) {
       if(txtValue[j].indexOf(a[j].innerText) > -1) {
           // console.log(" YOUPI ");
           el = document.createElement("div");
           el.setAttribute("class", "ingred");
           el.textContent = unique[j];
           el.value = unique[j];
           a[j].value= unique[j];
           div.appendChild(el);
           el.setAttribute("onclick", "addDropdownFilter(event)");
           div.appendChild(el);
       }
    }
   }
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

// // List Tags Ingredients for search in dropdown input
// function renderIngredientsListFiltred(ingredientsListArray) {
// 	const newItemIngredient = ingredientsListArray
// 		.map(
// 			item => `
//         <a href="#" class="list-tags-item ingredients col-1 list-group-item list-group-item-action bg-transparent border-0 text-white m-0 p-0 px-4"
//             arial-label="Rechercher des recettes avec l'ingrédient: '${item}'" data-color="blue" data-value="${item}" onclick=">
//             ${item}
//         </a>
//         `
// 		)
// 		.join('');

// 	ingredientsListTags.innerHTML = newItemIngredient;
// }

let ingred;
let variable2;
function filterFunction2(tagFilter) {
  
        variable2=  getRecipesByKeyWordIngredients(tagFilter);
        // console.log("variable  ", variable2, "tag ", tagFilter);
        ingred= getIngredients3(variable2);
        // console.log("INGRED ", ingred);
       fillIngredients3(ingred);
   
}


let listOfIngredientsSelected = new Set();
let listOfUstensilsSelected = new Set();
let listOfAppliancesSelected = new Set();

let listOfIngredientsFilteredTag = [];
let listOfUtensilsFilteredTag = [];
let listOfAppliancesFilteredTag = [];

let listOfIngredientsFilteredInput = [];
let listOfUtensilsFilteredInput = [];
let listOfAppliancesFilteredInput = [];

let recipesTagFiltered = recipes;
let recipesInputFiltered = recipesTagFiltered;
let recipesFiltered = recipesInputFiltered;

function addDropdownFilter(event) {
    const target = event.currentTarget;
    const text = target.textContent;
    const type = target.parentNode.parentNode.dataset.type;
    const selectedFilters = document.querySelector(".filtersSelected");
    
    const listType = type === "ingredient"  ? listOfIngredientsSelected : 
    type === "";
  
    if(type=="ingredient") {
    //  console.log("ok  pkoi pas ", listType, " ", target," ", text," ", type, " ", selectedFilters);
    if (!listType.has(text)) {
        listType.add(text);
        // selectedFilters.appendChild(createDropdownFilterCard(text, type));
        recipesTagUpdate();
        CreateTagFilter(text);
        FillTag(text);
        filterFunction2(text); 
        variable2=  getRecipesByKeyWordIngredients(text);
        displayData(variable2);

        variable2=  getRecipesByKeyWordIngredients(text);
        // console.log("variable  ", variable2, "tag ", tagFilter);
        ingred= getIngredients3(variable2);
        // console.log("INGRED ", ingred);
       fillIngredients3(ingred);
    }
}

    const listType2 = type === "appareil"  ? listOfAppliancesSelected : 
    type === "";
  
    if(type=="appareil") {
    // console.log("ok  pkoi pas ", listType2, " ", target," ", text," ", type, " ", selectedFilters);
    if (!listType2.has(text)) {
        listType2.add(text);
        // selectedFilters.appendChild(createDropdownFilterCard(text, type));
        recipesTagUpdate();
        CreateTagFilter2(text);
        FillTag2(text);
       let variable4= getRecipesByKeyWordAppareilsTag(text);
    //    console.log(" OOOOO ", variable3);
        displayData(getRecipesByKeyWordAppareilsTag(text));

       
        let variable3=  getRecipesByKeyWordIngredients(text);
       let ingred2= getAppareils(variable3);
        console.log("variable  ", variable3, "tag ", text);
          console.log("INGRED ", ingred2);
        fillAppareils(ingred2);
    }
    }
    
    const listType3 = type === "ustensil"  ? listOfUstensilsSelected : 
    type === "";
  
    if(type=="ustensil") {
    // console.log("ok  pkoi pas ", listType3, " ", target," ", text," ", type, " ", selectedFilters);
    if (!listType3.has(text)) {
        listType3.add(text);
        // selectedFilters.appendChild(createDropdownFilterCard(text, type));
        recipesTagUpdate();
        CreateTagFilter3(text);
        FillTag3(text);
        let variable6= getRecipesByKeyWord(text);
        displayData(getRecipesByKeyWordUstensilsTag(text));
        let ingred3= getUstensils(variable6);
        // console.log("variable  ", variable6, "tag ", text);
        //   console.log("INGRED ", ingred3);
        fillUstensils(ingred3);
    }
    }

    // if (listOfIngredientsSelected.size + listOfAppliancesSelected.size + listOfUstensilsSelected.size > 0) {
    //     selectedFilters.style.display = "flex";
    // } else { selectedFilters.style.display = ""; }
}


// function getDropdownsLists() {
//     const ingredients = document.querySelector(".ingredients_dropdown_menu .dropdownOptions .dropdown-menu .dropdownIngredients");
//     const appliance = document.querySelector(".dropdown.appliance .dropdownOptions");
//     const utensil = document.querySelector(".dropdown.utensil .dropdownOptions");

//     if(ingredients) {
//     ingredients.innerHTML = "";

//     dropdownFilterInput();

//     ingredients.appendChild(generateDropdownList(listOfIngredientsFilteredSearch));
//     appliance.appendChild(generateDropdownList(listOfAppliancesFilteredSearch));
//     utensil.appendChild(generateDropdownList(listOfUtensilsFilteredSearch));
// }
// }

// function generateDropdownList(list) {
//     const listItems = list.length / 3;
//     const generatedList = document.createDocumentFragment();

//     if (listItems != 0) {
//         for (let i = 1; i < listItems.length ; i++) {
//             var ul = document.createElement("ul")
//             // Formule pour savoir combien mettre d'objets à la ul
//             let currentListItems = i===1 ? Math.ceil(listItems) :
//             i===2 ? Math.round(listItems) :
//             Math.floor(listItems);
    
//             for (let j = (i - 1) * currentListItems; j <= (i * currentListItems) - 1; j++) {
//                 var li = document.createElement("li");
//                     li.setAttribute("onclick", "addDropdownFilter(event)")
//                     li.textContent = list[j];
//                 ul.appendChild(li);
//             }
            
//             generatedList.appendChild(ul);
//         }
//     } else {
//         var ul = document.createElement("ul")
//             var li = document.createElement("li");
//                 li.classList.add("nothingAvailable");
//                 li.textContent = "Aucun tag disponible";
//             ul.appendChild(li);
//         generatedList.appendChild(ul);
//     }

//     setTimeout(() => dropdownResize(),50);

//     return generatedList;
// }


// function dropdownFilterInput() {
//     [listOfIngredientsFilteredSearch,listOfAppliancesFilteredSearch,listOfUtensilsFilteredSearch] = [[],[],[]]
//     const inputs = document.querySelectorAll(".dropdown-menu .dropdownIngredients");
//     for (let i = 0; i < inputs.length; i++) {
//         const input = inputs.item(i);
//         inputValue = input.value.toLowerCase();
//         switch (input.parentNode.dataset.type) {
//             case "ingredient":
//                  for (let i = 0; i < listOfIngredientsFiltered.length; i++) {
//                     const item = listOfIngredientsFiltered[i].toLowerCase();
//                     if (item.includes(inputValue)) {
//                         listOfIngredientsFilteredSearch.push(item);
//                     }
//                 }
//                 break;
    
//             case "appliance":
//                 for (let i = 0; i < listOfAppliancesFiltered.length; i++) {
//                     const item = listOfAppliancesFiltered[i];
//                     if (item.includes(inputValue)) {
//                         listOfAppliancesFilteredSearch.push(item);
//                     }
//                 }
//                 break;
    
//             case "utensil":
//                 for (let i = 0; i < listOfUtensilsFiltered.length; i++) {
//                     const item = listOfUtensilsFiltered[i];
//                     if (item.includes(inputValue)) {
//                         listOfUtensilsFilteredSearch.push(item);
//                     }
//                 }
//                 break;
//         }
//     }
// }

// function dropdownOpen(dropdown) {
//     if ( !dropdown.classList.contains("dropdownOpen .dropdownIngredients") ) {
//        dropdownClose();
//        dropdown.classList.add("dropdownOpen");
//        dropdownResize();
//     }
// }

// function dropdownToggle(dropdown) {
//     if ( !dropdown.classList.contains("dropdownOpen") ) {
//         dropdownClose();
//         dropdown.classList.add("dropdownOpen");
//         dropdownResize();
//     } else {
//         dropdownClose();
//     }
// }

// function dropdownClose() {
//     const dropdownCurrentlyOpen = document.querySelectorAll(".dropdownOpen");

//     for (let i = 0; i < dropdownCurrentlyOpen.length; i++) {
//         dropdownCurrentlyOpen[i].classList.remove("dropdownOpen");
//         dropdownCurrentlyOpen[i].style.width = "";
//     }
// }

// function dropdownResize() {
//     const dropdown = document.querySelectorAll(".dropdown .dropdownIngredients");

//     for (let i = 0; i < dropdown.length; i++) {
//         const dropdownOptions = dropdown.item(i).querySelector(".dropdownOptions .dropdown-menu .dropdownIngredients");
//         dropdownOptions.style.width = "";
//         // dropdownOptions.style.width = dropdownOptions.offsetWidth + "px"; // Empêche le décalage d'un pixel coupé
//         // dropdown[i].style.width = dropdownOptions.offsetWidth + "px";
//     }
// }


// function createDropdownFilterCard(text, type) {
//     const filter = document.createElement("span");
//           filter.classList.add("filter", type);
//           filter.textContent = text[0].toUpperCase() + text.slice(1);;
//           filter.dataset.type = type;
//         const img = document.createElement("img");
//               img.src ="/assets/Vector2.png";
//               img.alt = "";
//               img.setAttribute("onclick", "removeDropdownFilter(event)")
//         filter.appendChild(img);
//     return filter;
// }

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

    // // Filtre dropdowns
    // [listOfIngredientsFilteredTag, listOfUtensilsFilteredTag, listOfAppliancesFilteredTag] = [...structureItems(itemsFiltered)];
    // [listOfIngredientsFiltered, listOfUtensilsFiltered, listOfAppliancesFiltered] = [listOfIngredientsFilteredTag, listOfUtensilsFilteredTag, listOfAppliancesFilteredTag];
    
    return itemsFiltered;
}


// async function structureData(recipes) {
//     [listOfIngredients, listOfUtensils, listOfAppliances] = [...structureItems(recipes)];
// }

// function structureItems(recipes) {
//     let setOfIngredients = new Set();
//     let setOfUtensils = new Set();
//     let setOfAppliances = new Set();
    
//     recipes.forEach(recipe => {
//         setOfAppliances.add(recipe.appliance.toLowerCase());
//         recipe.ingredients.forEach(ingredient => {
//             setOfIngredients.add(ingredient.ingredient.toLowerCase());
//         });
//         recipe.ustensils.forEach(utensil => {
//             setOfUtensils.add(utensil.toLowerCase());
//         });
//     });

//     return [[...setOfIngredients], [...setOfUtensils], [...setOfAppliances]]
// }


function FillTag(tagFilter) {

    // document.getElementById('labelTagIngredient').innerHTML= tagFilter;
    document.getElementById('rectangle_blue').style.display='block';
    
    //  filterFunction2(tagFilter); 
}

var i=0;
function CreateTagFilter(tagFilter) {
    i++;
    var elem2 = document.createElement('label');
    elem2.setAttribute("id", "labelTag"+ i.toString());

    elem2.innerHTML = tagFilter;    
      
    const img = document.createElement("img");
                  img.src ="/assets/Vector2.png";
                  img.alt = "";
                  img.setAttribute("onclick", "suppressTag(event)")
                  elem2.appendChild(img);
    
   
    document.getElementById('rectangle_blue').style.display='block';
    document.getElementById('rectangle_blue').appendChild(elem2);
}




// PArtie appareils

div = document.getElementById("appareils_dropdown_menu");
function getAppareils(argument) {
    let appareils = [];
  
    if(argument) {
    for (let i = 0; i < argument.length; i++) {
        appareils.push(argument[i].appliance);
        //  console.log(" TESTTTT ", argument[i].appliance);
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

    //  console.log(" VEIRIIFIFI ", argument2);
   
    for(let i= 0; i< argument2.length; i++) {
            showAppareils(argument2[i]);
            }
        
}

function showAppareils(argument3) {

    //  console.log(" VEIRIIFIFI 2 ", argument3);
    if(argument3) {
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
        el.value = unique[i];
        div.appendChild(el);

        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
        txtValue = [];
        unique = [];
    }
}


function fillAppareils2(argument2) {

    // console.log(" VEIRIIFIFI ", argument2);
   
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
        el.value = unique[i];
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
function CreateTagFilter2(tagFilter) {
    i++;
    var elem2 = document.createElement('label');
    elem2.setAttribute("id", "labelTag"+ i.toString());

    elem2.innerHTML = tagFilter;    
    const img = document.createElement("img");
                  img.src ="/assets/Vector2.png";
                  img.alt = "";
                  img.setAttribute("onclick", "suppressTag(event)")
                  elem2.appendChild(img);
    
   
    document.getElementById('rectangle_green').style.display='block';
    document.getElementById('rectangle_green').appendChild(elem2);
    //  filterFunction(tagFilter); 
}


function FillTag2(tagFilter) {
    // document.getElementById('labelTagAppareil').innerHTML= tagFilter;
    //  filterFunction2(tagFilter); 
}


// Partie ustensiles

div = document.getElementById("ustensils_dropdown_menu");
function getUstensils(argument) {
    let ustensils = [];
  
    if(argument) {
    for (let i = 0; i < argument.length; i++) {
        ustensils.push(argument[i].ustensils);
    //  console.log(" TESTTTT ", argument[i].ustensils);
        }
      }

     let ustensilsSet = [...new Set(ustensils)];
     return ustensilsSet;
    
}

function fillUstensils(argument2) {
  for(let i= 0; i< argument2.length; i++) {
        // console.log(" VEIRIIFIFI  USTENSILS ", argument2[i]);
            showUstensils(argument2[i]);
           }
   }

   let txtValue2 = [];
   let unique2= [];
 
function showUstensils(argument3) {
     
    if(argument3) {
        div = document.getElementById("ustensils_dropdown_menu");
    
        for(let i= 0; i< argument3.length; i++) {
        txtValue2.push(argument3[i]);
        // console.log(" VEIRIIFIFI 2 USTENDIL ", argument3[i]);
        }

        unique2=  [...new Set(txtValue2)];

        const boxes = document.getElementsByClassName("usten");
        a = div.getElementsByTagName("div");
        for(let i=0; i < boxes.length; i++) {
            a[i].innerHTML= "";
        }
        
        for(let i= 0; i< unique2.length; i++) {
            // console.log(" VEIRIIFIFI 2 USTENDIL 33 ", txtValue2[i]);
            el = document.createElement("div");
            el.setAttribute("class", "usten");
            el.textContent = unique2[i];
            el.value = unique2[i];
            el.setAttribute("onclick", "addDropdownFilter(event)");
            div.appendChild(el);
            }
       
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
    if(argument3) {
    div = document.getElementById("ustensils_dropdown_menu");
   
  
    for(let i= 0; i< argument3.length; i++) {
       txtValue3.push(argument3[i].ustensils);
        //   console.log(" value ustensil 22 ", txtValue3) 
    }


    const boxes = document.getElementsByClassName("usten");
    a = div.getElementsByTagName("div");
    for(let i=0; i < boxes.length; i++) {
         a[i].innerHTML= "";
    }


    unique3=  [...new Set(txtValue3)];
    for(let i= 0; i< unique3.length; i++) {

        el = document.createElement("div");
        el.setAttribute("class", "usten");
        el.textContent = unique3[i];
        el.value = unique3[i];
        a[i].textContent = unique3[i];
        div.appendChild(el);

        el.setAttribute("onclick", "addDropdownFilter(event)");
        div.appendChild(el);
        }
        
    }
}

function myFunction() {
    document.getElementById("ustensils_dropdown_menu").classList.toggle("show");
}

var i=0;
function CreateTagFilter3(tagFilter) {

    var elem2 = document.createElement('label');
    elem2.setAttribute("id", "labelTag"+ i.toString());
    elem2.innerHTML = tagFilter;    
    const img = document.createElement("img");
                  img.src ="/assets/Vector2.png";
                  img.alt = "";
                  img.setAttribute("onclick", "suppressTag(event)")
                  elem2.appendChild(img);
    
   
    document.getElementById('rectangle_red').style.display='block';
    document.getElementById('rectangle_red').appendChild(elem2);
    i++;
}


function FillTag3(tagFilter) {

    // document.getElementById('labelTagUstensil').innerHTML= tagFilter;
    // const img = document.createElement("img");
    // img.src ="/assets/Vector2.png";
    // img.alt = "";
    // img.setAttribute("onclick", "suppressTag(event)");
    // document.getElementById('labelTagUstensil').appendChild(img);
  
}

  // supprime de l'affichage le tag cliqué
function suppressTag(e){
    console.log(e.target.parentNode , "  OK  ", e.currentTarget);
    e.target.parentNode.remove();
    i= parseInt(i.toString());
    fillIngredients(e.target.parentNode);
    
 }
  