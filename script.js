import {pokemonArray} from './data/pokemon.js';

const cardContianer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
  const {name, id, types, sprite} = pokemon;
  const typesString = types.join(" & ");
  const htmlString = `
  <div class="card">
    <img src="${sprite}" alt="sprite of ${name}" class="card__image">
    <div class="card__content">
      <h2 class="card__heading">${name}</h2>
      <p class="card__text">${name} (#${id}) is a ${typesString} type pokemon.</p>
    </div>
  </div>
  `
  cardContianer.innerHTML += htmlString;
});