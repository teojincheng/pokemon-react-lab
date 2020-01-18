import React from "react";
import "./PokemonType.css";
/**
 * Original method shown in class to return class name for css
 * @param {*} type: the pokemon's type
 */
const getTypeClassName = type => {
  switch (type.toLowerCase()) {
    case "fire":
      return "fire";

    case "water":
      return "water";

    case "grass":
      return "grass";

    case "poison":
      return "purple";

    case "flying":
      return "plum";

    case "bug":
      return "light-green";

    case "electric":
      return "yellow";

    case "ground":
      return "brown";

    case "fairy":
      return "light-pink";

    default:
      return "default";
  }
};

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

export const PokemonType = ({ type }) => {
  return (
    <span
      className={`pokemon-card__type pokemon-type ${getTypeClassName(type)}`}
    >
      {type}
    </span>
  );
};
