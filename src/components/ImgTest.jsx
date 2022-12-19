import React from "react";
import { useState, useEffect } from "react";
import ImgShitAssWork from "./ImgShitAssWork";
function ImgTest() {
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

  const bandLogoUrl = bands.map((element) => element.logo);
  console.log(bandLogoUrl);

  return (
    <>
      <ImgShitAssWork imgData={bands}></ImgShitAssWork>
    </>
  );
}

export default ImgTest;

/* Et tidligere forsøg 

 const [img, setImg] = useState([]);
  useEffect(() => {
    async function getImages() {
      const res = await fetch(
        `https://footrypleaseworkanddeletelateron.fly.dev/bands${bandLogoUrl}`
      );
      const imgBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imgBlob);
      setImg(imageObjectURL);
    }
    getImages();
  }, []); */
/*   const [img, setImg] = useState();
  const fetchImage = async () => {
    const res = await fetch(
      `https://footrypleaseworkanddeletelateron.fly.dev/bands${bandLogoUrl}`
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  useEffect(() => {
    fetchImage();
  }, []); */
