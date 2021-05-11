import { useState } from "react";
import CPfilter from "./filter";

function Home() {
  const [toggleImg2, setToggleImg2] = useState(true);
  return (
    <div>
      <h1>Home component</h1>
      <div className="box">
        {/* <div className="firstImg"></div> */}
        <CPfilter />
        <div className="fullImg" hidden={toggleImg2}></div>
      </div>
      <div>
        <button onClick={() => setToggleImg2(!toggleImg2)}>Toggle Img 2</button>
      </div>
    </div>
  );
}

export default Home;
