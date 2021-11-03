import React from "react";
import "./App.css";
import GamePanel from "./Components/GamePanel/GamePanel";
import SVGCanvas from "./Components/SVGCanvas/SVGCanvas";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GamePanel />
        {/* <Wrapper title="Exact Aiming">
          <SVGCanvas />
        </Wrapper> */}
      </header>
    </div>
  );
}

export default App;
