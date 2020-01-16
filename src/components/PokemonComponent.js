import React from "react";

function determineColor(pType) {
  const types = [
    "grass",
    "poison",
    "fire",
    "flying",
    "water",
    "bug",
    "normal",
    "electric",
    "ground",
    "fairy"
  ];
  const availableClasses = [
    "greenBorder",
    "purpleBorder",
    "redBorder",
    "plumBorder",
    "blueBorder",
    "lightGreenBorder",
    "lightGreyBorder",
    "yellowBorder",
    "brownBorder",
    "lightPinkBorder"
  ];

  const indexOfTypeMatch = types.indexOf(pType.toLowerCase());
  const correctClass = availableClasses[indexOfTypeMatch];
  return correctClass;
}

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
        <span className={determineColor(String(type[0]))}>{type[0]}</span>
        <span> </span>
        <span className={determineColor(String(type[1]))}>{type[1]}</span>
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
