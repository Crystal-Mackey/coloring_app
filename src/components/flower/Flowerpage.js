import React, { useState } from "react";
import Flower from "./Flower";
import Colors from "../colorPalette/Colors";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";



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
        <div className="sharebuttons">
        <FacebookShareButton
        url={"https://coloringpagemintbean.herokuapp.com/flower"}
        quote={"Look at what I made!"}
        hashtag={"#coloring"}
        description={"flower coloring page"}
        className="flowerfacebookbutton"
      >
      <FacebookIcon size={32} round /> Share
    </FacebookShareButton>
    <TwitterShareButton
        title={"Flower"}
        url={"https://coloringpagemintbean.herokuapp.com/flower"}
        hashtags={["flower", "color"]}
      >
        <TwitterIcon size={32} round />
        Share
      </TwitterShareButton>
    
    
    
    
    </div>
{/* </div><a href="flower.flower" download="flower.jpg">
        <div className="download">
          <button>download</button>
        </div></a> */}
      </div>
    </div>
  );
}

export default FlowerPage;