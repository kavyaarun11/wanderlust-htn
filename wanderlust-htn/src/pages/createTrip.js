import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/Card.css";
import { createTheme } from "@material-ui/core/styles";
import MediaCard from "../Components/Card";
import MediaCard2 from "../Components/Card2";
import background from "../images/background.png";

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
        Welcome Back!
        <button className='profile_button'>
          <b>PROFILE</b>
        </button>
        <button onClick={handleLogout}>LOGOUT</button>
      </nav>

      <div className='cards-container '>
        <div className='card1'>
          <MediaCard />
        </div>
        <div className='card1'>
          <MediaCard2 />
        </div>
        <div className='card1'>
          <MediaCard2 />
        </div>
        <div className='card1'>
          <MediaCard2 />
        </div>
      </div>
    </section>
  );
};
export default CreateTrip;
