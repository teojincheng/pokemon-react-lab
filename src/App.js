import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

import PokemonComponent from "./components/PokemonComponent";

const bulbasaur = pokemonData[0];

function mapListToCard() {
  let result = pokemonData.map(singlePokemonData => {
    return <PokemonComponent pokemon={singlePokemonData} />;
  });

  return result;
}

function App() {
  return (
    <div className="App">
      <PokemonComponent pokemon={bulbasaur} />
      {mapListToCard()}
    </div>
  );
}

export default App;
