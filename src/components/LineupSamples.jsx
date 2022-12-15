import React from "react";
import { useState, useEffect } from "react";
function LineupSamples() {
  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getBands() {
      const res = await fetch(
        "https://footrypleaseworkanddeletelateron.fly.dev/bands?start=10"
      );
      const bands = await res.json();
      setBands(bands);
    }
    getBands();
  }, []);

  /*   useEffect(() => {
    async function getBands() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []); */

  return (
    <div className="lineupSamples">
      <h2>OUR BAD ASS 2023 LINE UP</h2>
      <div>
        {bands.map((band) => (
          <p className="small-text" key={band.name}>
            {band.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LineupSamples;
