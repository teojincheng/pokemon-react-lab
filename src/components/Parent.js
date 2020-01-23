import React from "react";
import SearchComponent from "./SearchComponent";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
import axios from "axios";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      pokemonData: [],
      errorMessage: "",
      isLoading: true
    };
  }

  callbackFunction = queryFromInputBox => {
    this.setState({ searchQuery: queryFromInputBox });
  };

  componentDidMount() {
    this.setState({
      errorMessage: ""
    });

    axios(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then(response => {
        this.setState({
          pokemonData: response.data,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          errorMessage: "Error. Data cannot be found",
          isLoading: false
        });
      });
  }

  getArrayOfPokemonData() {
    if (this.state.searchQuery) {
      const filteredArr = this.state.pokemonData.filter(eachPokemon =>
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
        {!!this.state.isLoading && <p>Still Loading</p>}
        {!!this.state.errorMessage ? (
          <p>{this.state.errorMessage}</p>
        ) : (
          <div className="displayGallery">
            {arrOfDataToDisplay.map(function(p, index) {
              return <PokemonCard key={index} pokemon={p} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Parent;
