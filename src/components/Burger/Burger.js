import React from "react";

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  // console.log(props);
  const ingredientsArr = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={`${igKey}${i}`} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(ingredientsArr);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredientsArr.length <= 0 ? (
        <p>Can you start adding ingredients</p>
      ) : (
        ingredientsArr
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
