import React from "react";
import "./styles/app.scss";
import reducer from "./store/color";
import { useSelector, useDispatch } from "react-redux";
import { controlRed, controlGreen, controlBlue } from "./store/color";

const App = () => {
  const { red, green, blue } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  const redDragHandler = (e) => {
    const redValue = e.target.value;
    console.log(redValue);
    dispatch(controlRed(redValue));
  };

  const greenDragHandler = (e) => {
    const greenValue = e.target.value;
    dispatch(controlGreen(greenValue));
  };

  const blueDragHandler = (e) => {
    const greenValue = e.target.value;
    dispatch(controlBlue(greenValue));
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
              // value={0}
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
              // value={50}
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
              // value={0}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
