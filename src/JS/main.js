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
        <img src="${pokemon["img"]}" class="pokemon-img" />
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

