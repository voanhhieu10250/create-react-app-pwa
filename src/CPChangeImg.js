import { Fragment, memo, useEffect, useState } from "react";

function CPChangeImg({
  setMainReady,
  mainReady,
  endAnimation,
  timeout = 1500,
}) {
  const [countLoadedImg, setCountLoadedImg] = useState(0);
  const [showImg, setShowImg] = useState(1);
  const images = [
    // "/img/brushEffect/main/img1.jpg",
    // "/img/brushEffect/main/img2.jpg",
    // "/img/brushEffect/main/img3.jpg",
    // "/img/brushEffect/main/img4.jpg",
    "/img/brushEffect/main/img5.png",
  ];

  useEffect(() => {
    if (countLoadedImg === images.length && !mainReady) setMainReady(true);
  }, [countLoadedImg]);

  useEffect(() => {
    if (endAnimation) setCountLoadedImg(0);
    if (countLoadedImg === images.length) {
      setTimeout(() => {
        if (showImg === countLoadedImg) setShowImg(1);
        else setShowImg(showImg + 1);
      }, timeout / countLoadedImg);
    }
  }, [countLoadedImg, showImg]);

  const renderImgTags = () =>
    images.map((imgLink, idx) => {
      return (
        <img
          key={idx + "-" + imgLink}
          onLoad={() => setCountLoadedImg(countLoadedImg + 1)}
          src={imgLink}
          alt="img"
          hidden={!(showImg === idx + 1)}
        />
      );
    });

  console.log("CPChangeImg: ", countLoadedImg);
  return <Fragment>{!endAnimation && renderImgTags()}</Fragment>;
}

export default memo(CPChangeImg);
