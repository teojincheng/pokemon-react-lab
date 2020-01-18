import React from "react";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

export default () => {
  return (
    <div className="displayGallery">
      {pokemonData.map(p => {
        return <PokemonCard pokemon={p} />;
      })}
    </div>
  );
};
