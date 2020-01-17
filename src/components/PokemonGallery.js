import React from "react";
import pokemonData from "../pokemon/pokemon";
import PokemonComponent from "./PokemonComponent";

export default () => {
  return (
    <div className="displayGallery">
      {pokemonData.map(p => {
        return <PokemonComponent pokemon={p} />;
      })}
    </div>
  );
};
