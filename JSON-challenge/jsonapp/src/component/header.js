import React from 'react';
import './header.css';

export default function Header(props)
{
    // const users='users';
    // const comments='comments';
    // const posts='posts';
    return (
        <div className="header">
            <button className="btn btn1" onClick={props.toggle1}>Users</button>
            <button className="btn btn2" onClick={props.toggle2}>Comments</button>
            <button className="btn btn3" onClick={props.toggle3}>Posts</button>
        </div>
    )
}