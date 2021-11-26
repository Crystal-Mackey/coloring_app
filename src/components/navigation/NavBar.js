import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

function NavBar() {
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
      <li>
          <Link to="/flower">Flower</Link>
      </li>
      <li>
        <Link to="/firetruck">Firetruck</Link>
      </li>
    </ul>
    </>
  );
}

export default NavBar;
