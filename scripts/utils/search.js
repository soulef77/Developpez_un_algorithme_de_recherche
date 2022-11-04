
// Cette fonction permet de retourner la valeur de l'input de la barre de recherche
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("form-control").value;
    return input;
}

let tab=[];
// Fonction de recherche dans le titre de la recette, la liste des ingrédients, et dans la description
function searchByWordKey(word) {
wordTest= word.toUpperCase();

    if(word.length >= 3) {
       
        for(let i = 0; i < recipes.length; i++) {
    
        if((recipes[i].name.indexOf(word) > -1 ) || 
            (recipes[i].ingredients.indexOf(word) > -1) || 
            (recipes[i].description.indexOf(word) > -1))  {
                tab.push(getRecipesByKeyWord(word));
                
            }
        
        
       
    

    if(tab.length === 0) {
        console.log(" recipes 2 ", getRecipesByKeyWord(word));
        // console.log(" oui");
        displayData3(getRecipesByKeyWord(word));
        document.getElementById("recipes-not-found").style.display= "none";
    } else {  
    
    document.getElementById("recipes-not-found").style.display= "none";
    displayData(getRecipesByKeyWord(word));
    
    appa= getAppareils2(tab);
    fillAppareils2(appa);

    ustens= getUstensils(tab);
    fillUstensils(ustens);

    variable2=  getRecipesByKeyWordIngredients(tab[i]);
    ingred= getIngredients3(variable2);
    fillIngredients3(ingred);
            }
    
    if(tab.length <= 0 && word !=null) {
        document.getElementById("recipes-not-found").style.display= "block";
            }
        }
    }
}