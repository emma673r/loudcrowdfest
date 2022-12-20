import React from "react";
import { useState, useEffect } from "react";
import BandList from "../components/BandList";
import Footer from "../components/Footer";
import Layout from "./Layout";

function LineUp() {
  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getBands() {
      const res = await fetch("https://footrypleaseworkanddeletelateron.fly.dev/bands");
      const bands = await res.json();
      setBands(bands);
    }
    getBands();
  }, []);
  return (
    <>
      <Layout></Layout>
      <div className="lineupSamples">
        <h2>OUR BAD ASS 2023 LINE UP</h2>
        <BandList bands={bands} />
      </div>
      <Footer />
    </>
  );
}

export default LineUp;
