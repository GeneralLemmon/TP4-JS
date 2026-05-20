fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Capture des pokémons impossible", err));

  