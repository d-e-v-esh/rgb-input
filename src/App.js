import React from "react";
import "./styles/app.scss";
import { connect } from "react-redux";
import { controlRed, controlGreen, controlBlue } from "./store/color";

const mapDispatch = { controlRed, controlGreen, controlBlue };

const App = () => {
  const redDragHandler = (e) => {
    const redValue = e.target.value;
    console.log(redValue);
    controlRed(redValue);
  };

  const greenDragHandler = (e) => {
    //e.target.value
  };

  const blueDragHandler = (e) => {
    //e.target.value
  };

  return (
    <div>
      <div className="container">
        <div className="colouredSquare" />
      </div>

      <div className="sliderInputs">
        <div className="containerRed">
          <label htmlFor="">
            Red
            <input
              type="range"
              min={0}
              max={255}
              id="redInput"
              onChange={redDragHandler}
            />
          </label>
        </div>

        <div className="containerGreen">
          <label htmlFor="">
            Green
            <input
              type="range"
              min={0}
              max={255}
              id="greenInput"
              onChange={greenDragHandler}
            />
          </label>
        </div>

        <div className="containerBlue">
          <label htmlFor="">
            Blue
            <input
              type="range"
              min={0}
              max={255}
              id="blueInput"
              onChange={blueDragHandler}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
