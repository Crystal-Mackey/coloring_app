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
</div>
        <div className="download">
          <a id="btnDownloadSVG" class="button gray">
            Download SVG
          </a>
        
      </div>
    </div>
  );
}

export default FlowerPage;
