import { useState, useEffect } from "react";
function Day(props) {
  console.log(props.timeSlot.cancelled);
  console.log(props.timeSlot);

  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    function isBreak() {
      if (props.timeSlot.act === "break") {
        setIsBreak(true);
      }
    }

    isBreak();
  }, []);
  console.log(isBreak);

  return (
    <div className="Day">
      <div className="has-before">
        {!isBreak && (
          <>
            <h5>{props.timeSlot.act}</h5>
            <div>
              <p>
                {props.timeSlot.start} - {props.timeSlot.end}
              </p>
              {props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}
            </div>
          </>
        )}
        {isBreak && (
          <>
            <h5 className="break-act">{props.timeSlot.act}</h5>
            <div className="break-act">
              <p>
                {props.timeSlot.start} - {props.timeSlot.end}
              </p>
              {props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Day;
