import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="buildControls">
      {controls.map((crtl) => {
        return <BuildControl key={crtl.label} label={crtl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
