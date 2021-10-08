import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./Components/Wrapper";
import SVGCanvas from "./Components/SVGCanvas/SVGCanvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <SVGCanvas />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
