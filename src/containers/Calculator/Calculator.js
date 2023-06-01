import React from 'react';
import './Calculator.scss'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToArray, clearOne, clearAll, solve } from '../../features/redux-toolkit/calculatorSlice';

const Calculator = (props) => {
    //const calc = useSelector(state => state.calculator.calc);
    //console.log(calc.join(""));
    const dispatch = useDispatch();
    // onClick={() => dispatch(addToArray(props.elem.text))}

    const updateArray = (e) => {
        let innerText = e.target.innerText;
        //console.log(innerText);
        if(innerText !== "AC" && innerText !== "Del" && innerText !== "="){
            dispatch(addToArray(props.elem.text));
        } else if(innerText === "Del") {
            dispatch(clearOne());
        } else if(innerText === "AC"){
            dispatch(clearAll())
        } else {
            dispatch(solve())
        }

        if(innerText === ""){
            innerText = "0"
        }
    }

    return (
        <Button id = {props.elem.id} className='eachButton btn btn-lg p-3 rounded-0 border-sm border-dark text-light' onClick={updateArray}>
            {props.elem.text}
        </Button>
    );
};

export default Calculator;