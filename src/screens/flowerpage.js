import Flower from "../components/Flower";
import ColorPalette from "../components/colorPalette";
import React, {useState} from 'react';


export const FlowerPage = () => {

    const [fillColors, setFillColors] = useState(Array(22).fill("white"));
    const [currentColor, setCurrentColor] = useState("blue");
  
    const onFillColor = (i) => {
      let newFillColors = fillColors.slice(0);
      newFillColors[i] = currentColor;
      setFillColors(newFillColors);}

    return (
    <div>
    <div className="flower">
    <Flower fillColors={fillColors} onFill={onFillColor} />
    </div>
    <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} /> 
    </div>)
  };