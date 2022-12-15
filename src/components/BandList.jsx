import Bands from "./Bands";

function BandList(props) {
  return (
    <div className="BandList">
      {props.bands.map((band) => (
        <Bands key={band.name} band={band} />
      ))}
    </div>
  );
}

export default BandList;
