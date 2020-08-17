import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Items from "./pages/Items";
import Pokemons from "./pages/Pokemons";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons/: name">
            <Pokemons />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Redirect to="/pokemons" />
          </Route>
        </Switch>
        <footer>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/items">Items</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
