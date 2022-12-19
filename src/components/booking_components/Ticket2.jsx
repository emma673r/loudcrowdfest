import React from "react";

import { useState, useEffect } from "react";

function Ticket2({ setAmountVipTicket, ticket }) {
  const [countTicket2, setCountTicket2] = useState(0);

  //   useEffect(() => {
  //     setAmountVipTicket(countTicket2);

  //     return () => {
  //       setAmountVipTicket;
  //     };
  //   }, []);

  setAmountVipTicket(countTicket2);

  return (
    <>
      <h3>{ticket.name}</h3>
      {countTicket2 !== 0 && (
        <label htmlFor="amount">
          <button onClick={() => setCountTicket2((prev) => prev - 1)}>-</button>
        </label>
      )}

      <input onChange={() => countTicket2} name="amount" type="text" value={countTicket2} />

      {countTicket2 < 5 && (
        <label htmlFor="amount">
          <button onClick={() => setCountTicket2((prev) => prev + 1)}>+</button>
        </label>
      )}
    </>
  );
}

export default Ticket2;
