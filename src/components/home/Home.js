import React from 'react';
import video from "../video/ColoringFlower.mp4"

function Home() {
    return(
        <>
        <div>
            <h1>Colorama</h1>

            <p>This chance to color digitally is partially inspired by my little man.</p>
            <p>Navigate to one of the other links for a chance to choose from a variety of colors to make a masterpiece of your choosing.</p>
        </div>
        <div className="flowervideo">
            <h2>A little how to! Super simple and easy. Even my three year old can do it!</h2>
        <video width="750" height="500" controls>
            <source src={video} type="video/mp4"/>
        </video>
        </div>
        </>
    )
}

export default Home;
