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

export default function EventsModal() {
  let allTrans = [];
  const [event_name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [booking_number, setNumber] = useState("");
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
    fire.firestore().collection("events").add({ 
      event_name: event_name,
      type: type,
      date: date,
      location: location,
      booking_number: booking_number,
      time: time,
    })
    .then(() => {
      alert('Event data has been saved');
      setLoader(false);
    })
    .catch(error => {
      alert(error.message);
      setLoader(false);
    })

    setName('');
    setType('');
    setDate('');
    setLocation('');
    setNumber('');
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
          Enter Event Information
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
              <label>Event Name</label>

              <input
                type='text'
                value={event_name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Type</label>
              <input
                type='text'
                value={type}
                onChange={(e) => setType(e.target.value)}
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

              <label>Booking Number</label>
              <input
                type='text'
                value={booking_number}
                onChange={(e) => setNumber(e.target.value)}
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