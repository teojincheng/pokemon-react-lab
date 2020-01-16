import React from "react";

function PokemonComponent(props) {
  const { name, type, base } = props.pokemon;
  const index = props.index + 1;
  return (
    <div className="showAsInline border">
      <img
        className="imageSize"
        src={process.env.PUBLIC_URL + "/pokemonImage/" + index + ".png"}
      ></img>
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
