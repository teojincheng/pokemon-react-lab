import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

import PokemonComponent from "./components/PokemonComponent";

const bulbasaur = pokemonData[0];

function App() {
  return (
    <div className="App">
      <PokemonComponent pokemon={bulbasaur} />
    </div>
  );
}

export default App;
