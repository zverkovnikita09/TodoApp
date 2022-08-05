import React from "react";
import './Counter.css'

const Counter =(props)=>{
    const {left, done} = props;
    return <span className="counter">{left} left, {done} done</span>
}

export default Counter;