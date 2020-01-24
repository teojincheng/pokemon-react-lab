import React from "react";
import "./App.css";
import Parent from "./components/Parent";
import About from "./components/About";
//import PokemonGallery from "./components/PokemonGallery";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import PokemonDetail from "./components/PokemonDetail";
import PageHeader from "./components/PageHeader";
import Routes from "./constants/routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path={Routes.gallery} component={Parent} />
          <Route path={Routes.about} component={About} />
          <Route path={Routes.notFound} component={NotFound} />
          <Route path={Routes.pokemonId} component={PokemonDetail} />
          <Route exact from="/" component={About} />
          <Redirect to="/NotFound"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
