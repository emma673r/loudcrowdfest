import { useState, useEffect } from "react";
import Bands from "./Bands";
function BandList({ band }) {
  // console.log(band.logo);

  const [badImgUrl, setBadImgUrl] = useState("");
  console.log(badImgUrl);

  console.log(band);
  // console.log(band);

  useEffect(() => {
    function getBadImg() {
      if (!band.logo.includes("https://")) {
        setBadImgUrl(`https://footrypleaseworkanddeletelateron.fly.dev/logos/${band.logo}`);
      }
    }
    getBadImg();
    console.log("bad img url ", badImgUrl);

    if (!band.logo.includes("https://")) {
      band.logo = badImgUrl;
    }
  }, [band]);

  return (
    <>
      <div className="BandList">
        {band.name}

        {/* <Bands key={band.name} band={band} /> */}
      </div>
      <img className="lineup-img" src={band.logo} alt="{band.name}" />
    </>
  );
}

export default BandList;
