import React, { useState, useEffect } from "react";
import HotelModal from "../../Components/modal/hotel-modal";
import firebase from "../../auth/fire.js";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("hotels");

  function getHotels(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setHotels(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getHotels();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
    <div>
      <HotelModal />
    </div>
    <div>
      <h1>Added Hotel Bookings</h1>
      {hotels.map((hotels)=> (
        <div key={hotels.hotel_name}>
          <h1>{hotels.hotel_name}</h1>
          <h2>{hotels.date}</h2>
          <h2>{hotels.booking_number}</h2>
          <p>{hotels.location}</p>
          <p>{hotels.rooms}</p>
          <p>{hotels.time}</p>
          </div>
      )
      )}
    </div>
  </div>
  );
}

export default Hotels;
