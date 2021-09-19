import React, { useState, useEffect } from "react";
import TransportationModal from "../../Components/modal/transportation-modal";
import firebase from "../../auth/fire.js";

function Transportation() {
  const [transportations, setTransportations] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("transportations");

  function getTransport(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTransportations(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getTransport();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
    <div>
      <TransportationModal />
    </div>
    <div>
      <h1>Added Transportation Tickets</h1>
      {transportations.map((transportations)=> (
        <div key={transportations.ticket_name}>
          <h1>{transportations.ticket_name}</h1>
          <h2>{transportations.type}</h2>
          <h2>{transportations.ticket_number}</h2>
          <h2>{transportations.date}</h2>
          <h2>{transportations.time}</h2>
          <p>{transportations.location}</p>
          </div>
      )
      )}
    </div>
  </div>
  );
}

export default Transportation;
