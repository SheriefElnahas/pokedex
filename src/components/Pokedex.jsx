import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
  const pokeElement = props.pokemons.map((pokemon) => {
    return (
      <Pokecard
        name={pokemon.name}
        type={pokemon.type}
        exp={pokemon.base_experience}
        key={pokemon.id}
        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
    );
  });
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-pokemons">{pokeElement}</div>
    </div>
  );
}

export default Pokedex;
