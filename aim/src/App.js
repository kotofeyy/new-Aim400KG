import React from "react";
import "./App.css";
import SVGCanvas from "./Components/SVGCanvas/SVGCanvas";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper title="">
          <SVGCanvas />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
