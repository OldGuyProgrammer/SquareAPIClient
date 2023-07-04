//
// INDYCAF Squareup API Display
// Display all transactions for a given time range
//
// Address component
//
// Jim Olivi 2023
//

import React from "react";
import "./Address.css";

const Address = (address) => {
  const { street, city, state, zip, email, phone } = address;
  return (
    <>
      <span>{street}</span>
      <div className="address-container">
        <span>{city} </span>
        <span>{state} </span>
        <span>{zip} </span>
      </div>
      <span>{phone} </span>
      <span>{email} </span>
    </>
  );
};

export default Address;
