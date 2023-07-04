//
// INDYCAF Squareup API Display
// Display all transactions for a given time range
//
// Aircraft Name component
//
// Jim Olivi 2023
//

import React from "react";
import "./AircraftName.css";

const AircraftName = (name) => {
  const { AirplaneName } = name;
  return (
    <div className="aircraftName">
      <span>{AirplaneName}</span>
    </div>
  );
};

export default AircraftName;
