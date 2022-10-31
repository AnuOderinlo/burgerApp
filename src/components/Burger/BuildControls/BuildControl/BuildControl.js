import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className="buildControl">
      <div className="label">{props.label}</div>
      <button
        disabled={props.disabled}
        onClick={props.removed}
        className="less"
      >
        Less
      </button>
      <button onClick={props.added} className="more">
        More
      </button>
    </div>
  );
};

export default BuildControl;
