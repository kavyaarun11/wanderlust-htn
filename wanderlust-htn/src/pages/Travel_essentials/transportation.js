import React, { useState, useEffect } from "react";
import TransportationModal from "../../Components/modal/transportation-modal";
import firebase from "../../auth/fire.js";
import axios from 'axios';
import './travel.css';

function Transportation() {
  const [transportations, setTransportations] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("transportations");

  function getTransport(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().UID==localStorage.getItem('userUID'))
        if(doc.data())
        items.push(doc.data());
      });
      setTransportations(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getTransport();
  }, []);

  const removeData = (id) => {

    axios.delete(`${URL}/${id}`).then(res => {
        const del = transportations.filter(transportations => id !== transportations.ticket_name)
        setTransportations(del)
    })
}

  const renderHeader = () => {
    let headerElement = ['Ticket Name', 'Ticket Number', 'Date', 'Time', 'Type', 'Location']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

const renderBody = () => {
  return transportations && transportations.map(({ ticket_name, ticket_number, date, time, type, location }) => {
      return (
          <tr key={ticket_name}>
              <td>{ticket_name}</td>
              <td>{ticket_number}</td>
              <td>{date}</td>
              <td>{time}</td>
              <td>{type}</td>
              <td>{location}</td>
              <td className='itinerary_table'>
                  <button className='button' onClick={() => removeData(ticket_name)}>Delete</button>
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
      <TransportationModal />
    </div>
    <>
    <div className="itinerary-tablediv">
            <h1 id='title'>Added Tickets</h1>
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

export default Transportation;
