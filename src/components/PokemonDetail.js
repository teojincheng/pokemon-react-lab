import React from "react";
import styles from "./PokemonCard.css";
import { PokemonType } from "./PokemonType";
import pokemonData from "../pokemon/pokemon";

function PokemonDetails(props) {
  //const index = props.index + 1;
  const pokemonId = props.match.params.pokemonId;
  const currentPokemon = pokemonData.find(
    pokemon => pokemon.id === Number(pokemonId)
  );

  return (
    <div>
      <img
        className="pokemon-card__image"
        src={process.env.PUBLIC_URL + "/pokemonImage/" + pokemonId + ".png"}
        alt={currentPokemon.name}
      ></img>
      <div className="pokemon-name">{currentPokemon.name.english}</div>
      <div>
        {currentPokemon.type.map(t => (
          <PokemonType type={t}></PokemonType>
        ))}
      </div>
      <div>
        {Object.entries(currentPokemon.base).map(([key, value]) => (
          <div>
            {key}: {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
