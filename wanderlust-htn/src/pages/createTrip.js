import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/Card.css";
import background from "../images/New_Trips_Background.svg";
import EventsCard from "../Components/four-cards/eventsCard";
import ItineraryCard from "../Components/four-cards/itineraryCard";
import TransportationCard from "../Components/four-cards/transportationCard";
import HotelCard from "../Components/four-cards/hotels";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 100,
    background: "black",
  },
  text: {
    padding: 20,
  },
});

function CreateTrip({ handleLogout }) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <section
      className='hero'
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <nav>
        <b>
        Welcome Back!
        </b>
        <button onClick={history.goBack}>Go Back</button>
      </nav>

      <div className='create-trip-options'>
        <div className='card-2x2-container-1'>
          <div className='card1'>
            <EventsCard />
          </div>
          <div className='card1'>
            <TransportationCard />
          </div>
        </div>
        <div className='card-2x2-container-2'>
          <div className='card1'>
            <HotelCard />
          </div>
          <div className='card1'>
            <ItineraryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default CreateTrip;
