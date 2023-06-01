import { createSlice } from "@reduxjs/toolkit";
import { calculate } from "calculy";

const initialState = {
    calc: ["0"],
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addToArray: (state, action) => {
            if(state.calc[0] === "0"){
                state.calc.shift();
                state.calc.push(action.payload);
            } else {
                state.calc.push(action.payload);
            }
        }, 
        clearAll: () => {
            return initialState;
        },
        clearOne: (state) => {
            if(state.calc.length >= 2){
                state.calc.pop();
            } else {
                return initialState;
            }
        },
        solve: (state) => {
            let string = state.calc.join("");

           // begin regex thingy
            const remMulti = /[+/*.-]{2,}/g;
            const matchh = remMulti.test(string);
            console.log(matchh);
            

            if(matchh){
                const regtest = string.match(remMulti);
                const repStr = regtest.join("");
                console.log(repStr);
                if(/-{3,}/g.test(repStr) || !/-{2}/g.test(repStr)){
                    if(!/^[+/*]-$/.test(repStr)){
                        const repReg = repStr.substr(0, repStr.length-1);
                        //console.log(repReg);
                        string = string.replace(repReg, "");
                    }
                }
            }

            // || !/^[+/*]-/.test(repStr))
            const solution = calculate(string);
            const stringSolution = `${solution}`;
            state.calc = stringSolution.split("");
        },
    }
});

export const {addToArray, clearAll, clearOne, solve} = calculatorSlice.actions;
export default calculatorSlice.reducer;