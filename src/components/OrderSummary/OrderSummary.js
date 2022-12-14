import React from "react";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingreKey) => {
    return (
      <li key={ingreKey}>
        {ingreKey} : {props.ingredients[ingreKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout...</p>
      <p>
        <strong>
          Total Price:
          {props.price.toFixed(2)}
        </strong>
      </p>

      <Button btnType="danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
