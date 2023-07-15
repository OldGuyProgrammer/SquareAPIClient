import React, { useState, useEffect } from "react";

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

  return (
    <>

        // Put map function here to iterate through transactions
      <p>Loading Card</p>
    </>
  );
}
export default Card;