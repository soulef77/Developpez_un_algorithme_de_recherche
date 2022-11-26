// Partie Ingredients
function removeDuplicates(colors) {
    let unique = {};
    colors.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  function removeDuplicate(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

function removesDuplicate(string)
{
   return string.split('')
    .filter(function(item, pos, self)
    {
      return self.indexOf(item) == pos;
    }
   ).join('');
}
 
function deleteDuplicates (array) {
    let cleanDuplicate = [];
    array.forEach((item) => {
      cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
      return cleanDuplicate;
    });
  };

function find_unique_characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
        if(unique.indexOf(string[i])==-1){
            unique += string[i];
        }
    }
    return unique;
}
div = document.getElementById("ingredients_dropdown_menu");
function getIngredients(argument) {
    let ingredients = [];
    for (let i = 0; i < argument.length; i++) {
        ingredients.push(argument[i].ingredients);
        // console.log(" TESTTTT ", argument[i].ingredients);
        }
    var unique = ingredients.filter((x, i) => ingredients.indexOf(x) === i);
    let ingredientsListArray = [...new Set(unique)];
    return ingredientsListArray;
    
}

function getIngredients2(argument) {
let recipesSolution= [];
for (let i = 0; i < argument.length; i++) {
        recipesSolution.push(argument[i]['ingredients']);
    }
    
    let ingredientsListArray = [...new Set(recipesSolution)];
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
    let txtValue5 = [];
    let unique = [];
    for(let i= 0; i< argument3.length; i++) {
       txtValue5.push(argument3[i].ingredient);
           
    }
    
    unique= removeDuplicates(txtValue5);
    for(let i= 0; i< unique.length; i++) {
        el = document.createElement("div");
        el.setAttribute("class", "ingred");
        el.textContent = unique[i];
        div.appendChild(el);
        el.setAttribute("onclick", "addIngredientTag(event)");
        div.appendChild(el);
        }
        txtValue5 = [];
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

  filterRecipes() && filterRecipes2();
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

div = document.getElementById("ustensils_dropdown_menu");
let ustensilVariable = [];
function getUstensils(argument) {
    let ustensils = [];
    for (let i = 0; i < argument.length; i++) {
        ustensils.push(argument[i].ustensils);
        
        }
    return ustensils;
       
}

let ustensilVariable2 = [];
let ustensilVariable3 = [];
function fillUstensils(argument2) {
    // document.getElementById("ustensils_dropdown_menu").innerHTML = ""; 
    for(let i= 0; i< argument2.length; i++) {
       ustensilVariable2.push(argument2[i]);
    }

    ustensilVariable3 = removeDuplicate(ustensilVariable2);
    
    for(let i= 0; i< ustensilVariable3.length; i++) {
        showUstensils(ustensilVariable3[i]);
        }
}

ustensilsArray = [];
ustensilsArray2  = [];
function SupprimDuplicate(ustensils) {
    ustensilsArray.push(ustensils);
    ustensilsArray2 = deleteDuplicates(ustensilsArray);
    return ustensilsArray2;
}


   
let txtValue7 = [];
let unique2 = [];
function showUstensils(argument3) {
    div = document.getElementById("ustensils_dropdown_menu");
   
    for(let i= 0; i< argument3.length; i++) {
        txtValue7.push(argument3[i]);
        // console.log(" VEIRIIFIFI 2 USTENDIL ", argument3[i]);
        }

        unique2=  Array.from(new Set(txtValue7));
            
    for(let i = 0; i < unique2.length; i++) {
        // console.log(" VEIRIIFIFI 2 USTENDIL 33 ", txtValue2[i]);
        el = document.createElement("div");
        el.setAttribute("class", "usten");
        el.textContent = unique2[i];
        // div.appendChild(el);
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

  
function showUstensils2(argument3) {

    //  console.log(" VEIRIIFIFI 2 ", argument3);
  
    div = document.getElementById("Ustensils_dropdown_menu");
    let txtValue3 = [];
    let unique3 = [];
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
        txtValue3 = [];
        unique3 = [];
}

function myFunction() {
    document.getElementById("ustensils_dropdown_menu").classList.toggle("show");
}

var i=0;
function CreateTagFilter3(tagFilter) {
    i++;
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
let variable3;

function addDropdownFilter(event) {
    const target = event.currentTarget;
    const text = target.textContent;
    const selectedFilters = document.querySelector(".filtersSelected");
    type = target.parentNode.dataset.type;
    const listType = type === "ingredient"  ? listOfIngredientsSelected : 
    type === "";
    // console.log("ok  pkoi pas ", target.parentNode.dataset.type , " 2 ", target," 3 ", text,"  4 ", type, " 5 ", selectedFilters);
    if(type ==="ingredient") {
        if (!listType.has(text)) {
                // listType.add(text);
                        
                // selectedFilters.appendChild(createDropdownFilterCard(text, type));
                recipesTagUpdate();
                CreateTagFilter(text);
                FillTag(text);
                filterRecipes() && filterRecipes2() && filterRecipes3() && filterRecipes4();
                
        }
    }
   

    const listType2 = type === "appareil"  ? listOfAppliancesSelected : 
    type === "";
  
    if(type=="appareil") {
    // console.log("ok  pkoi pas ", listType2, " ", target," ", text," ", type, " ", selectedFilters);
        if (!listType2.has(text)) {
            // listType2.add(text);
            recipesTagUpdate();
            CreateTagFilter2(text);
            FillTag2(text);
            filterRecipes() && filterRecipes2() && filterRecipes3() && filterRecipes4();
           
        }
    }
        
    
    const listType3 = type === "ustensil"  ? listOfUstensilsSelected : 
    type === "";
  
    if(type=="ustensil") {
    console.log("ok  pkoi pas ", listType3, " ", target," ", text," ", type, " ", selectedFilters);
    if (!listType3.has(text)) {
        // listType3.add(text);
        // selectedFilters.appendChild(createDropdownFilterCard(text, type));
        recipesTagUpdate();
        CreateTagFilter3(text);
        FillTag3(text);
        filterRecipes() && filterRecipes2() && filterRecipes3() && filterRecipes4();
        
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
  filterRecipes() && filterRecipes2();
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