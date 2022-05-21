import React from 'react';
import './navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(props)
{
    return (
        <>
        <div className="navbar">
        <div className="Nav-head">COLOR-COUNTER</div>
        <div className="links">
            <Link to="/" className="nav-items" onClick={props.toggleColor}>Color</Link>
            <Link to="Counter" className="nav-items nav-counter" onClick={props.toggleColour}>Counter</Link>
        </div>
        </div>
        </>
    )
}