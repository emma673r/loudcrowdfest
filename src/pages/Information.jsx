import React from "react";
import FestivalMap from "../components/img-components/FestivalMap";
import Layout from "./Layout";
function Information() {
  return (
    <>
      <Layout></Layout>
      <div className="infoPage">
        <FestivalMap></FestivalMap>
      </div>
    </>
  );
}

export default Information;
