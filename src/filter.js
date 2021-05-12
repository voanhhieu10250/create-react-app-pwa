import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import CPChangeImg from "./CPChangeImg";

function CPfilter({ start }) {
  const [loadedImg, setLoadedImg] = useState(0);
  const [doneAnimate, setDoneAnimate] = useState(false);
  const [showImg, setShowImg] = useState(0);
  const [mainReady, setMain] = useState(false);

  useEffect(() => {
    if (start && mainReady && loadedImg === 8 && showImg < 8) {
      setTimeout(() => setShowImg(showImg + 1), 200);
    }
    // if (start && mainReady && isReady && showImg < 7) {
    //   setTimeout(() => setShowImg(showImg + 1), 200);
    // }
    // if (start && mainReady && loadedImg === 7 && !isReady) {
    //   setIsReady(true);
    // }
  }, [loadedImg, showImg, start, mainReady]);

  const handleLoaded = () => {
    setLoadedImg(loadedImg + 1);
  };

  if (!start) return <div className="filter" />;
  console.log("main: ", mainReady);
  return (
    <div className="filter">
      {/* Main image behind the effect */}
      {/* <img
        onLoad={() => setMain(true)}
        src="/img/brushEffect/main/main.gif"
        alt="img"
        hidden={!(mainReady && loadedImg === 8)}
      /> */}

      <CPChangeImg
        setMainReady={setMain}
        mainReady={mainReady}
        endAnimation={doneAnimate}
      />
      {/* End */}

      <CSSTransition
        timeout={200}
        classNames="firstImg-"
        in={mainReady && showImg <= 0}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/image.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>

      <CSSTransition
        timeout={200}
        classNames="brushR2L"
        in={mainReady && showImg <= 1}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush1.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="brushL2R"
        in={mainReady && showImg <= 2}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush2.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="brushR2L"
        in={mainReady && showImg <= 3}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush3.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="brushL2R"
        in={mainReady && showImg <= 4}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush4.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="brushR2L"
        in={mainReady && showImg <= 5}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush5.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="brushL2R"
        in={mainReady && showImg <= 6}
        unmountOnExit={true}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush6.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="brushR2L"
        in={mainReady && showImg <= 7}
        unmountOnExit={true}
        onExit={() => {
          setDoneAnimate(true);
        }}
      >
        <img
          onLoad={handleLoaded}
          src="/img/brushEffect/brush7.png"
          alt="img"
          hidden={!(mainReady && loadedImg === 8)}
        />
      </CSSTransition>

      {/* Final image */}
      <img src="/fullImg.png" alt="img" hidden={!doneAnimate} />
    </div>
  );
}

export default CPfilter;
