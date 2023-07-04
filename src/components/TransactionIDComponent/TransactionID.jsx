//
// INDYCAF Squareup API Display
// Display all transactions for a given time range
//
// Transaction ID component
//
// Jim Olivi 2023
//

import React from "react";
import "./TransactionID.css";

const TransactionID = (id) => {
  const { TransID } = id;

  return (
    <div className="transactionID">
      <span>{TransID}</span>
    </div>
  );
};

export default TransactionID;
