import React, { useState, useEffect } from "react";
import ItineraryModal from "../../Components/modal/itinerary-modal";
import firebase from "../../auth/fire.js";

function Itinerary() {
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("itinerary");

  function getItinerary(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setItinerary(items);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getItinerary();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
    <div>
      <ItineraryModal />
    </div>
    <div>
      <h1>Added Itinerary Activities</h1>
      {itinerary.map((itinerary)=> (
        <div key={itinerary.activityName}>
          <h1>{itinerary.activityName}</h1>
          <h2>{itinerary.date}</h2>
          <h2>{itinerary.time}</h2>
          <p>{itinerary.location}</p>
          </div>
      )
      )}
    </div>
  </div>
  );
}

export default Itinerary;
