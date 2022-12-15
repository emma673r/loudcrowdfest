import React from "react";
import { useNavigate } from "react-router-dom";
import MerchCap from "./MerchCap";
import MerchHoodie from "./MerchHoodie";
import PrimaryButton from "./PrimaryButton";
function MerchSamples() {
  const navigate = useNavigate();
  function goToShop() {
    navigate("../shop");
  }
  return (
    <div className="merchSamples">
      <h4>LCF MERCH</h4>
      <div className="alignMerch">
        <MerchHoodie></MerchHoodie>
        <MerchCap></MerchCap>
      </div>
      <PrimaryButton desc={"BUY MERCH"} clickAction={goToShop}></PrimaryButton>
    </div>
  );
}

export default MerchSamples;
