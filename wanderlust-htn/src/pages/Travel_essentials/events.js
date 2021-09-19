import React, { useState, useEffect } from "react";
import EventsModal from "../../Components/modal/events-modal";
import firebase from "../../auth/fire.js";
import axios from 'axios';
import './travel.css';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("events");

  function getEvents(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().UID==localStorage.getItem('userUID'))
        items.push(doc.data());
      });
      setEvents(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getEvents();
  }, []);

  const removeData = (event_name) => {
   
}

  const renderHeader = () => {
    let headerElement = ['Event Name', 'Booking Number', 'Date', 'Location', 'Time', 'Type']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

const renderBody = () => {
  return events && events.map(({ event_name, booking_number, date, location, time, type }) => {
      return (
          <tr key={event_name}>
              <td>{event_name}</td>
              <td>{booking_number}</td>
              <td>{date}</td>
              <td>{location}</td>
              <td>{time}</td>
              <td>{type}</td>
              <td className='itinerary_table'>
                  <button className='button' onClick={() => removeData(event_name)}>Delete</button>
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
      <EventsModal />
    </div>
    <>
    <div className="events-tablediv">
            <h1 id='title'>Added Events</h1>
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

export default Events;
