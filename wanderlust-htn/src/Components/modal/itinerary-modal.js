import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import fire from "../../auth/fire";
import { useHistory } from "react-router-dom";
import ParticlesContainer from "../../pages/ParticleContainer"

import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ItineraryModal() {
  let allTrans = [];
  const [activityName, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTIme] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loader, setLoader] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)
    fire.firestore().collection("itinerary").add({ 
      activityName: activityName,
      date: date,
      location: location,
      time: time,
    })
    .then(() => {
      alert('Itinerary has been saved');
      setLoader(false);
    })
    .catch(error => {
      alert(error.message);
      setLoader(false);
    })

    setName('');
    setDate('');
    setLocation('');
    setTIme('');
  };
  let history = useHistory();
  return (
    <div>
      <ParticlesContainer></ParticlesContainer>
      <div>
      <nav>
        <button className='logout' onClick={history.goBack}>Go Back</button>
      </nav>
      </div>
      <div className='button-container'>
        <Button id='transportation-modal-button' onClick={handleOpen}>
          Enter Itinerary Activity
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onSubmit={handleSubmit}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <form onSubmit={handleSubmit}>
              <label>Activity Name</label>

              <input
                type='text'
                value={activityName}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Date</label>
              <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <label>Location</label>
              <input
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <label>Time</label>
              <input
                type='text'
                value={time}
                onChange={(e) => setTIme(e.target.value)}
              />
              <button
                type='submit'
                onClick={handleSubmit}
                id='transportation-submit'
                style={{background: loader ? "#ccc" : "rgb(2, 2, 110)"}}
              >
                Submit
              </button>
            </form>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}></Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}