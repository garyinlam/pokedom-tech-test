import {pokemonArray} from './data/pokemon.js';

const cardContainer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
  //pokemon object to HTML
  //get object properties
  const {name, id, types, sprite} = pokemon;
  //capitalise first letter of name
  const nameCap = name.slice(0,1).toUpperCase()+name.slice(1);
  //convert types from array to string
  const typesString = types.join(" & ");
  //create html to insert
  const htmlString = `
  <div class="card">
    <img src="${sprite}" alt="sprite of ${nameCap}" class="card__image">
    <div class="card__content">
      <h2 class="card__heading">${nameCap}</h2>
      <p class="card__text">${nameCap} (#${id}) is a ${typesString} type pokemon.</p>
    </div>
  </div>
  `
  //insert html into card-container at end
  cardContainer.innerHTML += htmlString;
});