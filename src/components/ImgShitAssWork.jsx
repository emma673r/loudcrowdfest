import { useRef } from "react";

function ImgShitAssWork({ imgData }) {
  const { logo, logoCredits } = imgData;
  const logoCredit = useRef(null);

  function getImage() {
    if (logo.includes("https://")) {
      return logo;
    }
  }

  return (
    <>
      <img src={logo ? getImage() : null} alt={"band logo"} />
      <div ref={logoCredit}>
        {logoCredits ? <p>{"Credits: " + logoCredits}</p> : null}
      </div>
    </>
  );
}

export default ImgShitAssWork;
