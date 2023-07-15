import React, { useState, useEffect } from "react";
import PaymentInfo from "./paymentInfo";
import CustomerInfo from "./customerInfo";

function Card() {

  const [customerData, setData] = useState(null);

  // 
  // This code executes upon the rendering of the page.
  // It also executes each time the page has to be re-rendered.
  // It actually calls the server many times.
  //
  // This code runs on the client.
  //
  // Don't forget to use the map() function to iterate through the array.

  useEffect(() => {
    fetch("/getcustomers")
      .then((res) => {
        console.log(`Response code: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("And heres the data: " + data);
        setData(data);
      })
      .catch((error) => {
        console.log((error));
      });
  }, []);
  //
  // Make sure we have data to display...
  //
  if (!customerData) {
    return (<p>Loading...</p>);
  }
  
  return (
    <>
      <PaymentInfo />
      <CustomerInfo givenName = {customerData.customers[0]["given_name"]}
      familyName = {customerData.customers[0]["family_name"]}
      email = {customerData.customers[0]["email_address"]}
      phoneNumber = {customerData.customers[0]["phone_number"]}
      addressLine = {customerData.customers[0]["address"]["address_line_1"]}
      city = {customerData.customers[0]["address"]["locality"]}
      state = {customerData.customers[0]["address"]["administrative_district_level_1"]}
      zipCode = {customerData.customers[0]["address"]["postal_code"]}
      />
    </>
  );
}
export default Card;