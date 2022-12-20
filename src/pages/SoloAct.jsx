import React from "react";
import { useLocation } from "react-router-dom";
import Bands from "../components/Bands";
import Footer from "../components/Footer";
import Layout from "./Layout";
function SoloAct({ bands }) {
  const location = useLocation();
  console.log(location.state.name);

  let theBand;
  bands.map((band) => {
    if (band.name === location.state.name) {
      theBand = band;
    }
  });

  console.log(theBand);

  return (
    <>
      <Layout />
      <h2>{theBand.name}</h2>
      <div className="imgflex">
        <img className="soloActImg" src={theBand.logo} alt={theBand.name} />
      </div>

      <h3>Genre</h3>
      <p className="center-p">{theBand.genre}</p>
      <h3>Bio</h3>
      <p className="center-p">{theBand.bio}</p>
      <h3>Members</h3>
      {theBand.members.map((member) => (
        <p className="center-p">{member}</p>
      ))}
      <h3>Logo Credits</h3>
      <p className="center-p">{theBand.logoCredits}</p>
      <Footer />
    </>
  );
}

export default SoloAct;
