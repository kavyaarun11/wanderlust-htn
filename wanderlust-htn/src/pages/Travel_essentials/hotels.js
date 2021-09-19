import React, { useState, useEffect } from "react";
import HotelModal from "../../Components/modal/hotel-modal";
import firebase from "../../auth/fire.js";
import axios from 'axios';
import './travel.css';

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("hotels");

  function getHotels(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().UID==localStorage.getItem('userUID'))
        items.push(doc.data());
      });
      setHotels(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getHotels();
  }, []);

  const removeData = (id) => {

    axios.delete(`${URL}/${id}`).then(res => {
        const del = hotels.filter(hotels => id !== hotels.hotel_name)
        setHotels(del)
    })
}

  const renderHeader = () => {
    let headerElement = ['Hotel Name', 'Booking Number', 'Date', 'Location', 'Rooms', 'Time']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

const renderBody = () => {
  return hotels && hotels.map(({ hotel_name, booking_number, date, location, rooms, time }) => {
      return (
          <tr key={hotel_name}>
              <td>{hotel_name}</td>
              <td>{booking_number}</td>
              <td>{date}</td>
              <td>{location}</td>
              <td>{rooms}</td>
              <td>{time}</td>
              <td className='itinerary_table'>
                  <button className='button' onClick={() => removeData(hotel_name)}>Delete</button>
              </td>
          </tr>
      )
  })
}

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div class="table">
    <div>
      <HotelModal />
    </div>
    <>
    <div className="hotels-tablediv">
            <h1 id='title'>Added Hotel Bookings</h1>
            <table id='itinerary'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table></div>
        </>
  </div>
  );
}

export default Hotels;
