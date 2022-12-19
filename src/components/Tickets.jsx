import React, { Children } from "react";
import Ticket1 from "./booking_components/Ticket1";
import Ticket2 from "./booking_components/Ticket2";

import { useState } from "react";

function Tickets({ setVipAmount, setRegAmount }) {
  const [amountRegTicket, setAmountRegTicket] = useState();
  const [amountVipTicket, setAmountVipTicket] = useState();

  setVipAmount(amountVipTicket);
  setRegAmount(amountRegTicket);

  const vipTicket = {
    name: "VIP Ticket",
    price: 1299,
    currency: ",-",
    desc: "vip ticket bla bla bla",
  };
  const regTicket = {
    name: "Regular Pass",
    price: 799,
    currency: ",-",
    desc: "reg ticket bla bla bla",
  };

  return (
    <>
      <h2 id="ticket-h2">Tickets</h2>
      <p>You can max buy 5 of each kind of tickets per order.</p>
      <Ticket1 setAmountRegTicket={setAmountRegTicket} ticket={regTicket} />
      <Ticket2 setAmountVipTicket={setAmountVipTicket} ticket={vipTicket} />
    </>
  );
}

export default Tickets;
