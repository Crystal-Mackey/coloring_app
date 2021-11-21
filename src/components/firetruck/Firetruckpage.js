import React, {useState} from 'react';
import FireTruck from './firetruck';
import Colors from '../colorPalette/Colors';

function FiretruckPage () {
    const [fillColors, setFillColors] = useState(Array(36).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
}
return (
    <div>
        <div className="firetruck">
            <FireTruck fillColors={fillColors} onFill={onFillColor} />
        </div>
        <Colors currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
)
}

export default FiretruckPage