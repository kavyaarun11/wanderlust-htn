import React, { useState } from "react";
import { Modal } from "@material-ui/core";

export default function HotelModal() {
  let allHotel = [];
  let [data, setData] = useState({
    name: "",
    location: "",
    data: " ",
    cost: 0.0,
    ticket_number: "",
  });

  return (
    <div>
      <Modal>
        <Modal
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <label> </label>
          <input type='text' name='name' placeholder='Name of ' />
        </Modal>
      </Modal>
    </div>
  );
}
