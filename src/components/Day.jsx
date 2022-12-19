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
          <div>
            <p className="act">{props.timeSlot.act}</p>
            <p>
              {props.timeSlot.start} - {props.timeSlot.end}
            </p>
            <p>{props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}</p>
          </div>
        )}
        {isBreak && (
          <div className="break-act">
            <p className="act">{props.timeSlot.act}</p>
            <p>
              {props.timeSlot.start} - {props.timeSlot.end}
            </p>
            <p>{props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day;
