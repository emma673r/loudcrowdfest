import React from "react";

function Availability({ setCamp, camp, availability, totalAmountSpots }) {
  function isEnough(campAvailability) {
    if (campAvailability >= totalAmountSpots) {
      return true;
    }
  }

  console.log("isEnough", isEnough);

  //   TODO : Next button only valid when a camp is selected

  return (
    <>
      <h1>Booking</h1>
      <div>You need a camp that has at least {totalAmountSpots} free spots for your party.</div>

      {Object.values(availability).map((availability, index) => (
        <div key={index}>
          {isEnough(availability.available) ? (
            <h2>
              <button onClick={() => setCamp(availability.area)}>{availability.area}</button>
            </h2>
          ) : (
            <h2>
              <button disabled>{availability.area}</button>
            </h2>
          )}

          {isEnough(availability.available) ? <p>There are enough spots here !</p> : <p>There are NOT enough spots here !</p>}
          <p>
            {availability.area} has {availability.available}/{availability.spots} spots available
          </p>
        </div>
      ))}
    </>
  );
}

export default Availability;
