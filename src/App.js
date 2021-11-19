import React, { useState } from "react";
import "./App.css";
import Flower from "./components/Flower";
import ColorPalette from "./components/colorPalette";
import { Home } from "./screens/home";
import { About } from "./screens/about";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./screens/nav"
import NotFound from "./screens/notFound";
import { FlowerPage } from "./screens/flowerpage";

const App = () => {
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };

  return (
    <div className="App">
      <div>
        <Router>
        <Nav />
        <Routes>
        <Route path="/" component= {Home}> </Route>
        <Route path="/about" component= {About} />
        <Route default component={NotFound}/>
        <Route path="/flower" component={FlowerPage}></Route>
        </Routes>
        </Router>
      </div>
      <FlowerPage/>
    </div>
  );
};

export default App;
