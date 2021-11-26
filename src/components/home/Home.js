import React from 'react';
import video from "../video/ColoringFlower.mp4"
import About from '../about/About';
import logo from "../about/Crystal.jpg"

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
        <h2>Meet the Engineer</h2>
        <div>
        <img src={logo} alt="Crystal"/>
            <br/>
            <p>My name is Crystal Mackey. I am a proud mother of a handsome little man who is still in his toddler stage. My little man and my mom are my world and I will do anything for them to have a better life. 
                I graduated Kenzie Academy in July and got a good handle on HTML5, Javascript, CSS, React, Python, Django and Bootstrap. I will never stop learning and am always looking for way to learn and do more.
                I don't settle for "good enough". I want to know how I can do better. When not coding I enjoy reading and playing Xbox with my friends.
            </p>

            <p>This project was made using HTML, JavaScript, CSS, and React.</p>
        </div>
        </>
    )
}

export default Home;
