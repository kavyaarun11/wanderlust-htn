import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

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

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <label>Ticket Name</label>
            <input type='text' />

            <label>Type</label>
            <input type='text' />

            <label>Date</label>
            <input type='date' />

            <label>Location</label>
            <input type='text' />

            <label>Ticket Number</label>
            <input type='price' />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <button type='submit'>Submit</button>
          </Typography>
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
