import React from "react";
import InputText from "./InputText";
import PrimaryButton from "../PrimaryButton";
import { useRef } from "react";

function MobilePayForm({ saveForm, submitAll, payementCard, makeReservation }) {
  const Form = useRef(null);

  function createObjectFromMobileForm() {
    return {
      mobile: Form.current.elements["mobile"].value,
    };
  }

  function submit(e) {
    e.preventDefault();
    if (Form.current.reportValidity()) {
      saveForm(createObjectFromMobileForm());
      makeReservation();
    }
  }

  if (payementCard) {
    Form.current = "";
  }

  return (
    <form onSubmit={submit} ref={Form}>
      <h2>MobilePay Info</h2>
      <InputText
        type="text"
        label="mobile"
        id="mobile"
        name="mobile"
        errormessage="  - Enter a valid mobile number"
        placeholder={"42 06 66 69"}
        pattern="(\+?\d*\s*)*"
        required={true}
      ></InputText>
      <PrimaryButton desc={"PAY NOW"} clickAction={submit}></PrimaryButton>
    </form>
  );
}

export default MobilePayForm;
