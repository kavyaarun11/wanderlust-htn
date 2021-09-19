import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import fire from "../../auth/fire";

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

export default function TransportationModal() {
  let allTrans = [];
  const [ticket_name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [ticket_number, setNumber] = useState("");
  const [time, setTIme] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    let Data = {
      ticket_name1: ticket_name,
      type1: type,
      date1: date,
      location1: location,
      ticket_number1: ticket_number,
      time1: time,
    };
    allTrans.push(Data);
    console.log(Data);
    fire.firestore().collection("users").add({ uid: "parmin" });
  };

  return (
    <div>
      <nav>
        <b>Welcome Back!</b>
        <button className='logout'>LOGOUT</button>
      </nav>
      <div className='button-container'>
        <Button id='transportation-modal-button' onClick={handleOpen}>
          Enter Transportation Information
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <form onSubmit={handleSubmit}>
              <label>Ticket Name</label>

              <input
                type='text'
                value={ticket_name}
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

              <label>Ticket Number</label>
              <input
                type='text'
                value={ticket_number}
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
// let allTrans = [];
//   let [data, setData] = useState({
//     name: "",
//     location: "",
//     data: " ",
//     cost: 0.0,
//     ticket_number: "",
//     Type: "",
