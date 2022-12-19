import { React, useState } from "react";

function InputText(props) {
  const [isValid, setIsValid] = useState(true);

  function handleBlur(event) {
    if (event.target.id === "birth") {
      props.isBirthdayValid ? setIsValid(true) : setIsValid(false);
    } else {
      setIsValid(event.target.checkValidity());
    }
  }

  function handleOnInvalid() {
    if (isValid) {
      setIsValid(false);
    }
  }

  return (
    <>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        {!isValid ? <>{props.errormessage}</> : null}
      </div>
      <input
        onInvalid={handleOnInvalid}
        onBlur={handleBlur}
        // defaultValue={props.initialvalue}
        type={props.type ? props.type : "text"}
        name={props.name}
        id={props.id}
        pattern={props.pattern}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </>
  );
}

export default InputText;
