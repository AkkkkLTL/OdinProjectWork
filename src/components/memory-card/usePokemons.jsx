import { useState } from "react";

export default function usePokemons() {
  const [pokemonsPlayWith, setPokemonsPlayWith] = useState([]);
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState([]);

  const POSSIBLE_POKEMONS = 721;

  // get singal pokemon card data
  const getPokemon = async ({id}) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites } = await res.json();
    const image = sprites["front_default"];
    return { name, image, id, clicked: false };
  }

  // get amount pokemons cards according level
  const getRandomPokemons = async (amount) => {
    console.log(`execute getRandomPokemons ${amount}`);
    const isFirstVisit = localStorage.getItem("visited") === null;
    if (isFirstVisit) localStorage.setItem("visited", true);
    
    // --------------- test code ----------
    let pokemonsAmount = JSON.parse(localStorage.getItem("pokemons")) || [];

    if (pokemonsAmount.length == 0) {
      while (pokemonsAmount.length < amount) {
        const randomId = Math.floor(Math.random() * POSSIBLE_POKEMONS) + 1; // [1, 721]
        if (!isDuplicateId(pokemonsAmount, randomId))
          pokemonsAmount.push({id: randomId});
      }
      await Promise.all(pokemonsAmount.map(getPokemon)).then((values) => 
        localStorage.setItem("pokemons", JSON.stringify(values))
      );
    }
    console.log(`pokemonsAmout ${JSON.stringify(pokemonsAmount)}`);
    return pokemonsAmount;
  }

  const isDuplicateId = (pokemonsArray, curId) => {
    return pokemonsArray.find(({id}) => id === curId);
  }

  const shufflePokemons = (pokemons, display) => {
    const pokemonsToShow = [];
    let clicked = 0;
    
    console.log(`shuffle pokemons ${JSON.stringify(pokemons)}`);
    while (pokemonsToShow.length < display) {
      const randIndex = Math.floor(Math.random() * pokemons.length);
      const character = pokemons[randIndex];
      // avoid duplication and the cards's clicked is not over the once display
      if (!isDuplicateId(pokemonsToShow, character.id) 
        && (clicked < display - 1 || !character.clicked)) {
          pokemonsToShow.push(character);
          clicked += +character.clicked;
      }
    }
    return pokemonsToShow;
  }

  return { 
    pokemonsPlayWith, setPokemonsPlayWith, 
    pokemonsToDisplay, setPokemonsToDisplay,
    getRandomPokemons, shufflePokemons };
}
