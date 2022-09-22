import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function paddNum(num) {
    return ("000" + num).slice(-3);
}



function Pokedex(props) {
  const pokeElement = props.pokemons.map((pokemon) => {
    return (
      <Pokecard
        name={pokemon.name}
        type={pokemon.type}
        exp={pokemon.base_experience}
        key={pokemon.id}
        img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddNum(pokemon.id)}.png`}
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
