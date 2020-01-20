import React from "react";
import pokemonData from "../pokemon/pokemon";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  sendDataOfQuery = data => {
    this.props.parentCallback(data);
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    this.sendDataOfQuery(event.target.value);
  };

  render() {
    return (
      <div>
        Search:
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchComponent;
