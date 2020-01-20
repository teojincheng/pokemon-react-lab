import React from "react";
import SearchComponent from "./SearchComponent";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
  }

  callbackFunction = queryFromInputBox => {
    this.setState({ searchQuery: queryFromInputBox });
  };

  getArrayOfPokemonData() {
    if (this.state.searchQuery) {
      const filteredArr = pokemonData.filter(eachPokemon =>
        eachPokemon.name.english
          .toLowerCase()
          .startsWith(this.state.searchQuery.toLowerCase())
      );
      return filteredArr;
    } else {
      return pokemonData;
    }
  }

  render() {
    const arrOfDataToDisplay = this.getArrayOfPokemonData();
    return (
      <div>
        <SearchComponent parentCallback={this.callbackFunction} />
        <div className="displayGallery">
          {arrOfDataToDisplay.map(function(p, index) {
            return <PokemonCard key={index} pokemon={p} />;
          })}
        </div>
      </div>
    );
  }
}

export default Parent;
