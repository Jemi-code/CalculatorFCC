import React from 'react';
import "./styles/app.scss";
import Calculator from './containers/Calculator/Calculator';
import Display from './containers/Display/Display';
import { Container } from 'react-bootstrap';
import {innerText} from "./features/innerText";
// import { addToArray } from './features/redux-toolkit/calculatorSlice';

function App() {
  return (
    <Container className="App d-flex flex-column justify-content-center align-items-center">
      <div className='inner-wrapper border'>
        <div className = "border border-dark border-5">
          <Display />
          <div className='calculator'>
            {
              innerText.map((elem, id) => {
                return <Calculator elem = {elem} key={id} />
              })
            }
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;