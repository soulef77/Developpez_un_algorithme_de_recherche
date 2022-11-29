let Recipescontainer;
// Cette fonction permet de définir la page d'accueil des plats et ses informations.
function recipeFactory(data) {
    const { appliance, description, id, ingredients, ingredient, quantity, unit, name, servings, time, ustensils } = data;
    let ingredientCard = '';
    let ingredientCard2 = '';
    if (ingredients) {
        ingredients.forEach(ingredient => {

            // Conversion les unités des ingrédients
            let unit = ingredient.unit;
            if (ingredient.unit === 'grammes') {
                unit = 'g';
            }
            if (ingredient.unit === 'cuillères à soupe') {
                unit = 'cuillères';
            }
            if (ingredient.unit === 'cuillère à soupe') {
                unit = 'cuillère';
            }

            ingredientCard2 += `${ingredient.ingredient} \r\n`;
            ingredientCard += `${ingredient.quantity || unit ? ':' : ' '} `;
            ingredientCard += ` ${ingredient.quantity ? ingredient.quantity : ' '} ${unit ? unit : ' '} \r\n`;
        });
    }

    const img = "/assets/Vector3.png";
    const getRecipeCardDOM = () => {

        const d = document.createElement("div");
        d.setAttribute("class", "card");
        const o = document.createElement("div");
        o.setAttribute('class', "card-body");
        const a = document.createElement("div");
        a.setAttribute('class', 'card-img-top');
        d.appendChild(a);
        const q = document.createElement("div");
        q.setAttribute('class', "card-title");
        q.innerText = `${name}`;
        const i = document.createElement("img");
        i.setAttribute('class', "icone_duree");
        i.src = img;
        i.alt = "icone de durée";
        d.appendChild(i);

        d.appendChild(q);
        d.appendChild(o);
        o.appendChild(q);

        const r = document.createElement("p");
        r.setAttribute('class', "duree");
        r.innerText = `${time}` + ` min`;
        d.appendChild(r);
        o.appendChild(r);
        const s = document.createElement("div");
        s.setAttribute('class', "liste");

        const t = document.createElement('ul');
        const w = document.createElement("li");
        w.setAttribute('id', "ingredList")
        w.innerText = `${ingredientCard2}`;
        w.style.fontWeight = "normal";
        const z = document.createElement("br");
        w.appendChild(z);
        const y = document.createElement("div");
        const x = document.createElement("li");
        x.innerText = `${ingredientCard}`;
        w.style.fontWeight = "bold";
        o.appendChild(w);
        t.appendChild(w);
        o.appendChild(x);
        t.appendChild(x);
        t.appendChild(y);
        s.appendChild(t);
        d.appendChild(s);
        o.appendChild(s);

        const u = document.createElement("p");
        u.setAttribute("class", "card-text");
        u.innerText = `${description}`;
        d.appendChild(u);
        o.appendChild(u);

        return d;

    }
    return { appliance, description, id, ingredients, ingredient, quantity, unit, name, servings, time, ustensils, getRecipeCardDOM };
}

function recipeSingleFactory(data) {
    const { appliance, description, id, ingredients, ingredient, quantity, unit, name, servings, time, ustensils } = data;
    let ingredientCard = '';
    if (ingredients) {
        ingredients.forEach(ingredient => {

            // Conversion les unités des ingrédients
            let unit = ingredient.unit;
            if (ingredient.unit === 'grammes') {
                unit = 'g';
            }
            if (ingredient.unit === 'cuillères à soupe') {
                unit = 'cuillères';
            }
            if (ingredient.unit === 'cuillère à soupe') {
                unit = 'cuillère';
            }

            ingredientCard += `<li><strong>${ingredient.ingredient}</strong>`;
            ingredientCard += `<strong>${ingredient.quantity || unit ? ':' : ''}</strong> `;
            ingredientCard += ` ${ingredient.quantity ? ingredient.quantity : ''} ${unit ? unit : ''}</li>`;
        });
    }

    // Fonction de la création des cartes des plats
    const getRecipeCardDOM = () => `
    <div class="card">
    <img class="card-img-top" src="..." alt="${name}">
      <div class="card-body">
          <div class="card-title">${name}</div><img src="/assets/Vector3.png" class="icone_duree" alt="icone de durée">
          <p class="duree">${time} min</p>
              <div class="liste">
                  <ul>
                     ${ingredientCard}                      
                  </ul>
              </div>
      </div>
      <p class="card-text">${description}</p>
  </div>
  `;
    return { appliance, description, id, ingredients, ingredient, quantity, unit, name, servings, time, ustensils, getRecipeCardDOM };
}
