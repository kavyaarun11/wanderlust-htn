import { Modal } from "@material-ui/core";
import React, { useState } from "react";

export default function Transportation() {
  let allTrans = [];
  let [data, setData] = useState({
    name: "",
    location: "",
    data: " ",
    cost: 0.0,
    ticket_number: "",
    Type: "",
  });

  return (
    <div>
      <Modal>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              <label> Name</label>
              <input type='text' name='name' placeholder='Name of ' />
            </Typography>
            <Typography
              id='modal-modal-description'
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </Modal>
    </div>
  );
}
