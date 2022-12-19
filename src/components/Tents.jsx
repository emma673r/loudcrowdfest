import React from "react";
import { useState, useEffect } from "react";

function Tents({
  regAmount,
  vipAmount,
  setDuoAmount,
  duoAmount,
  setTrioAmount,
  trioAmount,
  setIsGreen,
  setOwnTents,
  ownTents,
  totalSpots,
  setTotalSpots,
}) {
  let numberOfTicketsTotal = regAmount + vipAmount;

  const tentDuo = {
    name: "2 man tent",
    price: 299,
    currency: ",-",
    desc: "2 man tent is balbla",
  };

  const tentTrio = {
    name: "3 man tent",
    price: 399,
    currency: ",-",
    desc: "3 man tent is blabkljesb",
  };

  const greenCamp = {
    name: "Green camp",
    price: 249,
    currency: ",-",
    desc: "green camo is when blabkla",
  };

  let duoSpots = duoAmount * 2;
  let trioSpots = trioAmount * 3;
  setTotalSpots(duoSpots + trioSpots);

  function isSpotsUnder() {
    if (numberOfTicketsTotal <= totalSpots) {
      return true;
    }
  }

  //   TODO : Next button only valid when appropriate number of tents is selected OR radio own tents checked (make a form around everything)

  function makeOwnTents() {
    setOwnTents((prev) => !prev);
    setDuoAmount(0);
    setTrioAmount(0);
  }
  return (
    <>
      <h2>Tents</h2>
      <div>You have to get as many tents spots as you have tickets. Everybody in Loudcrowdfest needs a defined spot to sleep.</div>
      <div>
        You NEED <em>{numberOfTicketsTotal}</em> tent spots minimum. <br /> You have now selected {totalSpots} spots
      </div>
      <fieldset>
        <h3>
          <label htmlFor="own">
            No thanks, I/We have my/our own tents ! <input onChange={makeOwnTents} name="own" type="checkbox" />
          </label>
        </h3>
      </fieldset>

      {!ownTents && (
        <>
          {isSpotsUnder() && <div>You have enough spots for your party !!</div>}
          {!isSpotsUnder() && <div>You need more spots</div>}
          <div>
            <h3>{tentDuo.name}</h3>
            <p>{tentDuo.desc}</p>
            <p>
              {tentDuo.price} {tentDuo.currency}
            </p>

            {duoAmount !== 0 && (
              <label htmlFor="amountDuo">
                <button onClick={() => setDuoAmount((prev) => prev - 1)}>-</button>
              </label>
            )}

            <input disabled={true} name="amountDuo" type="text" value={duoAmount} />

            {duoAmount < 5 && (
              <label htmlFor="amountDuo">
                <button onClick={() => setDuoAmount((prev) => prev + 1)}>+</button>
              </label>
            )}
          </div>
          <div>
            <h3>{tentTrio.name}</h3>
            <p>{tentTrio.desc}</p>
            <p>
              {tentTrio.price} {tentTrio.currency}
            </p>

            {trioAmount !== 0 && (
              <label htmlFor="amountDuo">
                <button onClick={() => setTrioAmount((prev) => prev - 1)}>-</button>
              </label>
            )}

            <input disabled={true} name="amountDuo" type="text" value={trioAmount} />

            {trioAmount < 5 && (
              <label htmlFor="amountDuo">
                <button onClick={() => setTrioAmount((prev) => prev + 1)}>+</button>
              </label>
            )}
          </div>
        </>
      )}

      <fieldset>
        <label htmlFor="green">
          Green Camping,
          <div> {greenCamp.desc}</div>
        </label>
        <input onChange={() => setIsGreen((prev) => !prev)} name="green" type="checkbox" />
      </fieldset>
    </>
  );
}

export default Tents;
