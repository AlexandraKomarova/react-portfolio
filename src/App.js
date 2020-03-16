import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home"
import { Portfolio } from "./pages/Portfolio"
import { Contact } from "./pages/Contact"
import { Nav } from "./components/Nav"

export default function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}> 
          <Home />
        </Route>
        <Route exact path={["/", "/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/", "/contact"]}>
          <Contact />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
