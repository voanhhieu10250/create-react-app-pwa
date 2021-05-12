import { useEffect, useState } from "react";
import CPBrushEffect from "./CPBrushEffect";

function CPfilter({ start }) {
  const [mainReady, setMain] = useState(false);
  const [showHiddenImg, setShowHiddenImg] = useState(false);
  console.log("main");

  useEffect(() => {
    return () => {
      setMain(false);
      setShowHiddenImg(false);
    };
  }, [start]);

  if (!start) return <div className="filter" />;
  return (
    <div className="filter">
      {/* Main image behind the effect */}
      <img
        onLoad={() => setMain(true)}
        src="/fullImg.png"
        alt="img"
        hidden={!showHiddenImg}
      />
      {/* End */}
      {mainReady && (
        <CPBrushEffect start={mainReady} setShowHiddenImg={setShowHiddenImg} />
      )}
    </div>
  );
}

export default CPfilter;
