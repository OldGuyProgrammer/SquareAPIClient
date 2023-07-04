//
// INDYCAF Squareup API Display
// Display all transactions for a given time range
//
// Customer Name component
//
// Jim Olivi 2023
//

import React from "react";
import "./CustomerName.css";

const CustomerName = (name) => {
  const { FirstName, LastName } = name;
  return (
    <div className="customerName">
      <span>
        {FirstName} {LastName}
      </span>
    </div>
  );
};

export default CustomerName;
