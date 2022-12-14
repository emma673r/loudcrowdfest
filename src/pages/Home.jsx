import React from "react";
import Countdown from "react-countdown-simple";
import ArtistSamples from "../components/ArtistSamples";

//The original package code - counts down form one hour
/* const newDate = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString(); */

//A version that works but not set up like the package code
/* const toLCF = new Date();
toLCF.setFullYear(2023, 5, 30); */

//A version that works and are set up like the package code but refreshes the hours, but that's a detail, the effect is there
const toLCF = new Date(new Date().setFullYear(2023, 5, 30)).toISOString();

function Home() {
  return (
    <>
      <div className="countDown">
        <Countdown className={"countdown"} targetDate={toLCF} />
        <p>Until you meet the Gods</p>
      </div>
      <ArtistSamples></ArtistSamples>
    </>
  );
}

export default Home;
