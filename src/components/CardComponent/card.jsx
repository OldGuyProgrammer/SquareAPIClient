import "./card.css";
import CustomerName from "../CustomerNameComponent/CustomerName";
import FlightDateandTime from "../FlightDateandTimeComponent/FlightDateandTime";
import AircraftName from "../AircraftNameComponent/AircraftName.jsx";
// import TransactionID from "../TransactionIDComponent/TransactionID";
import Address from "../AddressComponent/Address";
import Amount from "../AmountComponent/Amount";
import SquarePaymentsData from "../../../src/data/payments.json";
import SquareCustomerData from "../../../src/data/customers.json";

function Card() {
  // const SquareTransID = SquarePaymentsData.payments[0].id;
  const SquareTransDate = SquarePaymentsData.payments[0].created_at;
  const SquareCash = SquarePaymentsData.payments[0].amount_money.amount;

  // console.log(SquareCustomerData.customers[0].address);
  const SquareGivenName = SquareCustomerData.customers[0].given_name;
  const SquareFamilyName = SquareCustomerData.customers[0].family_name;
  const SquareEmail = SquareCustomerData.customers[0].email_address;
  const SquarePhoneNumber = SquareCustomerData.customers[0].phone_number;
  const SquareAddressLine =
    SquareCustomerData.customers[0].address.address_line_1 +
    " " +
    SquareCustomerData.customers[0].address.address_line_2;
  const SquareLocality = SquareCustomerData.customers[0].address.locality;
  const SquareAdministrativeDistrictLevel1 =
    SquareCustomerData.customers[0].address.administrative_district_level_1;
  const SquarePostalCode = SquareCustomerData.customers[0].address.postal_code;

  return (
    <>
      <div className="note-header-container">
        <FlightDateandTime FlightDate={SquareTransDate} />
        <AircraftName AirplaneName="BT-13 Valient" />
        {/* <TransactionID TransID={SquareTransID} /> */}
      </div>
      <div className="amount-container">
        <Amount cash={SquareCash} />
      </div>
      <div className="name-container">
        <CustomerName FirstName={SquareGivenName} LastName={SquareFamilyName} />
      </div>
      <Address
        street={SquareAddressLine}
        city={SquareLocality}
        state={SquareAdministrativeDistrictLevel1}
        zip={SquarePostalCode}
        email={SquareEmail}
        phone={SquarePhoneNumber}
      />
    </>
  );
}

export default Card;
