import "./App.css";
import Home from "./Home";
import CreateTrip from "./pages/createTrip";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/create-trip' component={CreateTrip}/>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
