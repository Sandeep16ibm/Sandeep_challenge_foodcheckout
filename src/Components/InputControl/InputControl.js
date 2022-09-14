import React from "react";
import "./styles.css";

function InputControl(props) {
  return (
    <div className="containerr">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}
export default InputControl;
