const pokemonList = document.getElementById("pokemon-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("submit");
const themeToggle = document.getElementById("theme-toggle");
const btnIcon = document.getElementById("btn-icon");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
  .then((res) => res.json())
  .then((data) => {
    
    const pokemons = data.results;

    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((detailRes) => detailRes.json())
        .then((pokemonDetails) => {
          const pokemonCard = document.createElement("div");
          pokemonCard.className = "pokemon-card";

          const h2 = document.createElement("h2");
          h2.className = "pokemon-name";
          h2.textContent = pokemonDetails.name;
          pokemonCard.appendChild(h2);

          const typesContainer = document.createElement("div");
          typesContainer.className = "pokemon-types";
          pokemonDetails.types.forEach((typeInfo) => {
            const typeSpan = document.createElement("span");
            typeSpan.className = `type-badge ${typeInfo.type.name}`;
            typeSpan.textContent = typeInfo.type.name.toUpperCase();
            typesContainer.appendChild(typeSpan);
          });
          pokemonCard.appendChild(typesContainer);

          const abilitiesContainer = document.createElement("div");
          abilitiesContainer.className = "pokemon-abilities";
          const abilitiesNames = pokemonDetails.abilities.map(
            (abilityInfo) => abilityInfo.ability.name,
          );
          abilitiesContainer.textContent =
            "Abilities: " + abilitiesNames.join(", ");
          pokemonCard.appendChild(abilitiesContainer);

          const main = document.querySelector("main");
          main.appendChild(pokemonCard);
        });
    });
  });

function filterPokemons() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".pokemon-card");

  cards.forEach((card) => {
    const pokemonName = card
      .querySelector(".pokemon-name")
      .textContent.toLowerCase();

    if (pokemonName.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterPokemons);
searchButton.addEventListener("click", filterPokemons);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      btnIcon.textContent = "☀️";
    } else {
      btnIcon.textContent = "🌙";
    }
  });
}
