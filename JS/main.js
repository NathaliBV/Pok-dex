import pokemons from '../data/pokemon/pokemon.js';
import { getType, getName, getEvolution } from './data.js';

//Mostrar todos los pokémons//

document.getElementById("types-menu").addEventListener('change', (e) => x(e.target.value))

document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => busquedaPorNombre(e.target.value))

document.getElementById("evolucion").addEventListener('click', evolution)

function renderPokemon(anyArray) {
    let pokemonsDiv = document.getElementById("pokemons-caja");
    pokemonsDiv.innerHTML = `
    ${anyArray.map((pokemon) => `
    <div class="pokemon-item">
        <img src="${pokemon["img"]}" class="pokemon-img" id="img-poke" />
        <div class="text-name">
        <h3 class="pokemon-name">${pokemon["name"]}</h3>
        </div>
        <div class="text-number">
        <p>${pokemon["num"]}</p>
        <p>${pokemon["type"]}</p>
    
        </div>
    </div>
  `).join("")}
      `
  }

renderPokemon(pokemons)

//Filtrar por tipo//
const filtrarTipo = (event) => {
    let typeArray = getType(pokemons, event);
    renderPokemon(typeArray)
}

document.getElementById("types-menu").addEventListener('change', (e) => filtrarTipo(e.target.value))

//Búsqueda por nombre//
const busquedaPorNombre = (event) => {
    let typeArray = getName(pokemons, event);
    renderPokemon(typeArray)
}

document.getElementsByName("pokemon-name")[0].addEventListener('change', (e) => busquedaPorNombre(e.target.value))

  //Evolución//

  function evolution() {
        let name = document.getElementById("poke-name").value;
        let pokemonEvolution = getEvolution(pokemons, name);
        renderPokemon(pokemonEvolution)
    
      }

document.getElementById("evolucion").addEventListener('click', evolution)

//Show More//

function showMore() {
    document.getElementById('id01').style.display='block';
    let pokemos_name = this.getElementsByClassName("pokemon-name")[0].textContent;
    let pokemon = getName(pokemons, pokemos_name)[0];
    document.getElementById("img").src = pokemon.img;
    document.getElementById("name").textContent = pokemon.name;
    document.getElementById("type").textContent = pokemon.type;
    document.getElementById("poke-name-more").textContent = pokemon.height;
    document.getElementById("weight").textContent = pokemon.weight;
    document.getElementById("poke-spawn_chance-more").textContent = pokemon.spawn_chance;
    document.getElementById("egg").textContent = pokemon.egg;
    document.getElementById("weaknesses").textContent = pokemon.weaknesses;
}

let allPokemons = document.getElementsByClassName("pokemon-item")
for (let i = 0; i < allPokemons.length; i++) {
    allPokemons[i].addEventListener('click',showMore)
}