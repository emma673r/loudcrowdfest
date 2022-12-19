import React from "react";

function PrimaryButton({ clickAction, desc, stage, isValidBig }) {
  console.log(isValidBig);
  console.log(stage);
  return (
    <>
      {stage != 4 && <button onClick={clickAction}>{desc}</button>}
      {stage === 4 && (
        <>
          {isValidBig && <button onClick={clickAction}>{desc}</button>}
          {!isValidBig && <button disabled={true}>{desc}</button>}
        </>
      )}
    </>
  );
}

export default PrimaryButton;
