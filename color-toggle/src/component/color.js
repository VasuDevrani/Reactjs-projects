import React from 'react';
import { useState } from 'react';
import './color.css'

export default function Color()
{
    const [text,setText]=useState("");
    const [mystyle,setStyle]=useState({
        backgroundColor: 'aliceblue'
    })

    function changetext(e)
    {
        let newText=e.target.value;
        setText(newText);
    }

    const isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
      }

    function submitText(e)
    {
        e.preventDefault();
        console.log(text);
        if(isColor(text)){
            setStyle({
                backgroundColor: text
            })
        }
    }

    return (
        <>
            <div className="Color">
                <div className="color-box" style={mystyle}>
                    Colorname
                </div>
                <form onSubmit={submitText}>
                <input type="text" value={text} onChange={changetext} placeholder="Your color here" className="color-input"></input>
                </form>
                <button className="color-btn" onClick={submitText}>Change</button>
            </div>
        </>
    )
}