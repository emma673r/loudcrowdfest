import React from "react";
import { useRef, useState } from "react";
import PrimaryButton from "../PrimaryButton";

function CreditCardForm(props) {
  const Form = useRef(null);
  const [disableMe, setDisableMe] = useState(true);

  // space after 4 chars
  function handleKeyDown(e) {
    // console.log(e.keyCode);
    if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
      e.target.value = e.target.value += " ";
    }
  }

  function handleInput(e) {
    if (e.target.value.length == e.target.maxLength) {
      e.target.nextElementSibling.focus();
    }
  }

  function handleChange(e) {
    console.log("cvc is valid ", Form.current.elements["cvc"].checkValidity());
    if (Form.current.elements["cvc"].checkValidity()) {
      setDisableMe(false);
    } else {
      setDisableMe(true);
    }
    // if (Form.current.elements["cvc"].checkValidity()) {
    //   setDisableMe(false);
    // }

    // console.log(Form.current.elements["cvc"].checkValidity());
    // console.log(disableMe);
  }

  function submitCard(e) {
    e.preventDefault();
    if (Form.current.reportValidity()) {
      props.saveForm(createObjectFromCardForm());
      props.makeReservation();
    }
  }

  function createObjectFromCardForm() {
    return {
      name: Form.current.elements["name"].value,
      cardnumber: Form.current.elements["card-number"].value,
      month: Form.current.elements["month"].value,
      year: Form.current.elements["year"].value,
      cvc: Form.current.elements["cvc"].value,
    };
  }

  if (!props.payementCard) {
    Form.current.elemenst = "";
  }

  return (
    <form onChange={handleChange} onSubmit={submitCard} ref={Form}>
      <fieldset>
        <h3>Card information :</h3>
        <fieldset>
          <label htmlFor="name">Name on the card :</label>
          <input required="true" onInput={handleInput} id="name" name="name" type="text" placeholder="Jane Doe" />
        </fieldset>
        <fieldset>
          <label htmlFor="card-number">Card number :</label>
          <input
            required="true"
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            maxLength="19"
            id="card"
            name="card-number"
            type="text"
            placeholder="1234 1234 1234 1234"
          />
          <label htmlFor="month">Month :</label>
          <input
            required="true"
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            maxLength="2"
            id="month"
            min="01"
            max="12"
            name="month"
            type="text"
            placeholder="08"
          />
          <label htmlFor="year">Year :</label>
          <input
            required="true"
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            maxLength="2"
            id="year"
            name="year"
            max="2022"
            type="text"
            placeholder="25"
          />
          <label htmlFor="cvc">Cvc number :</label>
          <input required="true" onInput={handleInput} onKeyDown={handleKeyDown} maxLength="3" id="cvc" name="cvc" type="text" placeholder="666" />
        </fieldset>
        <PrimaryButton disabled={disableMe} desc={"PAY NOW"} clickAction={submitCard}></PrimaryButton>
      </fieldset>
    </form>
  );
}

export default CreditCardForm;
