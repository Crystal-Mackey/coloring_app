import React from 'react';
import logo from "./Crystal.jpg"

function About() {
    return(
        <div className="about">
            <h1>About Me</h1>
            <img src={logo} alt="Crystal"/>
            <br/>
            <p>My name is Crystal Mackey. I am a proud mother of a handsome little man who is still in his toddler stage. My little man and my mom are my world and I will do anything for them to have a better life. 
                I graduated Kenzie Academy in July and got a good handle on HTML5, Javascript, CSS, React, Python, Django and Bootstrap. I will never stop learning and am always looking for way to learn and do more.
                I don't settle for "good enough". I want to know how I can do better. When not coding I enjoy reading and playing Xbox with my friends.
            </p>
        </div>
        
    )
}

export default About;