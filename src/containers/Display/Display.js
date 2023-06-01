import React, { useEffect } from 'react';
import "./Display.scss";
import { useSelector } from 'react-redux';

const Display = () => {
    const calc = useSelector(state => state.calculator.calc);   

    // const hmmm = "++++++++++++";
    // console.log(hmmm.substr())

    useEffect(() =>{
        const display = document.getElementById("display");
        display.innerHTML = calc.join("");
    }, [calc]);

    return (
        <div className='display'>
            <p rows={1} disabled id = "display" className='text-end text-white bg-dark'></p>
        </div>
    );
};

export default Display;