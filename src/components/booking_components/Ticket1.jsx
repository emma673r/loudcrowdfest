import React from "react";
import { useState, useEffect } from "react";

function Ticket1({ setAmountRegTicket, ticket }) {
  const [countTicket1, setCountTicket1] = useState(0);

  //   useEffect(() => {
  //     setAmountRegTicket(countTicket1);

  //     return () => {
  //       setAmountRegTicket;
  //     };
  //   }, []);

  setAmountRegTicket(countTicket1);

  return (
    <>
      <h3>{ticket.name}</h3>
      {countTicket1 !== 0 && (
        <label htmlFor="amount">
          <button onClick={() => setCountTicket1((prev) => prev - 1)}>-</button>
        </label>
      )}

      <input onChange={() => countTicket1} name="amount" type="text" value={countTicket1} />

      {countTicket1 < 5 && (
        <label htmlFor="amount">
          <button onClick={() => setCountTicket1((prev) => prev + 1)}>+</button>
        </label>
      )}
    </>
  );
}

export default Ticket1;
