import React, { useState } from "react";
import Flower from "./Flower";
import Colors from "../colorPalette/Colors";



function FlowerPage() {
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };


  

  
  return (
    <div>
      <div className="flower">
        
       <Flower fillColors={fillColors} onFill={onFillColor} /> 
      </div>
      <div>
        <Colors currentColor={currentColor} changeColor={setCurrentColor} />
</div><a href="flower.flower" download="flower.jpg">
        <div className="download">
          <button>download</button>
        </div></a>
      
    </div>
  );
}

export default FlowerPage;