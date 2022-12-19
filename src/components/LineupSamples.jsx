import React from "react";
import { useState, useEffect } from "react";
function LineupSamples() {
  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getBands() {
      const res = await fetch("https://footrypleaseworkanddeletelateron.fly.dev/bands");
      const bands = await res.json();
      setBands(bands);
    }
    getBands();
  }, []);

  const bandsToDisplay = bands.slice([0 - 8]);

  return (
    <div className="lineupSamples">
      <h2>OUR BAD ASS 2023 LINE UP</h2>
      <div>
        {bandsToDisplay.map((band) => (
          <p key={band.name}>{band.name}</p>
        ))}
      </div>
    </div>
  );
}

export default LineupSamples;
