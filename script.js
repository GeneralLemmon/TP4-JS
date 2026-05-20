const pokemonList = document.getElementById("pokemon-list");
const loadPokemons = document.querySelectorAll;

fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
  .then((res) => res.json())
  .then((data) => {

    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      const pokemonCard = document.createElement("div")
      pokemonCard.className = "pokemon-card"
      const h2 = document.createElement("h2")
      h2.className = "pokemon-name"
      h2.textContent = pokemon.name
      pokemonCard.appendChild(h2)
      const main = document.querySelector("main")
      main.appendChild(pokemonCard)


    
    });
  });

  /*fetch("https://pokeapi.co/api/v2/ability/battle-armor")
    .then((res)=> res.json())
    .then((data)) => {

      const abilities =data.results;

      abilities.forEach((ability))
    }
      */
