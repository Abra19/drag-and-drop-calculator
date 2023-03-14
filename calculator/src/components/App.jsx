/* eslint-disable functional/no-expression-statements */
import React, { } from 'react';
import {
  Button,
} from 'react-bootstrap';
/* eslint-disable arrow-body-style */
const App = () => {
  return (
    <div className="body d-flex">
      <div className="calc-elements d-flex flex-column">
        <input type="text" value="0" draggable="true" className="inputField border-4 mb-12" readOnly="true" />
        <div className="calc-operators d-flex border-4 mb-12" draggable="true">
          <Button className="operator base-text text-black" disabled>/</Button>
          <Button className="operator base-text text-black" disabled>x</Button>
          <Button className="operator base-text text-black" disabled>-</Button>
          <Button className="operator base-text text-black" disabled>+</Button>
        </div>
        <div className="calc-operators d-grid border-4 mb-12" draggable="true">
          <Button className="chiffre base-text text-black" disabled>7</Button>
          <Button className="chiffre base-text text-black" disabled>8</Button>
          <Button className="chiffre base-text text-black" disabled>9</Button>
          <Button className="chiffre base-text text-black" disabled>4</Button>
          <Button className="chiffre base-text text-black" disabled>5</Button>
          <Button className="chiffre base-text text-black" disabled>6</Button>
          <Button className="chiffre base-text text-black" disabled>1</Button>
          <Button className="chiffre base-text text-black" disabled>2</Button>
          <Button className="chiffre base-text text-black" disabled>3</Button>
          <Button className="chiffre g-big base-text text-black" disabled>0</Button>
          <Button className="chiffre base-text text-black" disabled>,</Button>
        </div>
        <div className="equality border-4" draggable="true">
          <Button className="equal base-text text-white" disabled>=</Button>
        </div>
      </div>
      <div className="field d-flex flex-column">
        <div className="manage border-1 mb-28">
          <Button className="runtime position-relative base-text text-black p-button" disabled>Runtime</Button>
          <Button className="constructor position-relative base-text text-black border-1 p-button">Constructor</Button>
        </div>
        <div className="canvas border-2">
          <p className="text-center big-text mt-210 p-0 mb-2">Перетащите сюда</p>
          <p className="text-center small-text p-0">любой элемент из левой панели</p>
        </div>
      </div>
    </div>
  );
};

export default App;
