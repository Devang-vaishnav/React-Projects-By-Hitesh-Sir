import React from 'react';

const Button = (props) => {
    return (
        <button onClick={() => props.changeColor(props.col)} className="text-4xl font-bold rounded-lg p-2 m-2 cursor-pointer" style={{backgroundColor:props.col}}>{props.col}</button>
    );
}

export default Button;
