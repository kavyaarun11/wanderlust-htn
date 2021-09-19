import React, { useState, useEffect } from "react";
import ItineraryModal from "../../Components/modal/itinerary-modal";
import firebase from "../../auth/fire.js";
import axios from 'axios';
import './travel.css';

function Itinerary() {
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("itinerary");

  function getItinerary(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().UID==localStorage.getItem('userUID'))
        items.push(doc.data());
      });
      setItinerary(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getItinerary();
  }, []);

  const removeData = (activityName) => {

    axios.delete(`${URL}/${activityName}`).then(res => {
        const del = itinerary.filter(itinerary => activityName !== itinerary.activityName)
        setItinerary(del)
    })
}

  const renderHeader = () => {
    let headerElement = ['Activity Name', 'Date', 'Time', 'Location']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

const renderBody = () => {
    return itinerary && itinerary.map(({ activityName, date, time, location }) => {
        return (
            <tr key={activityName}>
                <td>{activityName}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{location}</td>
                <td className='itinerary_table'>
                    <button className='button' onClick={() => removeData(activityName)}>Delete</button>
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
      <ItineraryModal />
    </div>
    <>
    <div className="itinerary-tablediv">
            <h1 id='title'>Added Itinerary Activities</h1>
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

export default Itinerary;
