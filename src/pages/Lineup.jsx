import React from "react";
import { useState, useEffect } from "react";
import BandList from "../components/BandList";
import Footer from "../components/Footer";
import Layout from "./Layout";

function LineUp({ bands }) {
  return (
    <>
      <Layout></Layout>
      <div className="lineupSamples">
        <h2>OUR BAD ASS 2023 LINE UP</h2>
        {bands.map((band) => (
          <BandList band={band}></BandList>
        ))}
        {/* <BandList bands={bands} /> */}
      </div>
      <Footer />
    </>
  );
}

export default LineUp;
