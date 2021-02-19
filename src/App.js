import SearchInput from "./components/SearchInput/SearchInput";
import React from "react";
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import {Container} from "@material-ui/core";
import Movie from "./containers/Movie/Movie";
import Home from "./containers/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <Header/>
        <SearchInput/>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
            <Switch>
              <Route path="/shows/:id" component={Movie}/>
            </Switch>
          </div>
        </Container>
    </BrowserRouter>
  );
}

export default App;
