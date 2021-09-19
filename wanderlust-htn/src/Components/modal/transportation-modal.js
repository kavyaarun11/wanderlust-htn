import { Modal } from "@material-ui/core";
import React, { useState } from "react";

export default function TransportationModal() {
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
