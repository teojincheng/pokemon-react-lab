import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

import PokemonComponent from "./components/PokemonComponent";

const bulbasaur = pokemonData[0];

function mapListToCard() {
  /*
  let result = pokemonData.map((singlePokemonData, index) => {
    return <PokemonComponent pokemon={singlePokemonData} index={index} />;
  });

  return result;
  */
  const arrOfDisplayItems = [];
  for (let i = 0; i < pokemonData.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      arrOfDisplayItems.push(<br />);
    }
    arrOfDisplayItems.push(
      <PokemonComponent key={i} pokemon={pokemonData[i]} index={i} />
    );
  }
  return arrOfDisplayItems;
}

function App() {
  return <div className="App">{mapListToCard()}</div>;
}

export default App;
