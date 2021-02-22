import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Header />
        <Switch>

          <Route exact path="/">
            <Search />
          </Route>

          <Route path="/savedBooks">
            <Saved />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </>
    </Router>
  );
}

export default App;
