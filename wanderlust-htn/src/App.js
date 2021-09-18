import "./App.css";
import Home from "./Home";
import Hero from "./pages/dashboard";
import createTrip from "./Components/createTrip";

import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [price, setPrice] = useState(0);
  const [symbol, setSymbol] = useState("");
  return (
    <main>
      <BrowserRouter>
        <Route path='/' component={Nav} />
        <Switch>
          <Route path='/login' component={Home} exact />
          <Route path='/dash' component={Hero} exact />
          <Route path='/create-trip' component={createTrip} exact />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
