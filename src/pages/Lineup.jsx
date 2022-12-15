import React from "react";
import { useState, useEffect } from "react";
import BandList from "../components/BandList";

function LineUp() {
  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getBands() {
      const res = await fetch(
        "https://footrypleaseworkanddeletelateron.fly.dev/bands"
      );
      const bands = await res.json();
      setBands(bands);
    }
    getBands();
  }, []);
  return (
    <div className="lineupSamples">
      <h2>OUR BAD ASS 2023 LINE UP</h2>
      <BandList bands={bands} />
    </div>
  );
}

export default LineUp;
