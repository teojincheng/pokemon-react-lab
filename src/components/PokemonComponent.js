import React from "react";
import styles from "./PokemonCard.css";
import { PokemonType } from "./PokemonType";

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
  const { id, name, type, base } = props.pokemon;
  //const index = props.index + 1;

  return (
    <div className="pokemon-card">
      <img
        className="pokemon-card__image"
        src={process.env.PUBLIC_URL + "/pokemonImage/" + id + ".png"}
      ></img>
      <div className="pokemon-name">{name.english}</div>
      <div>
        {type.map(t => (
          <PokemonType type={t}></PokemonType>
        ))}
      </div>
      <div>
        {Object.entries(base).map(([key, value]) => (
          <div>
            {key}: {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonComponent;
