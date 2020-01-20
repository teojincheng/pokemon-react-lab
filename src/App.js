import React from "react";
import "./App.css";
import PokemonGallery from "./components/PokemonGallery";

function App() {
  //return <div className="App">{mapListToCardA()}</div>;
  return (
    <div className="App">
      <PokemonGallery></PokemonGallery>
    </div>
  );
}

export default App;
