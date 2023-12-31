import React, { useState, useEffect } from "react";
import "./card.css";
import CustomerName from "../CustomerNameComponent/CustomerName";
import FlightDateandTime from "../FlightDateandTimeComponent/FlightDateandTime";
import AircraftName from "../AircraftNameComponent/AircraftName.jsx";
import TransactionID from "../TransactionIDComponent/TransactionID";
import Address from "../AddressComponent/Address";
import Amount from "../AmountComponent/Amount";

const CustomerInfo = ( customerData )  => {

  // const [customerData, setData] = useState(null);

  // 
  // This code executes upon the rendering of the page.
  // It also executes each time the page has to be re-rendered.
  // It actually calls the server many times.
  //
  // This code runs on the client.
  //
  // Don't forget to use the map() function to iterate through the array.

  const { givenName, familyName, email, phoneNumber, addressLine, city, state, zipCode } = customerData

  const SquareTransID = "123456";
  const SquareTransDate = "created_at";
  const SquareCash = "150";
  // const SquareGivenName = customerData.customers[0]["given_name"];
  // const SquareFamilyName = customerData.customers[0]["family_name"];
  // const SquareEmail = customerData.customers[0]["email_address"];
  // const SquarePhoneNumber = customerData.customers[0]["phone_number"];
  // const SquareAddressLine = customerData.customers[0]["address"]["address_line_1"];
  // const SquareLocality = customerData.customers[0]["address"]["locality"];
  // const SquareAdministrativeDistrictLevel1 = customerData.customers[0]["address"]["administrative_district_level_1"];
  // const SquarePostalCode = customerData.customers[0]["address"]["postal_code"];

  return (
    <>
      <div className="note-header-container">
        <FlightDateandTime FlightDate={SquareTransDate} />
        <AircraftName AirplaneName="BT-13 Valient" />
        <TransactionID TransID={SquareTransID} />
      </div>
      <div className="amount-container">
        <Amount cash={SquareCash} />
      </div>
      <div className="name-container">
        <CustomerName FirstName={givenName} LastName={familyName} />
      </div>
      <Address
        street={addressLine}
        city={city}
        state={state}
        zip={zipCode}
        email={email}
        phone={phoneNumber}
      />
    </>
  );
}

export default CustomerInfo;
