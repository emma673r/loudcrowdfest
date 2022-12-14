import React from "react";

function PrimaryButton({ clickAction, desc }) {
  return <button onClick={clickAction}>{desc}</button>;
}

export default PrimaryButton;
