import React from "react";
import MediaCard from "../Components/Card";
import MediaCard2 from "../Components/Card2";
import background from "../images/Landing_PageOff_White_Landing_Page.svg";
import "../App.css";

const Hero = ({ handleLogout }) => {
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
        <button className="logout"onClick={handleLogout}>LOGOUT</button>
      </nav>

      <div className='cards-container '>
        <div className='card1'>
          <MediaCard />
        </div>
        <div className='card1'>
          <MediaCard2 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
