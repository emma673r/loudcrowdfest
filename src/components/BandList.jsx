import Bands from "./Bands";
import { useState, useEffect } from "react";

function BandList({ band }) {
  // console.log(band.logo);

  const [badImgUrl, setBadImgUrl] = useState("");
  console.log(badImgUrl);

  useEffect(() => {
    function getBadImg() {
      if (!band.logo.includes("https://")) {
        setBadImgUrl(
          `https://footrypleaseworkanddeletelateron.fly.dev/logos/${band.logo}`
        );
      }
    }
    getBadImg();
    console.log("bad img url ", badImgUrl);
    if (!band.logo.includes("https://")) {
      band.logo = badImgUrl;
    }
  }, []);

  return (
    <>
      <div className="BandList">{band.name}</div>
      {/*       <img src={logo} alt="{band.name}" /> */}
      <img src={band.logo} alt={band.name} />
    </>
  );
}

export default BandList;
