import React from "react";
import MediaCard from "../Components/Card";
import MediaCard2 from "../Components/Card2";
import "../App.css";

const Hero = ({ handleLogout }) => {
  return (
    <section className='hero'>

      <nav>
        Welcome Back!
        <button className='profile_button'>
          <b>PROFILE</b>
        </button>
        <button onClick={handleLogout}>LOGOUT</button>
      </nav>
      
      {/* <h1> Let's get started! </h1> */}

      <div className='cards-container '>
        <div className = 'card1'>
        <   MediaCard />
        </div>
        <div className = 'card1'>
        <MediaCard2/>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
