const pokemonList = document.getElementById('pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(data => {
    const pokemon = data.results;
    pokemon.forEach(pokemon => {
      const listItem = document.createElement('li');
      listItem.textContent = pokemon.name;
      pokemonList.appendChild(listItem);
    });
  })
  .catch(err => console.error("Capture des pokémons impossible", err));
