import Header from "./components/Header";
import Home from "./components/Home";
import ScrollBtn from "./utils/ScrollBtn";
import "../src/App.css";
import Abouts from "./components/Abouts";
import Info from "./components/Info";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div id="1">
        <Info />
      </div>
      <div id="2">
        <Abouts />
      </div>
      <div id="3">
        <Skill />
      </div>
      <div id="4">
        <Project />
      </div>
      <div id="5">
        <Footer />
      </div>
      <ScrollBtn />
    </>
  );
}

export default App;
