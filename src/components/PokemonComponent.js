import React from "react";

function PokemonComponent(props) {
  const { id, name, type, base } = props.pokemon;
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/pokemonImage/1.png"}></img>
      <div>{name.english}</div>
      <div>
        <span>{type[0]}</span>
        <span> </span>
        <span>{type[1]}</span>
      </div>
      <div>HP: {base.HP}</div>
      <div>Attack: {base.Attack}</div>
      <div>Defence: {base.Defence}</div>
      <div>SpAttack: {base.SpAttack}</div>
      <div>SpDefence: {base.SpDefence}</div>
      <div>Speed: {base.Speed}</div>
    </div>
  );
}

export default PokemonComponent;
