import React from "react";
import { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [num,setNum]=useState(0);

  const increaseNum=()=>{
      let newNum=num+1;
      setNum(newNum);
  }
  const resetNum=()=>{
    setNum(0);
  }
  const decreaseNum=()=>{
    setNum(num-1);
  }
  return (
    <>
      <div className="counter">
        <div className="counter-num">{num}</div>
        <div className="buttons">
        <button className="counter-btn btn1" onClick={increaseNum}>+</button>
        <button className="counter-btn btn2" onClick={resetNum}>RESET</button>
        <button className="counter-btn btn3" onClick={decreaseNum}>-</button>
        </div>
      </div>
    </>
  );
}
