import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return props.show ? (
    <div onClick={props.clicked} className="backdrop">
      {props.children}
    </div>
  ) : null;
};

export default Backdrop;
