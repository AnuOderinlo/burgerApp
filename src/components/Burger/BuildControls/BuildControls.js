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
      <p>
        Total Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((crtl) => {
        return (
          <BuildControl
            removed={() => props.removeIngredient(crtl.type)}
            added={() => props.addIngredient(crtl.type)}
            key={crtl.label}
            label={crtl.label}
            disabled={props.disabled[crtl.type]}
          />
        );
      })}
      <button onClick={props.ordered} disabled={!props.purchasable} className="orderButton">
        ORDER NOW
      </button>
    </div>
  );
};
// added={() => props.addIngredient(crtl.type)}
export default BuildControls;
