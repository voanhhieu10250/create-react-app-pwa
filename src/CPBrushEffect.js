import { Fragment, memo, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

function CPBrushEffect({ start, setShowHiddenImg }) {
  const [loadedImg, setLoadedImg] = useState(0);
  const [showImg, setShowImg] = useState(0);

  const listOfImgsForEffect = [
    "/img/brushEffect/brush1.png",
    "/img/brushEffect/brush2.png",
    "/img/brushEffect/brush3.png",
    "/img/brushEffect/brush4.png",
    "/img/brushEffect/brush5.png",
    "/img/brushEffect/brush6.png",
    "/img/brushEffect/brush7.png",
  ];

  useEffect(() => {
    if (start && loadedImg === 8 && showImg < 8) {
      setTimeout(() => setShowImg(showImg + 1), 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedImg, showImg, start]);

  const renderListImg = () =>
    listOfImgsForEffect.map((link, idx) => (
      <Fragment key={link + idx}>
        <CSSTransition
          timeout={200}
          classNames={(idx + 1) % 2 === 0 ? "brushL2R" : "brushR2L"}
          in={showImg <= idx + 1}
          unmountOnExit={true}
        >
          <img
            onLoad={() => setLoadedImg(loadedImg + 1)}
            src={link}
            alt="img"
            hidden={!(loadedImg === listOfImgsForEffect.length + 1)}
          />
        </CSSTransition>
      </Fragment>
    ));

  if (!start) return <div></div>;

  return (
    <Fragment>
      <CSSTransition
        timeout={200}
        classNames="firstImg-"
        in={showImg <= 0}
        unmountOnExit={true}
        onExiting={() => setShowHiddenImg(true)}
      >
        <img
          onLoad={() => setLoadedImg(loadedImg + 1)}
          src="/image.png"
          alt="img"
          hidden={!(loadedImg === 8)}
        />
      </CSSTransition>

      {renderListImg()}
    </Fragment>
  );
}

export default memo(CPBrushEffect);
