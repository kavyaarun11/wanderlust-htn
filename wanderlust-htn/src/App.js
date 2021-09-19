import "./App.css";
import Home from "./Home";
import CreateTrip from "./pages/createTrip";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewTrips from "./pages/viewTrips";
import Events from "./pages/Travel_essentials/events";
import Itinerary from "./pages/Travel_essentials/itinerary";
import Hotels from "./pages/Travel_essentials/hotels";
import Transportation from "./pages/Travel_essentials/transportation";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/create-trip' component={CreateTrip}/>
          <Route exact path='/view-trips' component={ViewTrips}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/itinerary' component={Itinerary}/>
          <Route exact path='/hotels' component={Hotels}/>
          <Route exact path='/transportation' component={Transportation}/>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
