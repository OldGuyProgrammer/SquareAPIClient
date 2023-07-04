//
// INDYCAF Squareup API Display
// Display all transactions for a given time range
//
// Flight Date and Time component
//
// Jim Olivi 2023
//

import React from "react";
import "./FlightDateandTime.css";

const FormatDate = (InDate) => {
  // Convert the Zulu InDate to local Date and Time
  const DateTime = new Date(InDate);
  const Hour = DateTime.getHours();
  let AMPM = "";
  if (Hour >= 12) {
    AMPM = "PM";
  } else {
    AMPM = "AM";
  }
  return (
    DateTime.getMonth() +
    1 +
    "/" +
    DateTime.getDate() +
    "/" +
    DateTime.getFullYear() +
    " " +
    Hour +
    ":" +
    DateTime.getMinutes() +
    AMPM
  );
};

const FlightDateandTime = (DateTime) => {
  const { FlightDate } = DateTime;
  return (
    <div className="datetime">
      <span>{FormatDate(FlightDate)} </span>
    </div>
  );
};

export default FlightDateandTime;
