import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

function CPfilter() {
  const [loadedImg, setLoadedImg] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showImg, setShowImg] = useState(-1);

  useEffect(() => {
    if (isReady && showImg < 7) {
      setTimeout(() => setShowImg(showImg + 1), 200);
    }
    if (loadedImg === 7 && !isReady) {
      setIsReady(true);
    }
  }, [loadedImg, isReady, showImg]);

  const handleLoaded = () => {
    setLoadedImg(loadedImg + 1);
  };

  return (
    <div className="filter">
      <CSSTransition timeout={200} classNames="firstImg-" in={showImg >= 0}>
        <img
          onLoad={handleLoaded}
          src="/image.png"
          alt="img"
          hidden={!(showImg >= 0)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushR2L" in={showImg >= 1}>
        <img
          onLoad={handleLoaded}
          src="/Mask1.png"
          alt="img"
          hidden={!(showImg >= 1)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushL2R" in={showImg >= 2}>
        <img
          onLoad={handleLoaded}
          src="/Mask2.png"
          alt="img"
          hidden={!(showImg >= 2)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushR2L" in={showImg >= 3}>
        <img
          onLoad={handleLoaded}
          src="/Mask3.png"
          alt="img"
          hidden={!(showImg >= 3)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushL2R" in={showImg >= 4}>
        <img
          onLoad={handleLoaded}
          src="/Mask4.png"
          alt="img"
          hidden={!(showImg >= 4)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushR2L" in={showImg >= 5}>
        <img
          onLoad={handleLoaded}
          src="/Mask5.png"
          alt="img"
          hidden={!(showImg >= 5)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushL2R" in={showImg >= 6}>
        <img
          onLoad={handleLoaded}
          src="/Mask6.png"
          alt="img"
          hidden={!(showImg >= 6)}
        />
      </CSSTransition>
      <CSSTransition timeout={100} classNames="brushR2L" in={showImg >= 7}>
        <img
          onLoad={handleLoaded}
          src="/Mask7.png"
          alt="img"
          hidden={!(showImg >= 7)}
        />
      </CSSTransition>
    </div>
  );
}

export default CPfilter;
