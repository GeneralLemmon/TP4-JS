const pokemonList = document.getElementById('pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon/1/')
  .then(res => res.json())
  .then(data => { 
    const pokemonCard = document.querySelector('.pokemon-card');
    pokemonCard.querySelector('.pokemon-id').textContent = `#${data.id}`;
    pokemonCard.querySelector('.pokemon-name').textContent = data.name;
    const typesContainer = pokemonCard.querySelector('.types-container');
    data.types.forEach(typeInfo => {
      const typeBadge = document.createElement('span');
      typeBadge.classList.add('type-badge');
      typeBadge.textContent = typeInfo.type.name;
      typesContainer.appendChild(typeBadge);
    });
  })
  .catch(err => console.error("Capture du pokémon impossible", err));