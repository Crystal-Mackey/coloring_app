import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Form from "./components/contact/Contact";
import About from "./components/about/About";
import {Route, Routes } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import FlowerPage from "./components/flower/Flowerpage"
import FiretruckPage from "./components/firetruck/Firetruckpage";

const App = () => {
  // const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  // const [currentColor, setCurrentColor] = useState("blue");

  // const onFillColor = (i) => {
  //   let newFillColors = fillColors.slice(0);
  //   newFillColors[i] = currentColor;
  //   setFillColors(newFillColors);
  // };

  
  return (
    <div className="App">
      <div className="page">
     <div className="Navbar">
      <NavBar/>
      </div>
      
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/about" element={<About/>} />
     <Route exact path="/contact" element={<Form/>} />
     <Route exact path="/flower" element={<FlowerPage/>} />
     <Route exact path="/firetruck" element={<FiretruckPage/>} />
     </Routes>
    
      </div></div>
  );
};

export default App;
