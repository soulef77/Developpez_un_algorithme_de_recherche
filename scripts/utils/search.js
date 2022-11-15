
// Cette fonction permet de retourner la valeur de l'input de la barre de recherche
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("form-control").value;
    return input;
}

let tab = [];
// Fonction de recherche dans le titre de la recette, la liste des ingrédients, et dans la description
function searchByWordKey(word) 
{
    if(word.length >= 3) 
    {
        recipesSection.innerHTML = "";
        word = word.toLowerCase();
      
        for(let i = 0; i < recipes.length; i++) 
        {
            if((recipes[i].name.toLowerCase().indexOf(word) > -1 ) || 
                (recipes[i].ingredients.find((recipe) => recipe.ingredient.toLowerCase() == word)) || 
                (recipes[i].description.toLowerCase().indexOf(word) > -1))  
            {
                tab.push(recipes[i]);
            }
        }
   
        if(tab.length === 0) 
        {
            document.getElementById("recipes-not-found").style.display= "block";
        }
        else 
        {  
            document.getElementById("recipes-not-found").style.display= "none";
            displayData(tab);

            appa= getAppareils(tab);
            fillAppareils(appa);
           
            ingred= getIngredients(tab);
            fillIngredients(ingred);

            ustens= getUstensils(tab);
            fillUstensils(ustens);

        }
    }
}

// Fonction de recherche dans le titre de la recette, la liste des ingrédients, et dans la description
function searchByWordKeyAndTags(word, event) 
{    
    if(word.length >= 3) 
    {
        recipesSection.innerHTML = "";
        word = word.toLowerCase();
        tab = [];
      
        for(let i = 0; i < recipes.length; i++) 
        {
            if((recipes[i].name.toLowerCase().indexOf(word) > -1 ) || 
                (recipes[i].ingredients.find((recipe) => recipe.ingredient.toLowerCase() == word)) || 
                (recipes[i].description.toLowerCase().indexOf(word) > -1))  
            {
                tab.push(recipes[i]);

            } else 
               
                    if((type == "ingredient")) {
                        if(recipes[i].ingredients.find((recipe) => recipe.ingredient.toLowerCase() == word)) {
                        tab.push(recipes[i]);
                        }
                    } 

                else {

                    if(type== "appareil") {
                        if(recipes[i].appliance.toLowerCase().indexOf(word) > -1) {
                            tab.push(recipes[i]);
                            }
                    
                    }

                else {

                    if((type == "ustensil")) {
                        if(recipes[i].ustensils.find((recipe) => recipe.ustensils == word)) {
                            tab.push(recipes[i]);
                            }
                    }

               
            }
              
        }
    }
        
   
        if(tab.length === 0) 
        {
            document.getElementById("recipes-not-found").style.display= "block";
        }
        else 
        {  
            document.getElementById("recipes-not-found").style.display= "none";
            displayData(tab);

            appa= getAppareils(tab);
            fillAppareils(appa);
           
            ingred= getIngredients(tab);
            fillIngredients(ingred);

            ustens= getUstensils(tab);
            fillUstensils(ustens);

        }
    }
}