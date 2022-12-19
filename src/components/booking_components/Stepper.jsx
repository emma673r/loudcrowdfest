import React from "react";

import { useRef } from "react";

function Stepper({ stage }) {
  const stage1 = useRef(null);
  const stage2 = useRef(null);
  const stage3 = useRef(null);
  const stage4 = useRef(null);
  const stage5 = useRef(null);
  const stage6 = useRef(null);

  return (
    <>
      <div ref={stage1} id="stage" className={stage === 1 ? "stage" : ""}>
        Step 1
      </div>
      <div ref={stage2} id="stage2" className={stage === 2 ? "stage" : ""}>
        Step 2
      </div>
      <div ref={stage3} id="stage3" className={stage === 3 ? "stage" : ""}>
        Step 3
      </div>
      <div ref={stage4} id="stage4" className={stage === 4 ? "stage" : ""}>
        Step 4
      </div>
      <div ref={stage5} id="stage5" className={stage === 5 ? "stage" : ""}>
        Step 5
      </div>
      <div ref={stage6} id="stage6" className={stage === 6 ? "stage" : ""}>
        Step 6
      </div>
    </>
  );
}

export default Stepper;
