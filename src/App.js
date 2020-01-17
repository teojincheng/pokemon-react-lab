import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

//import PokemonComponent from "./components/PokemonComponent";
import PokemonGallery from "./components/PokemonGallery";

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
    arrOfDisplayItems
      .push
      //<PokemonComponent key={i} pokemon={pokemonData[i]} index={i} />
      ();
  }
  return arrOfDisplayItems;
}

function mapListToCardA() {
  const arrOfItemToDisplay = [];
  pokemonData.map((singlePokemonData, index) => {
    if (index % 3 === 0 && index !== 0) {
      arrOfItemToDisplay.push(<br />);
    }
    arrOfItemToDisplay
      .push
      //<PokemonComponent key={index} pokemon={singlePokemonData} index={index} />
      ();
  });

  return arrOfItemToDisplay;
}

function App() {
  //return <div className="App">{mapListToCardA()}</div>;
  return (
    <div className="App">
      <PokemonGallery></PokemonGallery>
    </div>
  );
}

export default App;
