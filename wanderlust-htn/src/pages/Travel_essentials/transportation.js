import React from "react";

import TransportationModal from "../../Components/modal/transportation-modal";
import background from "../../images/New_Trips_Background.svg";

function Transportation() {
  return (
    <section
    className='hero'
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
    <div>
      <TransportationModal />
    </div>

    </section>
  );
}

export default Transportation;
