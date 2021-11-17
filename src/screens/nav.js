import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <nav>
                    <ul className='nav-links'>
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/about"> About </NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}