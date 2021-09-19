import React, { useState, useEffect } from "react";
import EventsModal from "../../Components/modal/events-modal";
import firebase from "../../auth/fire.js";

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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
    <div>
      <EventsModal />
    </div>
    <div>
      <h1>Added Events</h1>
      {events.map((events)=> (
        <div key={events.event_name}>
          <h1>{events.event_name}</h1>
          <h2>{events.date}</h2>
          <h2>{events.booking_number}</h2>
          <p>{events.location}</p>
          <p>{events.type}</p>
          <p>{events.time}</p>
          </div>
      )
      )}
    </div>
  </div>
  );
}

export default Events;
