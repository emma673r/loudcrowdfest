import { useNavigate } from "react-router-dom";

function Bands(props) {
  const navigate = useNavigate();
  function goToSoloAct() {
    navigate("../soloAct");
  }
  return (
    <div onClick={goToSoloAct} className="lineup-img">
      <p className="band-lineup">{props.band.name}</p>
    </div>
  );
}

export default Bands;
