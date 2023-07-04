//
// INDYCAF Squareup API Display
// Display all transactions for a given time range
//
// Total Charged Amouhnt component
//
// Jim Olivi 2023
//

import React from "react";
import "./Amount.css";

const Amount = (SquareCash) => {
  const { cash } = SquareCash;
  return <span>${cash}</span>;
};

export default Amount;
