function Day(props) {
  return (
    <div className="Day">
      <div className="has-before">
        <h5>{props.timeSlot.act}</h5>
        <div>
          <p>
            {props.timeSlot.start} - {props.timeSlot.end}
          </p>
          {props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}
        </div>
      </div>
    </div>
  );
}

export default Day;
