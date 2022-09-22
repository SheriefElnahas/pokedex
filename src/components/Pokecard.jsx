import React from "react";
import "./Pokecard.css";

function Pokecard({ name, img, type, exp }) {
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img src={img} alt="" className="Pokecard-img" />
      <div className="Pokecard-bottom">
        <p className="Pokecard-type"><span>Type :</span>  {type}</p>
        <p className="Pokecard-exp"><span>Exp :</span> {exp}</p>
      </div>
    </div>
  );
}

export default Pokecard;
