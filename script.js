import {pokemonArray} from './data/pokemon.js';

const cardContainer = document.querySelector(".card-container");
const searchInput = document.getElementById("search-box");
const dropdown = document.getElementById("types");

const showPokemon = (pokeArray) => {
  //clear card-container
  cardContainer.innerHTML = "";
  pokeArray.forEach((pokemon) => {
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
}

//initially show all pokemon
showPokemon(pokemonArray);

//filter pokemon by name
const filterByName = (pokeArr, name) => {
  return pokeArr.filter((pokemon) => pokemon.name.includes(name));
}

//when anything is typed filter and show pokemon
searchInput.addEventListener("input",() => showPokemon(filterByName(pokemonArray,searchInput.value)));

//filter pokemon by type
const filterByType = (pokeArr, type) => {
  if(type != "") {
    return pokeArr.filter((pokemon) => pokemon.types.includes(type));
  } else {
    return pokeArr;
  }
}

dropdown.addEventListener("change", () => showPokemon(filterByType(pokemonArray,dropdown.value)));