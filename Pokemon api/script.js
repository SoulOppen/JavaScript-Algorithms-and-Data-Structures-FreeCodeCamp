const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokeImg = document.getElementById("poke-img");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const basicEndPoint = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const search = (pokemon) => {
  fetch(`${basicEndPoint}${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      pokeImg.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;
      pokemonName.innerText = data.name;
      pokemonId.innerText = data.id;
      weight.innerText = data.weight;
      height.innerText = data.height;
      types.innerHTML = data.types
        .map((item) => `<p>${item.type.name.toUpperCase()}</p>`)
        .join(" ");
      hp.innerText = data.stats[0].base_stat;
      attack.innerText = data.stats[1].base_stat;
      defense.innerText = data.stats[2].base_stat;
      specialAttack.innerText = data.stats[3].base_stat;
      specialDefense.innerText = data.stats[4].base_stat;
      speed.innerText = data.stats[5].base_stat;
    })
    .catch((_err) => alert("Pokémon not found"));
};

searchButton.addEventListener("click", () =>
  search(searchInput.value.toLowerCase())
);
