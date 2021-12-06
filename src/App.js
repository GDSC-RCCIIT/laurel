import "./App.css";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Navbar />
        <LeftSide />
      </div>
      <img src="images/logo big.png" alt="" className="middle-image" />

      <div className="rightside">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
