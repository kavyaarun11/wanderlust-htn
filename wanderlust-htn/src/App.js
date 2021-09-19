import "./App.css";
import Home from "./Home";
import Hero from "./pages/dashboard";
import CreateTrip from "./Components/createTrip";

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Home} />
          <Route exact path='/' component={Hero} />
          <Route exact path='/create-trip' component={CreateTrip} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
