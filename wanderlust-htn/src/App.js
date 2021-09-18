import "./App.css";
import Home from "./Home";
import Hero from "./pages/dashboard";
import createTrip from "./Components/createTrip";

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Home} />
          <Route path='/dash' component={Hero} />
          <Route path='/create-trip' render={() => <createTrip />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
